"use client";

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { MoreHorizontal, Edit, FileText, Trash2, Plus, LogOut, Loader2 } from 'lucide-react';

interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  last_modified: string | null;
  published: boolean;
}

function LogoutButton() {
  return (
    <form action="/api/admin/logout" method="POST">
      <button
        type="submit"
        className="flex items-center gap-2 text-[13px] text-content-secondary hover:text-white transition-colors px-3 py-1.5 rounded-[8px] hover:bg-elevated border border-transparent hover:border-border-subtle"
      >
        <LogOut className="w-4 h-4" />
        Logout
      </button>
    </form>
  );
}

export default function AdminDashboardPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [actionInProgress, setActionInProgress] = useState<string | null>(null);

  const fetchArticles = useCallback(async () => {
    const res = await fetch('/api/articles');
    if (res.ok) {
      const json = await res.json();
      setArticles(json.data ?? []);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  const toggleDropdown = (slug: string) => {
    setActiveDropdown(prev => prev === slug ? null : slug);
  };

  const handleDelete = async (slug: string) => {
    if (deleteConfirm !== slug) {
      setDeleteConfirm(slug);
      setActiveDropdown(null);
      return;
    }
    setActionInProgress(slug);
    const res = await fetch(`/api/articles/${slug}`, { method: 'DELETE' });
    if (res.ok) {
      setArticles(prev => prev.filter(a => a.slug !== slug));
    }
    setDeleteConfirm(null);
    setActionInProgress(null);
  };

  const handleToggleDraft = async (slug: string, currentlyPublished: boolean) => {
    setActionInProgress(slug);
    setActiveDropdown(null);
    const res = await fetch(`/api/articles/${slug}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ published: !currentlyPublished }),
    });
    if (res.ok) {
      setArticles(prev => prev.map(a => a.slug === slug ? { ...a, published: !currentlyPublished } : a));
    }
    setActionInProgress(null);
  };

  return (
    <main className="pt-[140px] pb-[128px]">
      <section className="max-w-[1200px] mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 bg-elevated border border-border-subtle rounded-[8px] px-3 py-1 mb-4">
              <span className="text-[11px] font-semibold tracking-widest text-content-secondary uppercase">Admin Access Only</span>
            </div>
            <h1 className="font-display text-[40px] font-bold leading-[1.05] text-white">Article Dashboard</h1>
            <p className="text-[16px] text-content-secondary mt-2">Manage your insights, news, and case studies.</p>
          </div>
          <div className="flex items-center gap-3">
            <LogoutButton />
            <Link href="/admin/articles/create" className="btn-primary flex items-center gap-2">
              <Plus className="w-4 h-4" /> Create New Article
            </Link>
          </div>
        </div>

        {/* Delete confirmation banner */}
        {deleteConfirm && (
          <div className="mb-6 bg-red-500/10 border border-red-500/30 rounded-[12px] px-6 py-4 flex items-center justify-between animate-fade-in">
            <p className="text-[14px] text-red-400">Are you sure you want to permanently delete this article? This cannot be undone.</p>
            <div className="flex items-center gap-3 ml-6 flex-shrink-0">
              <button onClick={() => setDeleteConfirm(null)} className="btn-secondary !h-[36px] !text-[13px] !px-4">Cancel</button>
              <button
                onClick={() => handleDelete(deleteConfirm)}
                disabled={!!actionInProgress}
                className="h-[36px] px-4 rounded-[8px] bg-red-500 hover:bg-red-600 text-white text-[13px] font-semibold transition-colors disabled:opacity-70"
              >
                {actionInProgress ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Delete'}
              </button>
            </div>
          </div>
        )}

        {/* Dashboard Table */}
        <div className="bg-surface border border-border-subtle rounded-[16px] overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border-subtle bg-elevated/50">
                  <th className="px-6 py-4 text-[12px] font-semibold tracking-widest text-content-secondary uppercase">Article</th>
                  <th className="px-6 py-4 text-[12px] font-semibold tracking-widest text-content-secondary uppercase">Status</th>
                  <th className="px-6 py-4 text-[12px] font-semibold tracking-widest text-content-secondary uppercase">Created</th>
                  <th className="px-6 py-4 text-[12px] font-semibold tracking-widest text-content-secondary uppercase">Last Modified</th>
                  <th className="px-6 py-4 text-[12px] font-semibold tracking-widest text-content-secondary uppercase text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                {isLoading ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center">
                      <Loader2 className="w-6 h-6 animate-spin text-brand-primary mx-auto" />
                    </td>
                  </tr>
                ) : articles.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-content-secondary text-[14px]">
                      No articles yet. <Link href="/admin/articles/create" className="text-brand-primary hover:underline">Create your first article.</Link>
                    </td>
                  </tr>
                ) : articles.map((article, index) => {
                  const isNearBottom = index >= articles.length - 2;
                  const isBusy = actionInProgress === article.slug;
                  return (
                    <tr key={article.slug} className="hover:bg-elevated/30 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="w-[120px] aspect-[3/2] bg-base border border-border-subtle rounded-[8px] flex items-center justify-center overflow-hidden flex-shrink-0 relative">
                            <span className="text-[10px] text-content-muted">No Image</span>
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 to-transparent mix-blend-overlay" />
                          </div>
                          <div className="max-w-[300px]">
                            <p className="text-[15px] font-semibold text-white truncate" title={article.title}>
                              {article.title}
                            </p>
                            <p className="text-[13px] text-content-secondary mt-1">{article.category}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {article.published ? (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-green-500/10 text-green-500 border border-green-500/20">
                            Published
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                            Draft
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-[14px] text-content-secondary">
                        {article.date}
                      </td>
                      <td className="px-6 py-4 text-[14px] text-content-secondary">
                        {article.last_modified || article.date}
                      </td>
                      <td className="px-6 py-4 text-right relative">
                        {isBusy ? (
                          <div className="p-2 flex justify-end">
                            <Loader2 className="w-5 h-5 animate-spin text-content-secondary" />
                          </div>
                        ) : (
                          <button
                            onClick={() => toggleDropdown(article.slug)}
                            className="p-2 rounded-full text-content-secondary hover:text-white hover:bg-elevated transition-colors"
                          >
                            <MoreHorizontal className="w-5 h-5" />
                          </button>
                        )}

                        {activeDropdown === article.slug && (
                          <div className={`absolute right-8 w-48 bg-elevated border border-border-subtle rounded-[12px] shadow-2xl py-2 z-50 animate-fade-in ${isNearBottom ? 'bottom-12' : 'top-12'}`}>
                            <Link
                              href={`/admin/articles/edit/${article.slug}`}
                              className="w-full text-left px-4 py-2 text-[14px] text-white hover:bg-surface flex items-center gap-2 transition-colors"
                            >
                              <Edit className="w-4 h-4 text-content-secondary" /> Edit Article
                            </Link>
                            <button
                              onClick={() => handleToggleDraft(article.slug, article.published)}
                              className="w-full text-left px-4 py-2 text-[14px] text-white hover:bg-surface flex items-center gap-2 transition-colors"
                            >
                              <FileText className="w-4 h-4 text-content-secondary" />
                              {article.published ? 'Move to Draft' : 'Publish'}
                            </button>
                            <div className="h-[1px] bg-border-subtle my-1" />
                            <button
                              onClick={() => handleDelete(article.slug)}
                              className="w-full text-left px-4 py-2 text-[14px] text-red-400 hover:bg-surface flex items-center gap-2 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" /> Delete Article
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {activeDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </main>
  );
}

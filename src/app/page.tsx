import { Activity, ArrowRight, ArrowDown, Brain, BrainCircuit, Bus, Coffee, Cpu, GraduationCap, Home, Layers, Lock, Play, Plus, Radio, Send, ShieldAlert, Tractor, Zap } from 'lucide-react';
import Link from 'next/link';
import HeroGraphic from '@/components/HeroGraphic';
import ArchitecturePipeline from '@/components/ArchitecturePipeline';

export default function Page() {
  return (
<main className="pt-[72px]">

<section className="relative min-h-[calc(100vh-72px)] flex items-center overflow-hidden border-b border-border-subtle">

<div className="absolute top-1/4 -right-[20%] w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-[1440px] w-full mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

<div className="lg:col-span-7 flex flex-col items-start pr-8 mt-12 md:mt-0">
<div className="inline-flex items-center space-x-2 bg-brand-primary/10 border border-brand-primary/30 rounded-[8px] px-3 py-1 mb-6 mt-8">
<ShieldAlert className="w-[14px] h-[14px] text-brand-primary" />
<span className="text-[11px] font-semibold tracking-widest text-brand-primary uppercase">Real-Time AI Risk Detection</span>
</div>
<h1 className="text-[48px] md:text-[80px] font-display font-bold leading-[1.05] text-white mb-6">
                        Proactive Safety Intelligence <br/>
<span className="text-brand-primary">for Every Environment.</span>
</h1>
<p className="text-body-lg text-content-secondary mb-10 max-w-[640px]">
                        SafeNest is an AI-powered safety platform that detects environmental risks in real-time, intervening to save lives, secure facilities, and give families true peace of mind before critical events occur.
                    </p>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-16">
<Link className="btn-primary w-full sm:w-auto" href="/solutions/platform">Explore Our Platform →</Link>
<Link className="btn-secondary w-full sm:w-auto" href="/demo">
                            Watch Overview 
                            <Play className="w-4 h-4 ml-2 fill-current"></Play>
</Link>
</div>
</div>

<div className="lg:col-span-5 relative h-[600px] w-full flex items-center justify-center">

<HeroGraphic />
</div>
</div>
<a href="#features" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce z-20 cursor-pointer group">
  <span className="text-[11px] text-content-muted tracking-widest uppercase mb-2 group-hover:text-brand-primary transition-colors">Scroll</span>
  <div className="w-8 h-8 rounded-full border border-border-subtle flex items-center justify-center bg-surface/50 backdrop-blur group-hover:border-brand-primary transition-colors">
    <ArrowDown className="w-4 h-4 text-content-secondary group-hover:text-brand-primary transition-colors" />
  </div>
</a>
</section>

<section id="features" className="bg-surface w-full py-[40px] border-b border-border-subtle">
<div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[64px]">
<div className="flex flex-col">
<BrainCircuit className="w-[32px] h-[32px] text-brand-primary mb-[16px]"></BrainCircuit>
<h3 className="font-body font-bold text-[16px] text-content-primary mb-2">AI-Powered Risk Intelligence</h3>
<p className="text-[13px] text-content-secondary">Machine learning models that analyze environmental context to predict anomalies before they become critical.</p>
</div>
<div className="flex flex-col">
<Layers className="w-[32px] h-[32px] text-brand-primary mb-[16px]"></Layers>
<h3 className="font-body font-bold text-[16px] text-content-primary mb-2">Multi-Sensor Fusion</h3>
<p className="text-[13px] text-content-secondary">Correlating thermal, acoustic, visual, and environmental data for zero-false-positive accuracy.</p>
</div>
<div className="flex flex-col">
<ShieldAlert className="w-[32px] h-[32px] text-brand-primary mb-[16px]"></ShieldAlert>
<h3 className="font-body font-bold text-[16px] text-content-primary mb-2">Proactive by Design</h3>
<p className="text-[13px] text-content-secondary">Shifting safety from reactive monitoring to preventative intervention through real-time automation.</p>
</div>
<div className="flex flex-col">
<Lock className="w-[32px] h-[32px] text-brand-primary mb-[16px]"></Lock>
<h3 className="font-body font-bold text-[16px] text-content-primary mb-2">Secure & Reliable</h3>
<p className="text-[13px] text-content-secondary">Military-grade encryption and edge-computing capabilities ensure protection even when disconnected.</p>
</div>
</div>
</section>

<section className="py-[128px] max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-[96px] items-center">
<div className="flex flex-col">
<span className="text-eyebrow mb-4">THE SAFENEST PLATFORM</span>
<h2 className="text-display-lg text-content-primary mb-6">A Unified Platform.<br/>Lives Protected.</h2>
<p className="text-body-md text-content-secondary mb-8 max-w-[500px]">
                    At the core of every SafeNest product is a sophisticated intelligence engine. By processing multi-factor data at the edge, our platform delivers sub-second predictive insights that scale from protecting a single infant in a car seat to securing an entire metropolitan facility.
                </p>
<Link className="btn-ghost" href="#">Explore Our Technology →</Link>
</div>

<div className="bg-surface border border-border-subtle rounded-xl p-8 overflow-hidden relative">

<div className="absolute top-1/2 left-8 right-8 h-[1px] bg-border-accent -translate-y-1/2 hidden md:block z-0"></div>
<div className="flex flex-col md:flex-row justify-between items-center relative z-10 gap-6 md:gap-0">
<div className="flex flex-col items-center bg-base p-4 rounded-lg border border-border-subtle w-full md:w-auto">
<Radio className="w-6 h-6 text-brand-primary mb-3"></Radio>
<span className="text-[11px] font-mono text-content-primary text-center">Data<br/>Acquisition</span>
</div>
<ArrowRight className="w-4 h-4 text-brand-primary hidden md:block"></ArrowRight>
<ArrowDown className="w-4 h-4 text-brand-primary md:hidden"></ArrowDown>
<div className="flex flex-col items-center bg-base p-4 rounded-lg border border-border-subtle w-full md:w-auto">
<Cpu className="w-6 h-6 text-brand-primary mb-3"></Cpu>
<span className="text-[11px] font-mono text-content-primary text-center">Edge<br/>Processing</span>
</div>
<ArrowRight className="w-4 h-4 text-brand-primary hidden md:block"></ArrowRight>
<ArrowDown className="w-4 h-4 text-brand-primary md:hidden"></ArrowDown>
<div className="flex flex-col items-center bg-elevated border-brand-primary border shadow-glow p-4 rounded-lg transform scale-105 md:scale-110 w-full md:w-auto my-2 md:my-0">
<Brain className="w-6 h-6 text-brand-primary mb-3"></Brain>
<span className="text-[11px] font-mono font-bold text-white text-center">AI Risk<br/>Modeling</span>
</div>
<ArrowRight className="w-4 h-4 text-brand-primary hidden md:block"></ArrowRight>
<ArrowDown className="w-4 h-4 text-brand-primary md:hidden"></ArrowDown>
<div className="flex flex-col items-center bg-base p-4 rounded-lg border border-border-subtle w-full md:w-auto">
<Zap className="w-6 h-6 text-brand-primary mb-3"></Zap>
<span className="text-[11px] font-mono text-content-primary text-center">Decision<br/>Engine</span>
</div>
<ArrowRight className="w-4 h-4 text-brand-primary hidden md:block"></ArrowRight>
<ArrowDown className="w-4 h-4 text-brand-primary md:hidden"></ArrowDown>
<div className="flex flex-col items-center bg-base p-4 rounded-lg border border-border-subtle w-full md:w-auto">
<Send className="w-6 h-6 text-brand-primary mb-3"></Send>
<span className="text-[11px] font-mono text-content-primary text-center">Action &<br/>Integration</span>
</div>
</div>
</div>
</section>

<section className="w-full bg-subtle py-16 md:py-[128px] border-y border-border-subtle overflow-hidden">
<div className="max-w-[1440px] mx-auto px-8 flex flex-col items-center">
<div className="text-center mb-12 md:mb-[64px]">
<h2 className="text-display-md text-content-primary">The Architecture of Protection</h2>
</div>

<ArchitecturePipeline />
</div>
</section>

<section className="py-[128px] max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-[64px]">
<div className="lg:col-span-4 flex flex-col pt-10">
<span className="text-eyebrow mb-4">APPLICATIONS</span>
<h2 className="text-display-lg text-content-primary mb-6">One Platform.<br/>Many Use Cases.<br/>Endless Possibilities.</h2>
<p className="text-body-md text-content-secondary mb-8">
                    Our AI models are trained on diverse environmental datasets, allowing the SafeNest platform to deploy specialized protection capabilities across entirely different physical environments without changing the core infrastructure.
                </p>
<div>
<Link className="btn-secondary" href="#">View All Applications →</Link>
</div>
</div>
<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-6 gap-6">

{/* Hero Industries */}
<Link href="/applications" className="md:col-span-3 group relative h-[320px] rounded-xl overflow-hidden bg-surface border border-border-subtle cursor-pointer block">
<img alt="Child Safety" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105" src="/images/ai_vehicle_seat_baby.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-base via-base/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-8">
<span className="font-display font-semibold text-[24px] text-white">Child Safety</span>
<p className="text-[14px] text-content-secondary mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Predictive monitoring for uncompromised infant protection.</p>
</div>
</Link>

<Link href="/applications" className="md:col-span-3 group relative h-[320px] rounded-xl overflow-hidden bg-surface border border-border-subtle cursor-pointer block">
<img alt="Military Defense" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105" src="/images/ai_military_defense.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-base via-base/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-8">
<span className="font-display font-semibold text-[24px] text-white">Military & Defense</span>
<p className="text-[14px] text-content-secondary mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Tactical edge intelligence for high-stakes environments.</p>
</div>
</Link>

<Link href="/applications" className="md:col-span-6 group relative h-[300px] rounded-xl overflow-hidden bg-surface border border-border-subtle cursor-pointer block">
<img alt="Workplace Safety" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105" src="/images/ai_workplace_safety.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-base via-base/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-8">
<span className="font-display font-semibold text-[24px] text-white">Enterprise & Workplace</span>
<p className="text-[14px] text-content-secondary mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Comprehensive facility security and operational safety.</p>
</div>
</Link>

{/* Supporting Industries */}
<Link href="/applications" className="md:col-span-2 group relative h-[220px] rounded-xl overflow-hidden bg-surface border border-border-subtle cursor-pointer block">
<img alt="Pet Safety" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105" src="/images/ai_tech_dog.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-base via-base/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-6">
<span className="font-display font-semibold text-[16px] text-white">Pet Safety</span>
</div>
</Link>

<Link href="/applications" className="md:col-span-2 group relative h-[220px] rounded-xl overflow-hidden bg-surface border border-border-subtle cursor-pointer block">
<img alt="Smart Cities" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105" src="/images/ai_smart_cities.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-base via-base/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-6">
<span className="font-display font-semibold text-[16px] text-white">Smart Cities</span>
</div>
</Link>

<Link href="/applications" className="md:col-span-2 group relative h-[220px] rounded-xl overflow-hidden bg-surface border border-border-subtle cursor-pointer block">
<img alt="Fleet Safety" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105" src="/images/ai_fleet_monitoring.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-base via-base/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-6">
<span className="font-display font-semibold text-[16px] text-white">Fleet Monitoring</span>
</div>
</Link>
</div>
</section>

<section className="py-[96px] w-full text-center">
<div className="max-w-[1440px] mx-auto px-8">
<span className="text-eyebrow mb-4 block">BUILT FOR ANY INDUSTRY</span>
<h2 className="text-display-md text-content-primary mb-[64px]">Expanding to Every Industry That Demands Protection.</h2>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">

<div className="flex flex-col items-center group cursor-pointer">
<div className="w-[64px] h-[64px] rounded-full border border-brand-primary/30 flex items-center justify-center bg-surface group-hover:border-brand-primary group-hover:shadow-glow transition-all mb-3">
<Activity className="w-6 h-6 text-brand-primary"></Activity>
</div>
<span className="text-[13px] font-medium text-content-secondary group-hover:text-white transition-colors">Healthcare</span>
</div>

<div className="flex flex-col items-center group cursor-pointer">
<div className="w-[64px] h-[64px] rounded-full border border-brand-primary/30 flex items-center justify-center bg-surface group-hover:border-brand-primary group-hover:shadow-glow transition-all mb-3">
<Home className="w-6 h-6 text-brand-primary"></Home>
</div>
<span className="text-[13px] font-medium text-content-secondary group-hover:text-white transition-colors">Senior Living</span>
</div>

<div className="flex flex-col items-center group cursor-pointer">
<div className="w-[64px] h-[64px] rounded-full border border-brand-primary/30 flex items-center justify-center bg-surface group-hover:border-brand-primary group-hover:shadow-glow transition-all mb-3">
<GraduationCap className="w-6 h-6 text-brand-primary"></GraduationCap>
</div>
<span className="text-[13px] font-medium text-content-secondary group-hover:text-white transition-colors">Education</span>
</div>

<div className="flex flex-col items-center group cursor-pointer">
<div className="w-[64px] h-[64px] rounded-full border border-brand-primary/30 flex items-center justify-center bg-surface group-hover:border-brand-primary group-hover:shadow-glow transition-all mb-3">
<Bus className="w-6 h-6 text-brand-primary"></Bus>
</div>
<span className="text-[13px] font-medium text-content-secondary group-hover:text-white transition-colors">Transportation</span>
</div>

<div className="flex flex-col items-center group cursor-pointer">
<div className="w-[64px] h-[64px] rounded-full border border-brand-primary/30 flex items-center justify-center bg-surface group-hover:border-brand-primary group-hover:shadow-glow transition-all mb-3">
<Coffee className="w-6 h-6 text-brand-primary"></Coffee>
</div>
<span className="text-[13px] font-medium text-content-secondary group-hover:text-white transition-colors">Hospitality</span>
</div>

<div className="flex flex-col items-center group cursor-pointer">
<div className="w-[64px] h-[64px] rounded-full border border-brand-primary/30 flex items-center justify-center bg-surface group-hover:border-brand-primary group-hover:shadow-glow transition-all mb-3">
<Zap className="w-6 h-6 text-brand-primary"></Zap>
</div>
<span className="text-[13px] font-medium text-content-secondary group-hover:text-white transition-colors">Energy</span>
</div>

<div className="flex flex-col items-center group cursor-pointer">
<div className="w-[64px] h-[64px] rounded-full border border-brand-primary/30 flex items-center justify-center bg-surface group-hover:border-brand-primary group-hover:shadow-glow transition-all mb-3">
<Tractor className="w-6 h-6 text-brand-primary"></Tractor>
</div>
<span className="text-[13px] font-medium text-content-secondary group-hover:text-white transition-colors">Agriculture</span>
</div>

<div className="flex flex-col items-center group cursor-pointer">
<div className="w-[64px] h-[64px] rounded-full border border-border-subtle flex items-center justify-center bg-transparent mb-3">
<Plus className="w-6 h-6 text-content-muted"></Plus>
</div>
<span className="text-[13px] font-medium text-content-secondary">And More</span>
</div>
</div>
</div>
</section>
</main>
  );
}

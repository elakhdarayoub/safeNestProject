"use client";

import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

interface PremiumInputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  error?: string;
  isTextArea?: boolean;
}

export default function PremiumInput({ label, error, isTextArea, ...props }: PremiumInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(!!props.value || !!props.defaultValue);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsFocused(true);
    if (props.onFocus) props.onFocus(e as any);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsFocused(false);
    setHasValue(!!e.target.value);
    if (props.onBlur) props.onBlur(e as any);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setHasValue(!!e.target.value);
    if (props.onChange) props.onChange(e as any);
  };

  const isFloating = isFocused || hasValue;
  const InputComponent = isTextArea ? 'textarea' : 'input';

  return (
    <div className={`relative w-full ${error ? 'animate-shake' : ''}`}>
      <div className={`relative border rounded-[8px] transition-all duration-300 bg-base overflow-hidden ${
        error 
          ? 'border-red-500 shadow-[0_0_0_1px_rgba(239,68,68,1)]' 
          : isFocused 
            ? 'border-brand-primary shadow-[0_0_0_1px_rgba(0,194,224,1)]' 
            : 'border-border-subtle hover:border-brand-primary/50'
      }`}>
        <label 
          className={`absolute left-4 transition-all duration-200 pointer-events-none ${
            isFloating 
              ? 'text-[11px] top-2 text-content-muted' 
              : 'text-[16px] top-4 text-content-secondary'
          } ${error ? 'text-red-400' : ''}`}
        >
          {label}
        </label>
        <InputComponent
          {...(props as any)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          className={`w-full bg-transparent text-white text-[16px] px-4 outline-none transition-all duration-200 ${
            isTextArea ? 'min-h-[120px] pt-7 pb-3 resize-none' : 'h-[56px] pt-5'
          }`}
        />
      </div>
      {error && (
        <div className="flex items-center gap-1 mt-1.5 text-red-500">
          <AlertCircle className="w-3 h-3" />
          <span className="text-[12px]">{error}</span>
        </div>
      )}
    </div>
  );
}

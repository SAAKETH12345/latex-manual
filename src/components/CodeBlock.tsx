import { Check, Copy } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

export function CodeBlock({ code, className }: { code: string, className?: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className={cn("bg-slate-900 rounded-xl shadow-xl overflow-hidden flex flex-col my-6", className)}>
      <div className="bg-slate-800 px-4 py-2 flex items-center justify-between">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[10px] text-slate-400 font-mono">main.tex</span>
        </div>
      </div>
      <div className="p-6 font-mono text-sm leading-relaxed text-indigo-100 flex-1 overflow-x-auto">
        <pre><code>{code}</code></pre>
      </div>
      <div className="p-4 bg-slate-800/50 border-t border-slate-800 flex justify-end gap-3">
        <button 
          onClick={handleCopy}
          className="text-xs text-slate-400 font-semibold px-3 py-1.5 rounded hover:bg-slate-700"
        >
          {copied ? 'Copied!' : 'Copy Snippet'}
        </button>
      </div>
    </div>
  );
}

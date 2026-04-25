import { cn } from '../lib/utils';

interface LatexOutputProps {
  children: React.ReactNode;
  className?: string;
  pdfTitle?: string;
}

export function LatexOutput({ children, className, pdfTitle = 'output_preview.pdf' }: LatexOutputProps) {
  return (
    <div className="my-8 bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex flex-col">
      <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
        <h3 className="text-xs font-bold uppercase tracking-wide text-slate-400">Visual Sample</h3>
        <span className="text-[10px] text-slate-400 font-mono">{pdfTitle}</span>
      </div>
      <div className="flex-1 bg-slate-50 border border-slate-200 rounded-lg flex flex-col items-center justify-center p-4 sm:p-8">
        <div 
          className={cn(
            "bg-white p-6 sm:p-12 shadow-sm w-full max-w-2xl font-serif text-slate-900",
            "text-base sm:text-lg text-justify border border-slate-200",
            className
          )} 
          style={{ lineHeight: '1.75' }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

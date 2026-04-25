import { cn } from '../lib/utils';
import { X } from 'lucide-react';

export function Sidebar({ 
  sections, 
  activeSection,
  isOpen,
  setIsOpen
}: { 
  sections: { id: string; title: string; icon: React.ReactNode }[];
  activeSection: string;
  isOpen?: boolean;
  setIsOpen?: (open: boolean) => void;
}) {
  const currentIndex = sections.findIndex(s => s.id === activeSection);
  const progressPercent = sections.length > 0 ? Math.round(((currentIndex + 1) / sections.length) * 100) : 0;

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsOpen?.(false)}
        />
      )}
      
      <aside className={cn(
        "w-64 flex flex-col border-r border-slate-800 bg-slate-900 h-screen overflow-y-auto z-50 transition-transform duration-300",
        "fixed lg:sticky top-0 left-0",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-500 rounded flex items-center justify-center font-bold text-white text-xl font-serif">L</div>
            <span className="text-white font-semibold tracking-tight">LaTeX Tutorial</span>
          </div>
          {setIsOpen && (
            <button 
              onClick={() => setIsOpen(false)}
              className="lg:hidden text-slate-400 hover:text-white"
            >
              <X size={20} />
            </button>
          )}
        </div>
        <nav className="flex-1 p-4 space-y-1">
        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-2">
          Contents
        </div>
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={cn(
              "flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors",
              activeSection === section.id 
                ? "text-white bg-slate-800 shadow-sm border border-slate-700 font-medium" 
                : "text-slate-400 hover:bg-slate-800"
            )}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
              window.history.pushState(null, '', `#${section.id}`);
              setIsOpen?.(false);
            }}
          >
            {section.icon}
            <span className="truncate">{section.title}</span>
          </a>
        ))}
      </nav>
      <div className="p-4 border-t border-slate-800">
        <div className="bg-indigo-950/40 p-4 rounded-lg border border-indigo-900/50">
          <p className="text-xs text-indigo-200 mb-2">Progress: {progressPercent}% complete</p>
          <div className="w-full bg-slate-800 rounded-full h-1">
            <div className="bg-indigo-500 h-1 rounded-full transition-all duration-300" style={{ width: `${progressPercent}%` }}></div>
          </div>
        </div>
      </div>
    </aside>
    </>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { Menu, Search } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { tutorialSections } from './data/tutorial';

export default function App() {
  const [activeSection, setActiveSection] = useState(tutorialSections[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Find the one closest to the top
          const closest = visibleEntries.reduce((prev, current) => {
            return prev.boundingClientRect.top < current.boundingClientRect.top ? prev : current;
          });
          setActiveSection(closest.target.id);
        }
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );

    tutorialSections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const filteredSections = tutorialSections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      <Sidebar 
        sections={tutorialSections} 
        activeSection={activeSection} 
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />
      
      <main className="flex-1 flex flex-col w-full">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-3 sm:px-8 sticky top-0 z-20">
          <div className="flex items-center text-sm text-slate-500 gap-2 sm:gap-3">
            <button 
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 -ml-2 text-slate-500 hover:text-slate-900 focus:outline-none"
            >
              <Menu size={20} />
            </button>
            <span className="hidden sm:inline">Tutorials</span>
            <svg className="w-4 h-4 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
            <span className="text-slate-900 font-medium">LaTeX</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400 group-focus-within:text-indigo-500">
                <Search size={16} />
              </div>
              <input 
                type="text" 
                placeholder="Search tutorials..." 
                className="w-40 sm:w-64 pl-9 pr-4 py-2 bg-slate-100 border border-transparent rounded-lg text-sm focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 outline-none transition-all placeholder:text-slate-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </header>

        <div className="flex-1 max-w-4xl mx-auto w-full px-8 py-12 lg:px-16 lg:py-16">
          <header className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              Learn LaTeX
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
              This introductory tutorial does not assume any prior experience of LaTeX but,
              hopefully, by the time you are finished, you will not only have written your first
              LaTeX document but also acquired sufficient knowledge and confidence to take the next
              steps toward LaTeX proficiency.
            </p>
          </header>

          <div className="space-y-20">
            {filteredSections.length > 0 ? (
              filteredSections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-24">
                  <div className="flex justify-between items-start mb-6">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 flex items-center gap-3">
                      <span className="text-indigo-600 bg-indigo-50/50 p-2 rounded-lg border border-indigo-100">
                        {section.icon}
                      </span>
                      {section.title}
                    </h2>
                  </div>
                  {section.content}
                </section>
              ))
            ) : (
              <div className="text-center py-20 text-slate-500">
                <p className="text-lg">No sections found matching "{searchQuery}"</p>
              </div>
            )}
          </div>

          {/* Footer Control Bar */}
          <div className="mt-24 border-t border-slate-200 pt-6 pb-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
              <div className="flex gap-6 order-2 sm:order-1">
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="flex items-center gap-2 text-slate-400 hover:text-slate-600 font-medium"
                >
                  Top of page
                </button>
              </div>
              <div className="text-slate-500 font-medium order-3 sm:order-2">
                &copy; {new Date().getFullYear()} Saaketh Kazipeta
              </div>
              <div className="flex items-center gap-4 order-1 sm:order-3 w-full sm:w-auto justify-end">
                <button 
                  className="flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 w-full sm:w-auto justify-center sm:justify-end bg-indigo-50/50 sm:bg-transparent px-4 py-2 sm:p-0 rounded-lg sm:rounded-none"
                  onClick={() => {
                    const index = tutorialSections.findIndex(s => s.id === activeSection);
                    if (index < tutorialSections.length - 1) {
                        document.getElementById(tutorialSections[index + 1].id)?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Next Section
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

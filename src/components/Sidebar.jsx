import React from 'react';

const Sidebar = ({
    view,
    setView,
    mobileMenuOpen,
    setMobileMenuOpen,
    producers,
    activeProducer,
    setActiveProducer,
    filters,
    setFilters,
    handleImportClick,
    fileInputRef,
    handleFileUpload,
    setShowSettings,
    aiOpen,
    setAiOpen
}) => {
    return (
        <aside className={`fixed md:relative w-80 glass-panel border-r border-white/5 flex flex-col z-50 md:z-10 h-full transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
            <div className="p-6 md:p-8 pb-4 flex items-center justify-between">
                <div className="flex items-center gap-3 text-accent font-display font-black text-xl md:text-2xl tracking-tighter">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <ellipse cx="12" cy="5" rx="9" ry="3" />
                        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                    </svg>
                    METALCORE
                </div>
                <button onClick={() => setShowSettings(true)} className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-500 hover:text-accent transition-all">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                        <circle cx="12" cy="12" r="3" />
                    </svg>
                </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 md:px-8 py-4 space-y-8 md:space-y-10 custom-scrollbar">
                <div className="flex flex-col gap-2 mt-6 md:mt-10">
                    <button onClick={() => { setView('HOME'); setMobileMenuOpen(false); }} className={`w-full py-4 px-6 rounded-2xl flex items-center gap-3 text-xs font-bold transition-all ${view === 'HOME' ? 'bg-accent text-black shadow-lg shadow-accent/20' : 'text-slate-500 hover:bg-white/5'}`}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                        Dashboard
                    </button>
                    <button onClick={() => { setView('SEARCH'); setMobileMenuOpen(false); }} className={`w-full py-4 px-6 rounded-2xl flex items-center gap-3 text-xs font-bold transition-all ${view === 'SEARCH' ? 'bg-accent text-black shadow-lg shadow-accent/20' : 'text-slate-500 hover:bg-white/5'}`}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <ellipse cx="12" cy="5" rx="9" ry="3" />
                            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                        </svg>
                        Grade Library
                    </button>
                    <button onClick={() => { setView('MATRIX'); setMobileMenuOpen(false); }} className={`w-full py-4 px-6 rounded-2xl flex items-center gap-3 text-xs font-bold transition-all ${view === 'MATRIX' ? 'bg-accent text-black shadow-lg shadow-accent/20' : 'text-slate-500 hover:bg-white/5'}`}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="21" y1="10" x2="3" y2="10" />
                            <line x1="21" y1="6" x2="3" y2="6" />
                            <line x1="21" y1="14" x2="3" y2="14" />
                            <line x1="21" y1="18" x2="3" y2="18" />
                        </svg>
                        Performance Matrix
                    </button>
                    <button onClick={() => { setView('KNIVES'); setMobileMenuOpen(false); }} className={`w-full py-4 px-6 rounded-2xl flex items-center gap-3 text-xs font-bold transition-all ${view === 'KNIVES' ? 'bg-accent text-black shadow-lg shadow-accent/20' : 'text-slate-500 hover:bg-white/5'}`}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
                            <line x1="13" y1="19" x2="19" y2="13" />
                            <line x1="16" y1="16" x2="20" y2="20" />
                            <line x1="19" y1="21" x2="21" y2="19" />
                        </svg>
                        Knife Library
                    </button>
                    <button onClick={() => { setAiOpen(!aiOpen); setMobileMenuOpen(false); }} className={`w-full py-4 px-6 rounded-2xl flex items-center gap-3 text-xs font-bold transition-all ${aiOpen ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' : 'text-slate-500 hover:bg-white/5 hover:text-indigo-400'}`}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                            <path d="M5 3v4" />
                            <path d="M19 17v4" />
                            <path d="M3 5h4" />
                            <path d="M17 19h4" />
                        </svg>
                        AI Analyst
                    </button>
                </div>

                <section className="pt-6">
                    <button onClick={handleImportClick} className="w-full py-3 border border-dashed border-white/20 rounded-xl flex items-center justify-center gap-2 text-xs font-bold hover:bg-white/5 transition-all group">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:text-accent transition-colors">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                            <polyline points="10 9 9 9 8 9" />
                        </svg>
                        Import Data
                    </button>
                    <input type="file" ref={fileInputRef} className="hidden" accept=".xlsx,.csv" onChange={handleFileUpload} />
                </section>

                <section className="space-y-4">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                        </svg>
                        Producer
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {producers.map(p => (
                            <button key={p} onClick={() => setActiveProducer(p)} className={`text-[10px] uppercase font-bold px-3 py-1.5 rounded-full border transition-all ${activeProducer === p ? 'bg-accent text-black border-accent shadow-lg shadow-accent/20' : 'text-slate-500 border-slate-800 hover:border-slate-600'}`}>{p}</button>
                        ))}
                    </div>
                </section>

                <section className="space-y-8">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="21" y1="10" x2="3" y2="10" />
                            <line x1="21" y1="6" x2="3" y2="6" />
                            <line x1="21" y1="14" x2="3" y2="14" />
                            <line x1="21" y1="18" x2="3" y2="18" />
                        </svg>
                        Key Alloys
                    </div>
                    {['minC', 'minCr', 'minV'].map(f => (
                        <div key={f} className="space-y-2">
                            <div className="flex justify-between text-[11px] font-mono text-slate-400">
                                <span>{f === 'minC' ? 'Carbon' : f === 'minCr' ? 'Chromium' : 'Vanadium'}</span>
                                <span className="text-accent">{filters[f]}%</span>
                            </div>
                            <input type="range" min="0" max="5" step="0.1" value={filters[f]} onChange={e => setFilters({ ...filters, [f]: parseFloat(e.target.value) })} className="w-full accent-accent h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer" />
                        </div>
                    ))}
                </section>
            </div>
        </aside>
    );
};

export default Sidebar;

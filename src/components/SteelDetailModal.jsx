import React from 'react';

const SteelDetailModal = ({ steel, onClose, onOpenKnife }) => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/60 backdrop-blur-md" onClick={onClose}>
            <div className="glass-panel w-full max-w-2xl p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-y-auto max-h-[90vh]" onClick={e => e.stopPropagation()}>
                <div className="sticky top-0 right-0 flex justify-end mb-2">
                    <button onClick={onClose} className="p-3 md:p-2 bg-white/5 hover:bg-white/10 rounded-full text-slate-400 transition-all">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    <div>
                        <div className="text-xs font-black text-accent uppercase tracking-[0.2em] mb-3">{steel.producer}</div>
                        <h2 className="text-4xl font-display font-black text-white mb-4 leading-tight">{steel.name}</h2>
                        <div className="h-1 w-12 bg-accent rounded-full mb-6"></div>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8">{steel.desc}</p>

                        <div className="space-y-6">
                            <div>
                                <div className="text-[10px] font-bold text-accent uppercase tracking-widest mb-3">Optimal Deployment</div>
                                <div className="px-5 py-3 bg-accent/10 border border-accent/20 rounded-2xl text-sm text-slate-200 flex items-center gap-3">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                                    </svg>
                                    {steel.use_case}
                                </div>
                            </div>

                            {steel.knives && steel.knives.length > 0 && (
                                <div>
                                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Popular Examples</div>
                                    <div className="grid grid-cols-1 gap-2">
                                        {steel.knives.map((k, i) => (
                                            <button
                                                key={i}
                                                onClick={() => onOpenKnife && onOpenKnife(k)}
                                                className="px-5 py-3 bg-white/5 border border-white/5 hover:border-accent/20 hover:bg-white/10 rounded-2xl text-sm text-slate-200 text-left transition-all group flex items-center justify-between"
                                            >
                                                <span>• {k}</span>
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-0 group-hover:opacity-100 transition-opacity text-accent">
                                                    <path d="M5 12h14" />
                                                    <path d="m12 5 7 7-7 7" />
                                                </svg>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="glass-panel p-6 rounded-3xl border-white/5">
                            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-2">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                                The Edge Case
                            </h4>
                            <div className="space-y-6">
                                <div>
                                    <div className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest mb-2">Pros</div>
                                    <div className="space-y-2">
                                        {steel.pros?.map((p, i) => (
                                            <div key={i} className="text-sm text-slate-400 flex items-start gap-2">
                                                <div className="mt-1.5 w-1 h-1 rounded-full bg-emerald-500 shrink-0"></div>
                                                {p}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold text-rose-500 uppercase tracking-widest mb-2">Cons</div>
                                    <div className="space-y-2">
                                        {steel.cons?.map((p, i) => (
                                            <div key={i} className="text-sm text-slate-400 flex items-start gap-2">
                                                <div className="mt-1.5 w-1 h-1 rounded-full bg-rose-500 shrink-0"></div>
                                                {p}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                            {['C', 'Cr', 'V', 'Mo', 'W', 'Co'].map(el => (
                                <div key={el} className="bg-black/40 rounded-2xl p-4 text-center border border-white/5">
                                    <div className="text-[8px] text-slate-500 uppercase font-black mb-1">{el}</div>
                                    <div className="text-lg font-display font-black text-white">{steel[el] || 0}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-slate-600 uppercase tracking-widest">
                    <span>Metallurgy Core</span>
                    <span>EST. 2026</span>
                </div>
            </div>
        </div>
    );
};

export default SteelDetailModal;

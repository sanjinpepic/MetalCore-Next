import React from 'react';

const KnifeDetailModal = ({ knife, onClose, onOpenSteel }) => {
    if (!knife) return null;

    // Helper to extract clean name for matching
    const cleanImage = knife.image?.replace('file:///', '') || '';

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
            <div className="relative w-full max-w-4xl bg-[#0a0a0b] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] animate-in fade-in zoom-in-95 duration-300">

                {/* Image Section */}
                <div className="w-full md:w-1/2 h-64 md:h-auto bg-white/5 relative group">
                    {cleanImage ? (
                        <img
                            src={cleanImage}
                            alt={knife.name}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-white/10">
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
                                <line x1="13" y1="19" x2="19" y2="13" />
                                <line x1="16" y1="16" x2="20" y2="20" />
                                <line x1="19" y1="21" x2="21" y2="19" />
                            </svg>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0a0a0b]" />

                    <button
                        onClick={onClose}
                        className="absolute top-4 left-4 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white/70 hover:text-white transition-all backdrop-blur-md md:hidden"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    </button>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 p-6 md:p-10 overflow-y-auto custom-scrollbar">
                    <button
                        onClick={onClose}
                        className="hidden md:block absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full text-slate-500 hover:text-white transition-all"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    </button>

                    <div className="mb-8">
                        <div className="text-xs font-bold text-accent uppercase tracking-widest mb-2">{knife.maker}</div>
                        <h2 className="text-4xl font-black font-display text-white mb-2 italic tracking-tight">{knife.name}</h2>
                        <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                            {knife.category}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-500">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                </svg>
                                The Design
                            </h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                {knife.description}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                                    <path d="M12 2v20" />
                                    <path d="M2 12h20" />
                                    <path d="m4.93 4.93 14.14 14.14" />
                                    <path d="m19.07 4.93-14.14 14.14" />
                                </svg>
                                Why It's Special
                            </h3>
                            <div className="p-4 bg-accent/5 border border-accent/10 rounded-xl">
                                <p className="text-slate-300 leading-relaxed text-sm italic">
                                    "{knife.whySpecial}"
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400">
                                    <line x1="6" y1="3" x2="6" y2="15" />
                                    <circle cx="18" cy="6" r="3" />
                                    <circle cx="6" cy="18" r="3" />
                                    <path d="M18 9a9 9 0 0 1-9 9" />
                                </svg>
                                Available Steels
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {knife.steels.map(steelName => (
                                    <button
                                        key={steelName}
                                        onClick={() => onOpenSteel(steelName)}
                                        className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-lg text-xs font-bold text-slate-300 hover:text-white transition-all group flex items-center gap-2"
                                    >
                                        {steelName}
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all text-accent">
                                            <path d="M5 12h14" />
                                            <path d="m12 5 7 7-7 7" />
                                        </svg>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {knife.link && (
                            <div className="pt-6 border-t border-white/5 text-center md:text-left">
                                <a
                                    href={knife.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-accent transition-colors"
                                >
                                    Visit Manufacturer Page
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        <polyline points="15 3 21 3 21 9" />
                                        <line x1="10" y1="14" x2="21" y2="3" />
                                    </svg>
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KnifeDetailModal;

function Marquee({ updates }) {
    return (
        <div className="w-full bg-blue-50 overflow-hidden whitespace-nowrap">
            <div className="animate-marquee flex gap-12 py-2 px-4 text-[#0054B0] text-sm font-medium hover:paused">
                {updates.map((item, idx) => (
                    item.url ? (
                        <a
                            key={idx}
                            href={item.url}
                            className="shrink-0 hover:underline hover:text-blue-600 transition-colors"
                            target={item.url.startsWith("http") ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                        >
                            🔹 {item.text}
                        </a>
                    ) : (
                        <span key={idx} className="shrink-0">
                            🔹 {item.text}
                        </span>
                    )
                ))}
            </div>

            <style jsx>{`
                .animate-marquee {
                    display: inline-flex;
                    animation: marquee 20s linear infinite;
                }

                .hover\\:paused:hover {
                    animation-play-state: paused;
                }

                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-100%); }
                }
            `}</style>
        </div>
    );
}

export default Marquee;

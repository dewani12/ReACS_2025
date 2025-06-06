function Marquee({ updates }) {
    return (
        <div className="w-full bg-blue-50 overflow-hidden whitespace-nowrap relative">
            <div className={`marquee-track flex gap-12 py-2 px-4 text-[#0054B0] text-sm font-medium`}>
                {/* Duplicate items for seamless scroll */}
                {[...updates, ...updates].map((item, idx) => (
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
                        <span key={idx} className={`${item.styles} shrink-0`}>
                            🔹 {item.text}
                        </span>
                    )
                ))}
            </div>

            <style jsx>{`
                .marquee-track {
                    animation: scroll-marquee 20s linear infinite;
                }

                .marquee-track:hover {
                    animation-play-state: paused;
                }

                @keyframes scroll-marquee {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </div>
    );
}

export default Marquee;

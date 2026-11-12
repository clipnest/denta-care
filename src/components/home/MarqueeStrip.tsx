const marqueeItems = [
  "Braces",
  "Denta Care",
  "Dentist",
  "Dentures",
  "Clear Aligners",
  "Implants",
];

export function MarqueeStrip() {
  return (
    <div
      className="marquee-wrapper w-full overflow-hidden bg-sky-strip py-3.5 sm:py-4"
      aria-label="Featured dental services"
    >
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {[0, 1].map((dupIndex) => (
          <div
            key={dupIndex}
            className="flex items-center gap-8 pr-8"
            aria-hidden={dupIndex === 1}
          >
            {marqueeItems.map((item) => (
              <span
                key={`${dupIndex}-${item}`}
                className="flex items-center gap-8 text-[18px] font-medium tracking-[-0.01em] text-foreground sm:text-[22px]"
              >
                <span>{item}</span>
                <span className="text-foreground/60 font-normal" aria-hidden="true">
                  +
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

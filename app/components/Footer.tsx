export default function Footer() {
  return (
    <footer className="px-6 md:px-10 pt-16 pb-12 max-w-[760px] mx-auto w-full">
      <div className="asterism" />

      <div className="text-center mb-16">
        <div className="mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
          One ask
        </div>
        <p
          className="display text-[28px] md:text-[40px] leading-[1.18] tracking-[-0.01em] mb-10"
          style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1" }}
        >
          <em>Twenty minutes.</em> Even if there&apos;s no intern role
          today, the diagnostic is worth your time.
        </p>
        <a
          href="mailto:sidharth.rama@gmail.com?subject=Clay%20PM%20Enrichment%20%26%20AI%20%E2%80%94%2020%20min%20to%20walk%20through%20the%20thesis"
          className="display text-[20px] md:text-[24px] italic text-accent"
          style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 1" }}
        >
          Email me →
        </a>
      </div>

      <hr className="rule mb-6" />

      <div className="mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground flex flex-col md:flex-row gap-2 justify-between">
        <div>Sidharth Sundaram &middot; April MMXXVI</div>
        <div>Built in Next.js &middot; mock data only &middot; not affiliated with Clay</div>
      </div>
    </footer>
  );
}

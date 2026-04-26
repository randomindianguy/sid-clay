export default function Hero() {
  return (
    <section className="px-6 md:px-10 pt-16 md:pt-24 pb-24 md:pb-32 max-w-[760px] mx-auto w-full">
      <div className="mono text-[11px] uppercase tracking-[0.32em] text-muted-foreground mb-12 fade-in-up">
        A Thesis · For Clay · By Sidharth Sundaram
      </div>

      <hr className="rule mb-10" />

      <h1
        className="display fade-in-up stagger-1 text-[44px] sm:text-[58px] md:text-[76px] leading-[0.94] tracking-[-0.02em] mb-12 font-medium"
        style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1" }}
      >
        The{" "}
        <span
          className="italic text-accent"
          style={{
            fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 1",
          }}
        >
          smartest dumb pipe
        </span>{" "}
        in B2B GTM. Your enrichment layer is more capable than you&apos;re
        treating it.
      </h1>

      <p className="text-[19px] md:text-[22px] leading-[1.55] text-ink mb-12 fade-in-up stagger-2 max-w-[58ch]">
        A twelve-week internship thesis for the Enrichment &amp; AI PM
        role. Clay&apos;s enrichment layer runs more than a billion
        requests through 75+ providers. None of that signal compounds.
        Here&apos;s the architecture that makes it learn &mdash; without
        new infrastructure and without taking control out of Ops&apos;s
        hands.
      </p>

      <div className="fade-in-up stagger-3 flex flex-col sm:flex-row gap-3 sm:items-baseline">
        <a
          href="mailto:sidharth.rama@gmail.com?subject=Clay%20PM%20Enrichment%20%26%20AI%20%E2%80%94%2020%20min%20to%20walk%20through%20the%20thesis"
          className="display text-[20px] md:text-[24px] italic text-accent"
          style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 1" }}
        >
          Twenty minutes to walk through it →
        </a>
        <span className="text-muted-foreground text-[15px] hidden sm:inline">
          &middot; or read the diagnosis below
        </span>
      </div>
    </section>
  );
}

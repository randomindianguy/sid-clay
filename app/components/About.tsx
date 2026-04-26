export default function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-10 py-24 max-w-[760px] mx-auto w-full"
    >
      <div className="asterism" />

      <div className="mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
        &sect; V &middot; Colophon
      </div>

      <h2
        className="display text-[36px] md:text-[52px] leading-[0.98] tracking-[-0.015em] mb-10 font-medium"
        style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1" }}
      >
        Sidharth Sundaram.
      </h2>

      <div className="space-y-6 text-[18px] md:text-[20px] leading-[1.65]">
        <p className="dropcap">
          Master&apos;s in Engineering Management at Purdue. Four years
          B2B PM at upGrad Campus and Interview Kickstart, both at the
          intersection of AI, learner activation, and product workflows
          for non-technical end users.
        </p>
        <p>
          Why Clay: one of the few B2B SaaS bets where creativity is on
          the org chart, where pricing memos get published, and where
          the product itself reads as opinionated. The PM Enrichment
          &amp; AI role sits exactly where I want to live for the next
          decade.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-0 border-t border-b border-ink">
        <a
          href="https://www.linkedin.com/in/sidharthsundaram/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-5 sm:border-r border-ink hover:bg-paper-shade transition-colors"
          style={{
            backgroundColor: "transparent",
            backgroundImage: "none",
          }}
        >
          <div className="mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-1">
            Profile
          </div>
          <div
            className="display text-[18px] italic text-ink"
            style={{
              fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 0",
            }}
          >
            LinkedIn ↗
          </div>
        </a>
        <a
          href="https://lodge-project-hackathon-kf92hl9ep.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-5 sm:border-r border-ink hover:bg-paper-shade transition-colors border-t sm:border-t-0"
          style={{
            backgroundColor: "transparent",
            backgroundImage: "none",
          }}
        >
          <div className="mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-1">
            Recent build
          </div>
          <div
            className="display text-[18px] italic text-ink"
            style={{
              fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 0",
            }}
          >
            Lodge ↗
          </div>
        </a>
        <a
          href="mailto:sidharth.rama@gmail.com"
          className="px-5 py-5 hover:bg-paper-shade transition-colors border-t sm:border-t-0"
          style={{
            backgroundColor: "transparent",
            backgroundImage: "none",
          }}
        >
          <div className="mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-1">
            Direct
          </div>
          <div
            className="display text-[18px] italic text-ink"
            style={{
              fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 0",
            }}
          >
            sidharth.rama@gmail.com
          </div>
        </a>
      </div>
    </section>
  );
}

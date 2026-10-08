import { site, steps, type Jump } from "@/lib/content";

export function JumpLink({ jump }: { jump: Jump }) {
  const external = jump.href.startsWith("http");
  return (
    <a
      className={jump.tone === "primary" ? "btn btn-primary" : "btn"}
      href={jump.href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {jump.label}
      {external ? <span className="ext"> ↗</span> : null}
    </a>
  );
}

export function Frame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a className="skip" href="#content">
        跳到正文
      </a>
      <header className="top">
        <a className="brand" href="/">
          <span className="mark">OPC</span>
          <span>
            <strong>{site.domain}</strong>
            <small>一人公司 · 海外 AI</small>
          </span>
        </a>
        <nav aria-label="五步">
          {steps.map((step) => (
            <a key={step.id} href={step.href} className={step.kind === "core" ? "is-core" : ""}>
              <span>{step.index}</span>
              {step.nav}
            </a>
          ))}
        </nav>
      </header>
      {children}
      <footer>
        <div>
          <p className="footer-brand">{site.domain}</p>
          <p>让一人公司在中国用上海外 AI。购买和官方页面会在新窗口打开。</p>
        </div>
        <div className="footer-links">
          {steps.map((step) => (
            <a key={step.id} href={step.href}>
              {step.nav}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}

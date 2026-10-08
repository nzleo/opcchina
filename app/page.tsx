import { products, references, shops, site, steps, type Jump, type Reference } from "@/lib/content";

function JumpLink({ jump }: { jump: Jump }) {
  const external = jump.href.startsWith("http");
  return (
    <a
      className={jump.tone === "primary" ? "jump jump-primary" : "jump"}
      href={jump.href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {jump.label}
      {external ? <span className="ext"> ↗</span> : null}
    </a>
  );
}

function RefList({ items }: { items: Reference[] }) {
  return (
    <div className="refs">
      <h3>引用</h3>
      <ul>
        {items.map((item) => (
          <li key={item.href + item.label}>
            <a href={item.href} target="_blank" rel="noreferrer">
              {item.label}
              <span> ↗</span>
            </a>
            <p>
              <span className="source">{item.source}</span>
              {item.note}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Action({
  href,
  ready,
  pending,
}: {
  href: string;
  ready: string;
  pending: string;
}) {
  if (!href) {
    return <span className="jump jump-wait">{pending}</span>;
  }
  const external = href.startsWith("http");
  return (
    <a className="jump jump-primary" href={href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
      {ready}
      {external ? <span className="ext"> ↗</span> : null}
    </a>
  );
}

const passClass: Record<string, string> = {
  "product-phone": "pass pass-phone",
  "product-esim": "pass pass-esim",
  "product-card": "pass pass-pay",
};

export default function HomePage() {
  return (
    <>
      <a className="skip" href="#path">
        跳到四步流程
      </a>
      <header className="top">
        <a className="brand" href="#top">
          <span className="mark" aria-hidden="true" />
          {site.domain}
        </a>
        <nav aria-label="流程">
          {steps.map((step) => (
            <a key={step.id} href={`#${step.id}`}>
              <span>{step.index}</span>
              {step.nav}
            </a>
          ))}
        </nav>
      </header>

      <div className="stage" id="top">
        <div className="stage-inner">
          <section className="hero">
            <div>
              <p className="eyebrow">AI 注册全流程</p>
              <h1>
                <span className="line">四步，从手机号</span>
                <span className="line accent">到能稳定使用。</span>
              </h1>
              <p className="lede">
                先领英国手机号，用它注册 Gmail，再用 Gmail 开通 ChatGPT。要稳定上网，用 eSIM 流量；要付款，用银联卡，微信和支付宝都能入金。每一步都能跳到下一步，也能打开对应的官方资料。
              </p>
              <div className="hero-actions">
                <a className="jump jump-primary" href="#phone">
                  从第一步开始
                </a>
                <a className="jump" href="#products">
                  先看我们提供什么
                </a>
              </div>
            </div>
            <section id="path" className="path" aria-labelledby="path-title">
              <div className="section-head">
                <h2 id="path-title">整条路径</h2>
                <p>按顺序走。点任意一步，会落到下面的说明。</p>
              </div>
              <ol>
                {steps.map((step) => (
                  <li key={step.id}>
                    <a href={`#${step.id}`}>
                      <span className="idx">{step.index}</span>
                      <span>
                        <strong>{step.title}</strong>
                        <span className="nav-label">{step.nav}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </section>
          </section>
        </div>
      </div>

      <main>
        {steps.map((step) => (
          <article key={step.id} id={step.id} className="chapter">
            <p className="watermark" aria-hidden="true">
              {step.index}
            </p>
            <div className="chapter-copy">
              <p className="step-kicker">
                <span>{step.index}</span>
                {step.nav}
              </p>
              <h2>{step.title}</h2>
              <p className="lead">{step.lead}</p>
              {step.id === "access" ? (
                <div className="split">
                  <a href="#product-esim">
                    <span>流量</span>
                    <strong>eSIM 流量</strong>
                    <p>在火星信号局购买。下载安装 APK，完成流量共享，稳定上网使用 AI。</p>
                  </a>
                  <a href="#product-card">
                    <span>付款</span>
                    <strong>银联卡</strong>
                    <p>在 Cardrypto 购买，开卡优惠码 LEO2026。充值支持微信和支付宝入金。</p>
                  </a>
                </div>
              ) : null}
              <div className="jumps">
                <span className="jump-label">跳转</span>
                {step.jumps.map((jump) => (
                  <JumpLink key={jump.href + jump.label} jump={jump} />
                ))}
              </div>
            </div>
            <aside className="plate">
              <ul className="points">
                {step.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <RefList items={step.refs} />
            </aside>
          </article>
        ))}
      </main>

      <section id="products" className="products" aria-labelledby="products-title">
        <div className="products-inner">
          <div className="section-head">
            <h2 id="products-title">我们提供的三项</h2>
            <p>英国 CTE 手机号和流量卡在火星信号局购买。银联卡在 Cardrypto 购买，开卡优惠码 LEO2026。</p>
          </div>
          <div className="catalog">
            {products.map((product) => (
              <article key={product.id} id={product.id} className={passClass[product.id]}>
                <p className="kicker">{product.kicker}</p>
                <h3>{product.title}</h3>
                <p className="price">{product.price}</p>
                <p className="summary">{product.summary}</p>
                {product.code ? (
                  <p className="promo">
                    <span>{product.codeLabel}</span>
                    <strong>{product.code}</strong>
                  </p>
                ) : null}
                <dl>
                  {product.facts.map((fact) => (
                    <div key={fact.label}>
                      <dt>{fact.label}</dt>
                      <dd>{fact.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="jumps">
                  <Action href={product.actionHref} ready={product.actionReady} pending={product.actionPending} />
                  {product.jumps.map((jump) => (
                    <JumpLink key={jump.href + jump.label} jump={jump} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div>
          <p className="footer-brand">{site.domain}</p>
          <p>流程展示页。购买和官方资料会在新页面打开。</p>
        </div>
        <div className="footer-links">
          <a href={shops.mars.href} target="_blank" rel="noreferrer">
            火星信号局 ↗
          </a>
          <a href={shops.cardrypto.href} target="_blank" rel="noreferrer">
            Cardrypto ↗
          </a>
          <a href={references.chatgpt.href} target="_blank" rel="noreferrer">
            ChatGPT ↗
          </a>
        </div>
      </footer>
    </>
  );
}

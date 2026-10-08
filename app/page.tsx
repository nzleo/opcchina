import { products, references, site, steps, type Jump, type Reference } from "@/lib/content";

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

export default function HomePage() {
  return (
    <>
      <a className="skip" href="#path">
        跳到四步流程
      </a>
      <header className="top">
        <a className="brand" href="#top">
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

      <main id="top">
        <section className="hero">
          <p className="eyebrow">AI 注册全流程</p>
          <h1>四步，从手机号到能稳定使用。</h1>
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
        </section>

        <section id="path" className="path" aria-labelledby="path-title">
          <div className="section-head">
            <h2 id="path-title">整条路径</h2>
            <p>按顺序走。点任意一步，会落到下面的说明。</p>
          </div>
          <ol>
            {steps.map((step, index) => (
              <li key={step.id}>
                <a href={`#${step.id}`}>
                  <span className="idx">{step.index}</span>
                  <strong>{step.title}</strong>
                  <span className="nav-label">{step.nav}</span>
                </a>
                {index < steps.length - 1 ? <span className="arrow" aria-hidden="true" /> : null}
              </li>
            ))}
          </ol>
        </section>

        {steps.map((step) => (
          <article key={step.id} id={step.id} className="chapter">
            <div className="chapter-index">
              <span>第 {step.index} 步</span>
              <b>{step.nav}</b>
            </div>
            <div className="chapter-body">
              <h2>{step.title}</h2>
              <p className="lead">{step.lead}</p>
              <ul className="points">
                {step.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
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
              <RefList items={step.refs} />
              <div className="jumps">
                <span className="jump-label">跳转</span>
                {step.jumps.map((jump) => (
                  <JumpLink key={jump.href + jump.label} jump={jump} />
                ))}
              </div>
            </div>
          </article>
        ))}

        <section id="products" className="products" aria-labelledby="products-title">
          <div className="section-head">
            <h2 id="products-title">我们提供的三项</h2>
            <p>英国 CTE 手机号和流量卡在火星信号局购买。银联卡在 Cardrypto 购买，开卡优惠码 LEO2026。</p>
          </div>
          <div className="catalog">
            {products.map((product) => (
              <article key={product.id} id={product.id}>
                <p className="kicker">{product.kicker}</p>
                <h3>{product.title}</h3>
                <p className="price">{product.price}</p>
                <p>{product.summary}</p>
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
        </section>
      </main>

      <footer>
        <p>{site.domain}</p>
        <p>流程展示页。官方注册与帮助链接会在新页面打开。</p>
        <a href={references.chatgpt.href} target="_blank" rel="noreferrer">
          ChatGPT ↗
        </a>
      </footer>
    </>
  );
}

import {
  cardBriefs,
  esimHowTo,
  products,
  references,
  shops,
  site,
  steps,
  type Jump,
  type Reference,
} from "@/lib/content";

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
        跳到准备工作
      </a>
      <header className="top">
        <a className="brand" href="#top">
          <span className="mark" aria-hidden="true">
            OPC
          </span>
          {site.domain}
        </a>
        <nav aria-label="准备工作">
          {steps.map((step) => (
            <a key={step.id} href={`#${step.id}`}>
              <span>{step.index}</span>
              {step.nav}
            </a>
          ))}
        </nav>
      </header>

      <section className="cover" id="top">
        <div className="cover-copy">
          <p className="eyebrow">给在中国的一人公司</p>
          <h1>
            <span className="line">要用海外 AI</span>
            <span className="line accent">先做完这五件准备</span>
          </h1>
          <p className="lede">
            ChatGPT 这类工具，注册和续费用的是海外那一套。人在国内把一人公司做起来，先备好能收短信的号码、Gmail、稳定网络，还有一张能付款的卡。下面按这个顺序准备。
          </p>
          <div className="hero-actions">
            <a className="jump jump-primary" href="#phone">
              从第一件开始
            </a>
            <a className="jump" href="#products">
              去哪里办
            </a>
          </div>
        </div>
        <section id="path" className="toc" aria-labelledby="path-title">
          <h2 id="path-title">准备工作</h2>
          <ol>
            {steps.map((step) => (
              <li key={step.id}>
                <a href={`#${step.id}`}>
                  <span className="idx">{step.index}</span>
                  <strong>{step.nav}</strong>
                  <span className="hint">{step.hint}</span>
                </a>
              </li>
            ))}
          </ol>
        </section>
      </section>

      <p className="thesis">
        一个人的公司，工具可以在海外。准备工作要在一开始做完：号码、邮箱、账号、网络、付款。
      </p>

      <main>
        {steps.map((step) => (
          <article key={step.id} id={step.id} className="lesson" data-n={step.index}>
            <div className="lesson-mark">
              <span>{step.index}</span>
              <b>{step.nav}</b>
              {step.id === "phone" ? (
                <em>
                  249
                  <small>元 / 年</small>
                </em>
              ) : null}
              {step.id === "pay" ? <em className="code-mark">LEO2026</em> : null}
            </div>
            <div className="lesson-copy">
              <h2>{step.title}</h2>
              <p className="lead">{step.lead}</p>
              {step.id === "access" ? (
                <>
                  <ol className="howto">
                    {esimHowTo.map((item, index) => (
                      <li key={item}>
                        <b>{index + 1}</b>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                  <div className="split">
                    <a href="#product-esim">
                      <span>网络</span>
                      <strong>eSIM 流量</strong>
                      <p>二手日本 eSIM 手机写入流量后，开热点即可在国内稳定上 ChatGPT。</p>
                    </a>
                    <a href="#pay">
                      <span>付款</span>
                      <strong>银联卡</strong>
                      <p>可充 ChatGPT、Claude，也能按日元、台湾元等当地价格付。下一步单独说明。</p>
                    </a>
                  </div>
                </>
              ) : null}
              {step.id === "pay" ? (
                <div className="briefs">
                  {cardBriefs.map((brief) => (
                    <article key={brief.title}>
                      <h3>{brief.title}</h3>
                      <p>{brief.body}</p>
                    </article>
                  ))}
                </div>
              ) : null}
              <div className="jumps">
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

      <section id="products" className="desk" aria-labelledby="products-title">
        <div className="desk-head">
          <h2 id="products-title">去哪里办</h2>
          <p>英国 CTE 手机号在火星信号局。eSIM 流量先买二手日本手机，再在软件里写入。银联卡在 Cardrypto，开卡优惠码 LEO2026，可充 ChatGPT、Claude，也能按当地币种付款。</p>
        </div>
        <div className="ledger">
          {products.map((product) => (
            <article key={product.id} id={product.id} className={passClass[product.id]}>
              <p className="kicker">{product.kicker}</p>
              <h3>{product.title}</h3>
              <p className="price">{product.price}</p>
              <p className="summary">{product.summary}</p>
              {product.id === "product-esim" ? (
                <ol className="howto">
                  {esimHowTo.map((item, index) => (
                    <li key={item}>
                      <b>{index + 1}</b>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              ) : null}
              {product.id === "product-card" ? (
                <div className="briefs">
                  {cardBriefs.map((brief) => (
                    <article key={brief.title}>
                      <h3>{brief.title}</h3>
                      <p>{brief.body}</p>
                    </article>
                  ))}
                </div>
              ) : null}
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

      <footer>
        <div>
          <p className="footer-brand">{site.domain}</p>
          <p>给在中国的一人公司。购买和官方资料会在新页面打开。</p>
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

import { steps } from "@/lib/content";

export default function HomePage() {
  return (
    <main id="content">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">opcchina.org</p>
          <h1>
            一人公司，
            <br />
            在中国用上海外 AI。
          </h1>
          <p className="lede">
            跟着五步走就行。手机号、稳定的网络、付款，这三件我们帮你办。Gmail 和 ChatGPT 是中间的注册，打开页面按提示自己填。
          </p>
        </div>
        <ol className="flow" aria-label="五步流程">
          {steps.map((step) => (
            <li key={step.id} className={step.kind}>
              <a href={step.href}>
                <span className="num">{step.index}</span>
                <span className="kind">{step.kindLabel}</span>
                <strong>{step.nav}</strong>
                <p>{step.blurb}</p>
                <span className="more">看看怎么做</span>
              </a>
            </li>
          ))}
        </ol>
      </section>

      <section className="split-note" aria-label="两类步骤">
        <article>
          <p>我们帮你办</p>
          <h2>手机号、稳定的网络、付款</h2>
          <p>这三步不用自己摸索。号码、流量和银联卡，点进去就能看到去哪里办。</p>
        </article>
        <article>
          <p>你来注册</p>
          <h2>Gmail、ChatGPT</h2>
          <p>这两步按官方页面填就行。用我们的号码收验证码，再用这组邮箱开通 ChatGPT。</p>
        </article>
      </section>
    </main>
  );
}

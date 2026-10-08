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
            我们把走过的路收成五步。手机号、稳定的网络、付款，是在国内会卡住的三件核心问题，由我们来解决。Gmail 和 ChatGPT 是中间的注册，按官方页面自己完成。
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
                <span className="more">查看说明</span>
              </a>
            </li>
          ))}
        </ol>
      </section>

      <section className="split-note" aria-label="两类步骤">
        <article>
          <p>我们解决</p>
          <h2>手机号、稳定的网络、付款</h2>
          <p>这三步决定你在国内能不能把海外 AI 用起来。号码、流量和银联卡，都有现成的办理入口。</p>
        </article>
        <article>
          <p>注册步骤</p>
          <h2>Gmail、ChatGPT</h2>
          <p>这两步在官方页面完成。用我们的号码收验证码，再用这组邮箱开通 ChatGPT。</p>
        </article>
      </section>
    </main>
  );
}

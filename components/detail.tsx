import { JumpLink } from "@/components/frame";
import { cardBriefs, esimHowTo, shops, steps, type Step } from "@/lib/content";

export function Detail({ step }: { step: Step }) {
  const index = steps.findIndex((item) => item.id === step.id);
  const prev = index > 0 ? steps[index - 1] : undefined;
  const next = index < steps.length - 1 ? steps[index + 1] : undefined;

  return (
    <main id="content" className="detail">
      <p className="crumb">
        <a href="/">首页</a>
        <span aria-hidden="true"> / </span>
        {step.nav}
      </p>
      <header className="detail-head">
        <p className={`pill ${step.kind}`}>
          <span>{step.index}</span>
          {step.kindLabel}
        </p>
        <h1>{step.title}</h1>
        <p className="lead">{step.lead}</p>
      </header>

      <div className="detail-grid">
        <div>
          {step.id === "network" ? (
            <ol className="howto">
              {esimHowTo.map((item, itemIndex) => (
                <li key={item}>
                  <b>{itemIndex + 1}</b>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          ) : null}

          {step.id === "pay" ? (
            <div className="briefs">
              {cardBriefs.map((brief) => (
                <article key={brief.title}>
                  <h2>{brief.title}</h2>
                  <p>{brief.body}</p>
                </article>
              ))}
              <p className="promo">
                <span>开卡优惠码</span>
                <strong>{shops.cardrypto.code}</strong>
              </p>
            </div>
          ) : null}

          {step.id === "phone" ? (
            <p className="price-note">
              <strong>249</strong>
              <span>元 / 年 · 英国 CTE · 保激活</span>
            </p>
          ) : null}

          <div className="jumps">
            {prev ? (
              <a className="btn" href={prev.href}>
                上一步 · {prev.nav}
              </a>
            ) : null}
            {step.jumps.map((jump) => (
              <JumpLink key={jump.href + jump.label} jump={jump} />
            ))}
            {next ? (
              <a className="btn btn-primary" href={next.href}>
                下一步 · {next.nav}
              </a>
            ) : (
              <a className="btn" href="/">
                回到首页
              </a>
            )}
          </div>
        </div>

        <aside className="panel">
          <h2>这一步要记住</h2>
          <ul>
            {step.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="refs">
            <h2>引用</h2>
            <ul>
              {step.refs.map((item) => (
                <li key={item.href + item.label}>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.label} ↗
                  </a>
                  <p>
                    <span>{item.source}</span>
                    {item.note}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}

export const site = {
  domain: "opcchina.org",
  title: "OPC China · 一人公司如何用上海外 AI",
  description:
    "给在中国的一人公司：用海外 AI 之前，先准备英国手机号、Gmail、ChatGPT，以及稳定网络和能付款的银联卡。",
} as const;

export const shops = {
  mars: {
    name: "火星信号局",
    href: "https://v3.marssignal.com",
  },
  cardrypto: {
    name: "Cardrypto",
    href: "https://cardrypto.com",
    code: "LEO2026",
  },
} as const;

export type Reference = {
  href: string;
  label: string;
  source: string;
  note: string;
};

export const references = {
  googleCreate: {
    href: "https://support.google.com/accounts/answer/27441?hl=zh-Hans",
    label: "创建 Google 账号",
    source: "Google 账号帮助",
    note: "官方注册流程。电话号码验证在帮助文档里标为可选，页面是否要求验证，以当时提示为准。",
  },
  googleVerify: {
    href: "https://support.google.com/accounts/answer/114129?hl=zh-Hans",
    label: "验证您的账号",
    source: "Google 账号帮助",
    note: "说明 Google 在什么情况下会要求用手机短信或来电验证。",
  },
  googleSignup: {
    href: "https://accounts.google.com/signup",
    label: "Google 账号注册页",
    source: "accounts.google.com",
    note: "在这里创建 Gmail。需要验证手机时，使用第一步拿到的英国号码。",
  },
  chatgpt: {
    href: "https://chatgpt.com/",
    label: "ChatGPT",
    source: "OpenAI",
    note: "用第二步的 Gmail 注册或登录。",
  },
  chatgptFaq: {
    href: "https://help.openai.com/en/articles/12677804-what-is-chatgpt-faq",
    label: "What is ChatGPT: FAQ",
    source: "OpenAI Help Center",
    note: "官方说明如何开始使用、有哪些方案，以及网页与 App 入口。",
  },
  chatgptStart: {
    href: "https://openai.com/academy/getting-started/",
    label: "Getting started with ChatGPT",
    source: "OpenAI Academy",
    note: "官方入门：打开 ChatGPT，发出第一条对话。",
  },
  mars: {
    href: shops.mars.href,
    label: "火星信号局",
    source: "v3.marssignal.com",
    note: "英国 CTE 手机号在这里购买。eSIM 流量也在这里的软件里购买，并写入日本 eSIM 手机。",
  },
  cardrypto: {
    href: shops.cardrypto.href,
    label: "Cardrypto",
    source: "cardrypto.com",
    note: `银联卡在这里购买。开卡优惠码 ${shops.cardrypto.code}。可按不同币种支付，也能绑定国内常用软件。`,
  },
} as const satisfies Record<string, Reference>;

export type Jump = {
  href: string;
  label: string;
  tone: "primary" | "quiet";
};

export type StepKind = "core" | "register";

export type Step = {
  id: string;
  href: string;
  index: string;
  nav: string;
  kind: StepKind;
  kindLabel: string;
  blurb: string;
  title: string;
  hint: string;
  lead: string;
  points: string[];
  refs: Reference[];
  jumps: Jump[];
};

export const steps: Step[] = [
  {
    id: "phone",
    href: "/phone",
    index: "01",
    nav: "手机号",
    kind: "core",
    kindLabel: "我们帮你办",
    blurb: "英国 CTE 号码，249 元一年，用来收注册验证码。",
    title: "先有一个能收验证码的号码",
    hint: "收验证码",
    lead: "海外服务注册时，常常要一个能收短信的号码。这是一人公司在国内会卡住的第一件事，由我们来解决：英国 CTE 手机号带号码、服务期内保激活，249 元一年，在火星信号局购买。拿到号码，下一步自己去注册 Gmail。",
    points: [
      "英国 CTE 手机号，办理时分配具体号码",
      "服务期内保激活",
      "价格 249 元 / 年",
      "购买：火星信号局",
    ],
    refs: [references.mars, references.googleCreate, references.googleVerify],
    jumps: [{ href: shops.mars.href, label: "去火星信号局购买", tone: "primary" }],
  },
  {
    id: "gmail",
    href: "/gmail",
    index: "02",
    nav: "Gmail",
    kind: "register",
    kindLabel: "你来注册",
    blurb: "用上一步的号码，在 Google 官方页面注册邮箱。",
    title: "用这个号码注册 Gmail",
    hint: "登录身份",
    lead: "这一步是注册，不需要我们代办。海外 AI 大多用邮箱当登录身份。打开 Google 官方注册页，创建个人用途的 Gmail。页面要求验证手机时，填写第一步的英国号码，再回填短信验证码。这组邮箱留给下一步开通 ChatGPT。",
    points: [
      "只在 Google 官方页面注册",
      "验证手机时使用第一步的号码",
      "注册完成后保留这组 Gmail",
    ],
    refs: [references.googleSignup, references.googleCreate],
    jumps: [{ href: references.googleSignup.href, label: "打开 Google 注册", tone: "primary" }],
  },
  {
    id: "chatgpt",
    href: "/chatgpt",
    index: "03",
    nav: "ChatGPT",
    kind: "register",
    kindLabel: "你来注册",
    blurb: "用这组 Gmail，在官网开通 ChatGPT。",
    title: "用 Gmail 开通 ChatGPT",
    hint: "开始使用",
    lead: "这一步也是注册。打开 ChatGPT 官网，用刚注册的 Gmail 注册或登录。若页面要求验证邮箱，回到 Gmail 收取验证码。账号开好之后，再处理稳定网络和付款，那两件是我们解决的。",
    points: [
      "使用刚注册的 Gmail，不另建一套邮箱",
      "入口是 ChatGPT 官网",
      "邮箱验证码在 Gmail 里查看",
    ],
    refs: [references.chatgpt, references.chatgptFaq, references.chatgptStart],
    jumps: [{ href: references.chatgpt.href, label: "打开 ChatGPT", tone: "primary" }],
  },
  {
    id: "network",
    href: "/network",
    index: "04",
    nav: "稳定的网络",
    kind: "core",
    kindLabel: "我们帮你办",
    blurb: "二手日本 eSIM 手机写入流量，开热点后稳定上 ChatGPT。",
    title: "准备一条稳定的网络",
    hint: "用得稳",
    lead: "人在国内要稳定打开 ChatGPT，网络是第二件核心问题，由我们来解决。买一部二手日本 eSIM 手机，在火星信号局的软件里购买流量并写入，再开热点分享。",
    points: [
      "二手日本 eSIM 手机：淘宝、天猫、京东、闲鱼",
      "流量在火星信号局的软件里购买并写入",
      "打开热点分享，即可稳定上 ChatGPT",
    ],
    refs: [references.mars],
    jumps: [{ href: shops.mars.href, label: "去火星信号局获取软件", tone: "primary" }],
  },
  {
    id: "pay",
    href: "/pay",
    index: "05",
    nav: "付款",
    kind: "core",
    kindLabel: "我们帮你办",
    blurb: "银联卡可充 ChatGPT、Claude，也能按当地币种付款。",
    title: "用银联卡付款",
    hint: "付得省",
    lead: "付款是第三件核心问题。在 Cardrypto 购买银联卡，开卡优惠码 LEO2026。往卡里充值，支持微信和支付宝入金。",
    points: [
      "稳定充值 ChatGPT、Claude",
      "可绑定支付宝、京东、拼多多、美团",
      "支持日元、台湾元等不同币种",
      "按当地订阅价付款，费用会更低",
      "在 Cardrypto 购买，优惠码 LEO2026",
    ],
    refs: [references.cardrypto],
    jumps: [{ href: shops.cardrypto.href, label: "去 Cardrypto 购买", tone: "primary" }],
  },
];

export const cardBriefs = [
  {
    title: "适用范围",
    body: "可以稳定充值 ChatGPT、Claude。同时能绑定支付宝、京东、拼多多、美团等国内软件。",
  },
  {
    title: "支付优势",
    body: "支持用不同币种支付。日本的 ChatGPT 可以按日元价格付，台湾的可以按台湾元付。每个地区的订阅费不一样，用当地币种付，订阅价格会降下来。",
  },
] as const;

export const esimHowTo = [
  "在淘宝、天猫、京东、闲鱼购买一部二手日本 eSIM 手机。",
  "下载火星信号局的软件，在软件里购买流量，并写入这部手机。",
  "打开热点，把流量分享出来，就可以在国内稳定使用 ChatGPT。",
] as const;

export type Product = {
  id: string;
  kicker: string;
  title: string;
  price: string;
  summary: string;
  facts: { label: string; value: string }[];
  actionHref: string;
  actionReady: string;
  actionPending: string;
  code?: string;
  codeLabel?: string;
  jumps: Jump[];
};

export const products: Product[] = [
  {
    id: "product-phone",
    kicker: "对应第一步",
    title: "英国 CTE 手机号",
    price: "249 元 / 年",
    summary: "带号码、保激活。在火星信号局购买英国 CTE 号码，服务期内保持激活，用来接收 Gmail 注册验证。",
    facts: [
      { label: "号码", value: "英国 CTE，办理时分配" },
      { label: "激活", value: "服务期内保激活" },
      { label: "用途", value: "注册 Gmail 时接收验证" },
      { label: "购买", value: "火星信号局" },
      { label: "价格", value: "249 元 / 年" },
    ],
    actionHref: shops.mars.href,
    actionReady: "去火星信号局购买",
    actionPending: "办理入口即将接入",
    jumps: [
      { href: "/phone", label: "手机号说明", tone: "quiet" },
      { href: "/gmail", label: "接着注册 Gmail", tone: "primary" },
    ],
  },
  {
    id: "product-esim",
    kicker: "对应第四步",
    title: "eSIM 流量",
    price: "稳定上 ChatGPT",
    summary: "用来在中国稳定打开 ChatGPT。手机在二手平台买，流量在火星信号局的软件里购买并写入，再通过热点分享。",
    facts: [
      { label: "手机", value: "二手日本 eSIM 手机" },
      { label: "哪里买手机", value: "淘宝、天猫、京东、闲鱼" },
      { label: "流量", value: "软件里购买并写入" },
      { label: "使用", value: "热点分享后上网" },
      { label: "软件", value: "火星信号局" },
    ],
    actionHref: shops.mars.href,
    actionReady: "去火星信号局获取软件",
    actionPending: "安装包即将提供",
    jumps: [
      { href: "/network", label: "网络说明", tone: "quiet" },
      { href: "/pay", label: "去看付款", tone: "primary" },
    ],
  },
  {
    id: "product-card",
    kicker: "对应第五步",
    title: "银联卡",
    price: "微信 / 支付宝入金",
    summary: "在 Cardrypto 购买。开卡优惠码 LEO2026，入金支持微信和支付宝。",
    facts: [
      { label: "充值", value: "ChatGPT、Claude" },
      { label: "国内绑定", value: "支付宝、京东、拼多多、美团" },
      { label: "币种", value: "日元、台湾元等" },
      { label: "价格", value: "按当地订阅价付" },
      { label: "入金", value: "微信、支付宝" },
      { label: "购买", value: "Cardrypto" },
      { label: "开卡优惠码", value: shops.cardrypto.code },
    ],
    actionHref: shops.cardrypto.href,
    actionReady: "去 Cardrypto 购买",
    actionPending: "办理入口即将接入",
    code: shops.cardrypto.code,
    codeLabel: "开卡优惠码",
    jumps: [
      { href: "/pay", label: "付款说明", tone: "quiet" },
      { href: "/network", label: "去看稳定的网络", tone: "primary" },
    ],
  },
];

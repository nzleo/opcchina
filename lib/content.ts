export const site = {
  domain: "opcchina.org",
  title: "OPC China · AI 注册全流程",
  description:
    "从英国手机号、Gmail、ChatGPT，到 eSIM 流量和银联卡付款。opcchina.org 把 AI 注册与持续使用收成四步，每一步都有资料和跳转。",
} as const;

/**
 * 办理页和安装包地址。留空时按钮显示「即将接入」，不会跳到空白链接。
 * 有地址后填在这里即可。
 */
export const actions = {
  phoneOrderUrl: "",
  apkUrl: "",
  cardOrderUrl: "",
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
} as const satisfies Record<string, Reference>;

export type Jump = {
  href: string;
  label: string;
  tone: "primary" | "quiet";
};

export type Step = {
  id: string;
  index: string;
  nav: string;
  title: string;
  lead: string;
  points: string[];
  refs: Reference[];
  jumps: Jump[];
};

export const steps: Step[] = [
  {
    id: "phone",
    index: "01",
    nav: "手机号",
    title: "获取手机号",
    lead: "先拿到一个可以收验证短信的英国号码。我们提供英国 CTE 手机号，方案里包含号码，服务期内保激活，价格 249 元一年。这个号码用于下一步注册 Gmail。",
    points: [
      "英国 CTE 手机号，办理时分配具体号码",
      "服务期内保激活",
      "价格 249 元 / 年",
      "用于接收 Gmail 注册验证",
    ],
    refs: [references.googleCreate, references.googleVerify],
    jumps: [
      { href: "#product-phone", label: "查看手机号方案", tone: "quiet" },
      { href: "#gmail", label: "下一步 · 注册 Gmail", tone: "primary" },
    ],
  },
  {
    id: "gmail",
    index: "02",
    nav: "Gmail",
    title: "通过手机号注册 Gmail",
    lead: "打开 Google 官方注册页，创建个人用途的 Gmail。页面要求验证手机时，填写第一步的英国号码，再回填短信验证码。邮箱和密码留给下一步开通 ChatGPT。",
    points: [
      "只在 Google 官方页面注册",
      "验证手机时使用第一步的号码",
      "注册完成后保留这组 Gmail",
    ],
    refs: [references.googleSignup, references.googleCreate],
    jumps: [
      { href: "#phone", label: "上一步 · 获取手机号", tone: "quiet" },
      { href: references.googleSignup.href, label: "打开 Google 注册", tone: "primary" },
      { href: "#chatgpt", label: "下一步 · 开通 ChatGPT", tone: "primary" },
    ],
  },
  {
    id: "chatgpt",
    index: "03",
    nav: "ChatGPT",
    title: "通过 Gmail 开通 ChatGPT",
    lead: "打开 ChatGPT 官网，用上一步的 Gmail 注册或登录。若页面要求验证邮箱，回到 Gmail 收取验证码。账号可用之后，再处理上网和付款。",
    points: [
      "使用刚注册的 Gmail，不另建一套邮箱",
      "入口是 ChatGPT 官网",
      "邮箱验证码在 Gmail 里查看",
    ],
    refs: [references.chatgpt, references.chatgptFaq, references.chatgptStart],
    jumps: [
      { href: "#gmail", label: "上一步 · 注册 Gmail", tone: "quiet" },
      { href: references.chatgpt.href, label: "打开 ChatGPT", tone: "primary" },
      { href: "#access", label: "下一步 · 流量与付款", tone: "primary" },
    ],
  },
  {
    id: "access",
    index: "04",
    nav: "流量与付款",
    title: "稳定上网，并准备付款",
    lead: "账号开通之后还有两件配套的事。上网用 eSIM 流量：下载安装 APK，完成流量共享，让使用 AI 时网络更稳定。付款用银联卡，充值支持微信和支付宝入金。",
    points: [
      "eSIM 流量，通过 APK 做流量共享",
      "银联卡用于完成付款",
      "入金方式：微信、支付宝",
    ],
    refs: [references.chatgptFaq],
    jumps: [
      { href: "#chatgpt", label: "上一步 · 开通 ChatGPT", tone: "quiet" },
      { href: "#product-esim", label: "查看流量卡", tone: "primary" },
      { href: "#product-card", label: "查看银联卡", tone: "primary" },
    ],
  },
];

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
  jumps: Jump[];
};

export const products: Product[] = [
  {
    id: "product-phone",
    kicker: "对应第一步",
    title: "英国 CTE 手机号",
    price: "249 元 / 年",
    summary: "带号码、保激活。办理后获得英国 CTE 号码，服务期内保持激活，用来接收 Gmail 注册验证。",
    facts: [
      { label: "号码", value: "英国 CTE，办理时分配" },
      { label: "激活", value: "服务期内保激活" },
      { label: "用途", value: "注册 Gmail 时接收验证" },
      { label: "价格", value: "249 元 / 年" },
    ],
    actionHref: actions.phoneOrderUrl,
    actionReady: "办理手机号",
    actionPending: "办理入口即将接入",
    jumps: [
      { href: "#phone", label: "回到第一步", tone: "quiet" },
      { href: "#gmail", label: "接着注册 Gmail", tone: "primary" },
    ],
  },
  {
    id: "product-esim",
    kicker: "对应第四步",
    title: "eSIM 流量",
    price: "流量共享",
    summary: "提供 eSIM 流量。下载安装 APK 后完成流量共享，用于稳定上网、使用 AI。",
    facts: [
      { label: "形态", value: "eSIM 流量" },
      { label: "使用方式", value: "安装 APK，共享流量" },
      { label: "用途", value: "稳定上网，使用 AI" },
    ],
    actionHref: actions.apkUrl,
    actionReady: "下载 APK",
    actionPending: "安装包即将提供",
    jumps: [
      { href: "#access", label: "回到第四步", tone: "quiet" },
      { href: "#product-card", label: "去看银联卡", tone: "primary" },
    ],
  },
  {
    id: "product-card",
    kicker: "对应第四步",
    title: "银联卡",
    price: "微信 / 支付宝入金",
    summary: "提供银联卡完成付款。往卡里充值时，支持微信和支付宝入金。",
    facts: [
      { label: "卡片", value: "银联卡" },
      { label: "用途", value: "完成付款" },
      { label: "入金", value: "微信、支付宝" },
    ],
    actionHref: actions.cardOrderUrl,
    actionReady: "办理银联卡",
    actionPending: "办理入口即将接入",
    jumps: [
      { href: "#access", label: "回到第四步", tone: "quiet" },
      { href: "#product-esim", label: "去看流量卡", tone: "primary" },
    ],
  },
];

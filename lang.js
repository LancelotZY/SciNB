/* /SciNB/lang.js */

/** zh-en for all pages*/
const I18N = {
  zh: {
    /**index part */
    H1: "知识",
    H2: "无界",
    SLOGAN: "|HINC ITUR AD ASTRA|",

    NAV_POPSCI: "硬核科普",
    NAV_POPSCI_SUB: "你好！探索世界的无畏勇士",
    NAV_SCIFI: "科幻小说",
    NAV_SCIFI_SUB: "让好奇驱动思想飞向远方",
    NAV_CLEAN: "清朗学术",
    NAV_CLEAN_SUB: "安得广厦千万间，大庇天下寒士俱欢颜",
    NAV_QA: "问道于盲",
    NAV_QA_SUB: "圣人之所圣也，只是好学下问",

    FOOT_COLLAB: "投稿&合作",
    FOOT_COLLAB_TEXT: "如果你也致力于公益的知识传播，有趣的科幻故事，<br>或者帮助解答问题的热情的话，欢迎加入我们！",
    FOOT_CONTACT: "联系方式",
    FOOT_OPEN: "||本网站所有内容致力于开源开放，商业行为将不被提倡||",

    /**konwledge part */
    KONWL_TITLE: "硬核科普",
    KONWL_TAB_ALL: "全部",
    KONWL_TAB_PHYS: "物理",
    KONWL_TAB_MATH: "数学",
    KONWL_TAB_CHEM: "化学",
    KONWL_TAB_BIOL: "生物",
    KONWL_TAB_ASRT: "天文",
    KONWL_TAB_LITE: "文学/其他",

    KNOWL_DESC_ALL:"无论是文学作品还是理学符号，都是优美的，因为他们给了我们描述我们眼中世界的能力",
    KNOWL_DESC_MATH:"数学是宇宙的语言，用最简单的符号描述最复杂，最奇妙的理论",
    KNOWL_DESC_PHYS:"何为物理？析万物之理，我们使用数学的语言，描述这个世界的本质",
    KNOWL_DESC_CHEM:"你以为化学只有一加一等于二？那来看看真正的那些让这个世界沸腾的化学吧！",
    KNOWL_DESC_BIOL:"生命是自然最精妙的造物，在我们仰望星空，思绪远飞的时候，别忘了我们精妙的构造",
    KNOWL_DESC_ASRT:"当祖先第一次凝视星空的时候，我就已经诞生了。我脱胎于所有学科之前，但是一直服务于未来",
    KNOWL_DESC_LITE:"当理学的呢喃启蒙了人类的文明，文学的光辉照亮了人类的灵魂，成为万物的灵长，宇宙的精华", 
    
    /**scifi part */
    SCIFI_TITLE: "科幻小说",
    SCIFI_TAB_ALL: "全部",
    SCIFI_TAB_HOT: "本周热点",
    SCIFI_TAB_ORIGINAL: "原创文学",
    SCIFI_TAB_CLASSIC: "经典读物",

    SCIFI_DESC_ALL: "对于未知的好奇与真理的执着，让我们拥有不断前进的动力",
    SCIFI_DESC_HOT: "让我们看看这周，探索欲将我们引向何方吧",
    SCIFI_DESC_ORIGINAL: "在这里我们欢迎每一个拥有创作欲的笔者展示他们心目中的璨烂星河",
    SCIFI_DESC_CLASSIC: "当时间冲刷过尘世，带走了悬浮的尘埃，留下了闪耀的宝藏",


  },
  en: {
    /**index part */
    H1: "Knowledge",
    H2: "Unbounded",
    SLOGAN: "|HINC ITUR AD ASTRA|",

    NAV_POPSCI: "Pop Science",
    NAV_POPSCI_SUB: "Hello, brave explorer of the world!",
    NAV_SCIFI: "Sci-Fi",
    NAV_SCIFI_SUB: "Let curiosity send your mind farther",
    NAV_CLEAN: "Academic Integrity",
    NAV_CLEAN_SUB: "Let there be shelter for every scholar",
    NAV_QA: "Q&A",
    NAV_QA_SUB: "The wise ask with humility",

    FOOT_COLLAB: "Contribute & Collaborate",
    FOOT_COLLAB_TEXT: "If you love open knowledge sharing, sci-fi stories,<br>or helping others learn—join us!",
    FOOT_CONTACT: "Contact",
    FOOT_OPEN: "||This site is open and free; commercial use is discouraged||",

    /**konwledge part */
    KONWL_TITLE: "Pop Science",
    KONWL_TAB_ALL: "ALL",
    KONWL_TAB_PHYS: "Physics",
    KONWL_TAB_MATH: "Mathematics",
    KONWL_TAB_CHEM: "Chemistry",
    KONWL_TAB_BIOL: "Biology",
    KONWL_TAB_ASRT: "Astronomy",
    KONWL_TAB_LITE: "Literature/Other",

    KNOWL_DESC_ALL:"Literature and science share beauty: they let us describe the world.",
    KNOWL_DESC_MATH:"Mathematics is the language of the universe,simple symbols, infinite truths.",
    KNOWL_DESC_PHYS:"Physics seeks the principles of all things,using mathematics to reveal the essence of reality.",
    KNOWL_DESC_CHEM:"Chemistry is transformation—the force that makes the world ignite.",
    KNOWL_DESC_BIOL:"Life is nature’s finest creation, wonder within as we gaze outward.",
    KNOWL_DESC_ASRT:"Born with stargazing minds, knowledge precedes disciplines, serving the future.",
    KNOWL_DESC_LITE:"Science awakens civilization; literature illuminates the human soul.",    

    /**scifi part */
    SCIFI_TITLE: "Sci-Fi",
    SCIFI_TAB_ALL: "All",
    SCIFI_TAB_HOT: "Hot This Week",
    SCIFI_TAB_ORIGINAL: "Original Works",
    SCIFI_TAB_CLASSIC: "Classics",

    SCIFI_DESC_ALL: "Curiosity for the unknown and devotion to truth keep us moving forward.",
    SCIFI_DESC_HOT: "Let’s see where curiosity has taken us this week.",
    SCIFI_DESC_ORIGINAL: "We welcome every writer to share the starry worlds in their imagination.",
    SCIFI_DESC_CLASSIC: "When time washes away the dust, it leaves behind treasures that still shine.",
  }
};

function getBrowserPref() {
  return (navigator.language || "").toLowerCase().startsWith("zh") ? "zh" : "en";
}

function getSavedLang() {
  return localStorage.getItem("site_lang") || "";
}

function setSavedLang(lang) {
  localStorage.setItem("site_lang", lang);
}

function setHtmlLangAttr(lang) {
  document.documentElement.lang = (lang === "zh") ? "zh-CN" : "en";
}

/** 把页面上所有 data-i18n 的元素按词典替换 */
function applyLang(lang) {
  const dict = I18N[lang] || I18N.zh;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = dict[key];
    if (!val) return;

    // 含 <br> 等标签时，用 innerHTML；否则用 textContent
    if (String(val).includes("<")) el.innerHTML = val;
    else el.textContent = val;
  });

  // 按钮文字：当前中文则显示 EN，当前英文则显示 中文
  const btn = document.getElementById("langToggle");
  if (btn) btn.textContent = (lang === "zh") ? "EN" : "中文";

  setSavedLang(lang);
  setHtmlLangAttr(lang);
}

/** 初始化：页面加载时自动套用上次语言偏好，并绑定按钮点击 */
function initI18n() {
  const saved = getSavedLang();
  const browserPref = getBrowserPref();
  const lang = saved || browserPref;

  applyLang(lang);

  const btn = document.getElementById("langToggle");
  if (btn) {
    btn.addEventListener("click", () => {
      const current = getSavedLang() || browserPref;
      applyLang(current === "zh" ? "en" : "zh");
    });
  }
}

// 让它自动运行（前提：你用 defer 引入，保证 DOM 已解析）
window.I18N = I18N;
initI18n();



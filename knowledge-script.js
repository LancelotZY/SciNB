function getCurrentLang() {
  return localStorage.getItem("site_lang") || ((navigator.language || "").toLowerCase().startsWith("zh") ? "zh" : "en");
}

function t(key) {
  const lang = getCurrentLang();
  const dict = (window.I18N && window.I18N[lang]) ? window.I18N[lang] : {};
  return dict[key] || key;
}

function updateFooter(subjectKey) {
  const element1 = document.getElementById('content1');
  const element2 = document.getElementById('content2');

  switch (subjectKey) {
    case "all":
      element1.innerHTML = t("KNOWL_DESC_ALL");   
      element2.textContent = t("KNOWL_TAB_ALL");
      break;

    case "math":
      element1.innerHTML = t("KNOWL_DESC_MATH");
      element2.textContent = t("KNOWL_TAB_MATH");
      break;

    case "phys":
      element1.innerHTML = t("KNOWL_DESC_PHYS");
      element2.textContent = t("KNOWL_TAB_PHYS");
      break;

    case "chem":
      element1.innerHTML = t("KNOWL_DESC_CHEM");
      element2.textContent = t("KNOWL_TAB_CHEM");
      break;

    case "biol":
      element1.innerHTML = t("KNOWL_DESC_BIOL");
      element2.textContent = t("KNOWL_TAB_BIOL");
      break;

    case "astr":
      element1.innerHTML = t("KNOWL_DESC_ASTR");
      element2.textContent = t("KNOWL_TAB_ASTR");
      break;

    case "lite":
      element1.innerHTML = t("KNOWL_DESC_LITE");
      element2.textContent = t("KNOWL_TAB_LITE");
      break;
  }
}

function showContent(key) {
  // 1. 隐藏所有文章区
  const sections = document.querySelectorAll(".articles");
  sections.forEach(sec => {
    sec.style.display = "none";
  });

  // 2. 显示当前选中的那一类
  const target = document.getElementById(key);
  if (target) {
    target.style.display = "block";
  }
}

//updateFooter("all");
//showContent("all");

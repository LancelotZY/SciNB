function getCurrentLang() {
  return localStorage.getItem("site_lang") || ((navigator.language || "").toLowerCase().startsWith("zh") ? "zh" : "en");
}

// 这里假设 lang.js 暴露了 window.I18N（我后面会教你怎么暴露）
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
      element1.innerHTML = t("SCIFI_DESC_ALL");   // 用 innerHTML 以防你以后想加 <br>
      element2.textContent = t("SCIFI_TAB_ALL");
      break;

    case "hot":
      element1.innerHTML = t("SCIFI_DESC_HOT");
      element2.textContent = t("SCIFI_TAB_HOT");
      break;

    case "original":
      element1.innerHTML = t("SCIFI_DESC_ORIGINAL");
      element2.textContent = t("SCIFI_TAB_ORIGINAL");
      break;

    case "classic":
      element1.innerHTML = t("SCIFI_DESC_CLASSIC");
      element2.textContent = t("SCIFI_TAB_CLASSIC");
      break;
  }
}

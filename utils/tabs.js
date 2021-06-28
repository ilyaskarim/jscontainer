export default function Tabs(el, options) {
  let oldTab = options.byDefaultTab;
  let newTab = options.byDefaultTab;
  const mainEl = document.querySelector(el);
  if (mainEl) {
    const links = mainEl.querySelectorAll(".tab-header .tab-header-item");

    const tabContents = mainEl.querySelectorAll(
      ".tab-content .tab-content-item"
    );

    const activateTab = (tab) => {
      tabContents.forEach((tabContentItem) => {
        tabContentItem.style.display = "none";
        if (tabContentItem.getAttribute("data-tab-content") === tab) {
          tabContentItem.style.display = "block";

          oldTab = newTab;
          newTab = tab;
          options.onChange && options.onChange(newTab, oldTab);
        }
      });
    };

    activateTab(options.byDefaultTab);

    links.forEach((clickedLink) => {
      if (clickedLink.getAttribute("data-tab") === options.byDefaultTab) {
        clickedLink.classList.add("active");
      }

      clickedLink.addEventListener("click", function (e) {
        e.preventDefault();
        const tab = clickedLink.getAttribute("data-tab");
        activateTab(tab);

        links.forEach((link) => {
          if (
            link.getAttribute("data-tab") ===
            clickedLink.getAttribute("data-tab")
          ) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      });
    });
  }
}

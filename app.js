const buttons = document.querySelectorAll("button");

buttons.forEach(function (item) {
  item.addEventListener("click", function (event) {
    event.stopPropagation();
    const clickedTabValue = event.currentTarget.dataset.tab;
    const htmlActiveTab = document.querySelector("[data-active-tab]");

    // remove prev tab
    const prevTabContents = document.querySelectorAll(
      `[data-active-tab='${htmlActiveTab.dataset.activeTab}']`
    );
    prevTabContents.forEach(function (item) {
      console.log({ item });
      item.removeAttribute("data-active-tab");
    });

    // set new tab
    const tabContent = document.querySelectorAll(
      `[data-tab='${clickedTabValue}']`
    );
    tabContent.forEach(function (item) {
      item.setAttribute("data-active-tab", clickedTabValue);
    });
  });
});

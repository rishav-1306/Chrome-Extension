let activeTabId = null;
let startTime = Date.now();

chrome.tabs.onActivated.addListener(activeInfo => {
  if (activeTabId !== null) {
    chrome.tabs.get(activeTabId, (tab) => {
      const endTime = Date.now();
      const timeSpent = (endTime - startTime) / 1000;

      if (tab.url.startsWith('http')) {
        fetch("http://localhost:5000/api/sites", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: tab.url, timeSpent })
        });
      }
    });
  }

  startTime = Date.now();
  activeTabId = activeInfo.tabId;
});

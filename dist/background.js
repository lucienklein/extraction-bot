chrome.downloads.download(
  {
    url: "http://app-42a9f51d-0586-42d1-84f2-f0fa9c3f6df2.cleverapps.io/test.txt",
    filename: "test/file.txt",
    conflictAction: "uniquify",
  },
  function (downloadId) {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError.message);
    } else {
      console.log(`Download started with ID: ${downloadId}`);
    }
  }
);

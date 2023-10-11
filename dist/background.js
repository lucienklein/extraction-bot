chrome.downloads.download({
  url: "http://app-42a9f51d-0586-42d1-84f2-f0fa9c3f6df2.cleverapps.io/test.txt",
  filename: "test/file.txt", // This is a suggestion; the user's browser settings and OS may override this.
  conflictAction: "uniquify", // This will add a number to the filename if a file with the same name exists.
});

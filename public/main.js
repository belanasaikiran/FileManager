const { app, BrowserWindow } = require("electron");

// initialize electron remote
require("@electron/remote/main").initialize();

function createWindow() {
  // create browser window
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      enableRemoteMode: true,
    },
  });

  win.loadURL("http://localhost:3000");
}

app.on("ready", createWindow);

// Quit when all windows are closed
app.on("window-all-closed", function () {
  // On OS X, it is common for applications and their menu bar to stay active until the user quits explicitly with cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  //ON OS X, it is common to re-create a windows in the app when the dock - icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

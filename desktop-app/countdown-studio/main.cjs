const { app, BrowserWindow, shell } = require("electron");

const APP_URL = "https://infojano.com/countdown-studio.html";
const TRUSTED_ORIGIN = "https://infojano.com";

function createWindow() {
  const win = new BrowserWindow({
    width: 1360,
    height: 920,
    minWidth: 900,
    minHeight: 650,
    title: "InfoJano Celebration Countdown",
    autoHideMenuBar: true,
    backgroundColor: "#f5f8fc",
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  win.loadURL(APP_URL);

  win.webContents.setWindowOpenHandler(({ url }) => {
    try {
      const target = new URL(url);
      if (target.protocol === "https:" || target.protocol === "http:") {
        shell.openExternal(target.toString());
      }
    } catch (_) {}
    return { action: "deny" };
  });

  win.webContents.on("will-navigate", (event, url) => {
    try {
      const target = new URL(url);
      if (target.origin !== TRUSTED_ORIGIN) {
        event.preventDefault();
        if (target.protocol === "https:" || target.protocol === "http:") {
          shell.openExternal(target.toString());
        }
      }
    } catch (_) {
      event.preventDefault();
    }
  });
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

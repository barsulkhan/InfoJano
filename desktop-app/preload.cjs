const { contextBridge } = require("electron");
contextBridge.exposeInMainWorld("infoJanoDesktop", Object.freeze({ platform: "windows-desktop" }));

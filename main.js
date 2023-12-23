/*
 * @Descripttion: 
 * @Author: liufan
 * @Date: 2023-11-16 09:40:01
 * @LastEditors: liufan
 * @LastEditTime: 2023-12-22 11:32:32
 */
const { app, BrowserWindow, ipcMain } = require("electron");
const url = require("url");
const path = require("path");

require('electron-reload')(__dirname)

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/index.html`),
      protocol: "file:",
      slashes: true,
    })
  );
  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  mainWindow.on("closed", function () {
    mainWindow = null;
  });
}

function openModal() {
  const { BrowserWindow } = require("electron");
  let modal = new BrowserWindow({
    parent: mainWindow,
    modal: true,
    show: false,
  });
  modal.loadURL("https://www.sitepoint.com");
  modal.once("ready-to-show", () => {
    modal.show();
  });
}

require('@electron/remote/main').initialize()


ipcMain.on("openModal", (event, arg) => {
  openModal();
});

app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", function () {
  if (mainWindow === null) createWindow();
});

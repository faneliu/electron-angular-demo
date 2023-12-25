/*
 * @Descripttion: 
 * @Author: liufan
 * @Date: 2023-11-16 09:40:01
 * @LastEditors: liufan
 * @LastEditTime: 2023-12-25 15:56:17
 */
const { app, BrowserWindow, ipcMain } = require("electron");
const url = require("url");
const path = require("path");

require('electron-reload')(__dirname)
require('@electron/remote/main').initialize()

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    maxWidth: 800,
    maxHeight: 600,
    show: false,
    resizable: true,
    // frame: false,
    // transparent: true, 
    title: 'electron-demo',
    icon: './src/assets/image/avatar.jpeg',
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    },
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/index.html`),
      protocol: "file:",
      slashes: true,
    })
  );
  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })
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

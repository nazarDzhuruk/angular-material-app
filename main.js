const { app, BrowserView, BrowserWindow } = require('electron');
const path = require('path');

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: "Image resizer",
        width: 500,
        height: 600
    });

    mainWindow.loadFile(path.join(__dirname, 'dist/material-course/index.html'));
}

app.whenReady().then(() => {
    createMainWindow();
})
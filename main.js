const { app, BrowserWindow } = require('electron');

function createWindow(){
     // Create the browser window.
    const mainWindow =  new BrowserWindow({
        width : 850,
        height : 650,
        webPreferences : {
            nodeIntegration : true,
            contextIsolation : false
        }
    })
    // and load the index.html of the app.
    mainWindow.loadURL('http://localhost:3000');
}

// Will be called when Electron has finished initialization and is ready to create browser windows.
app.whenReady().then(createWindow);

// Quit the app && MacOS
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit()
    }
})

// Reactivate the app && Windows
app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0){
        createWindow();
    }
})
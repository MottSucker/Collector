const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const fs = require('fs-extra');

let win

function createWindow() {
    win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            contextIsolation: true,
            preload: path.join(__dirname, "preload.js"),
            nodeIntegration: true,
            webSecurity: false
        },
    });

    win.loadFile("./dist/Collector/index.html");
}

app.whenReady().then(() => {
    console.log("App READY!!!")
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
    ipcMain.handle('read-file', (event, args) => {
        let promise = new Promise((resolve, _) => {
            try {
                console.log("Calling fs.readFile")

                // Sync vs Async? Likely doesn't matter since it's inside a promise anyway.
                fs.readFile(args, 'utf8', (err, data) => {
                    if (err) {
                        console.log("ERROR READING FILE: " + err.message)
                        return resolve(undefined)
                    }
                    else {
                        console.log("File read success")
                        return resolve(data)
                    }
                })
                
                /*
                var data = fs.readFileSync(args, { encoding: 'utf8', flag: 'r' });
                console.log("resolving data: " + data)
                return resolve(data);
                */
            } catch (e) {
                console.log("ERROR READING FILE: " + e);
                return resolve(undefined)
            }
        })
        return promise
    })
    ipcMain.handle('save-file', (event, args) => {
        let promise = new Promise((resolve, _) => {
            try {

                if (!fs.existsSync(path.dirname(args.filePath))) {
                    console.log("Directory does not exist")
                    fs.mkdirSync(path.dirname(args.filePath), { recursive: true, mode: 0o777 })
                }

                fs.writeFileSync(args.filePath, args.data)
                console.log("Resolving true");
                return resolve(true)
            }
            catch (e) {
                console.log("Error saving file: " + e);
                return resolve(false)
            }
        })
        return promise
    })
    ipcMain.handle('file-exists', (event, args) => {
        let promise = new Promise((resolve, _) => {
            try {

                if (!fs.existsSync(path.dirname(args))) {
                    console.log("Directory does not exist")
                    return resolve(false);
                } else {
                    return resolve(true);
                }
            }
            catch (e) {
                console.log("Error checking if file exists: " + e);
                return resolve(false)
            }
        })
        return promise
    })
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

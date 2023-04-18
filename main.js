const { app, BrowserWindow, Notification } = require('electron')

const NOTIFICATION_TITLE = 'nerd'
const NOTIFICATION_BODY = 'ur a nerd'

function showNotification () {
  new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY }).show()
}

app.whenReady().then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification).then(showNotification)



app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
  }
})

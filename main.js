const menubar = require('menubar')
const {ipcMain} = require('electron')

const Howler = require('howler')
Howler.Howler.autoSuspend = false;

const mb = menubar({
  // transparent: true,
  y: 0,
  width: 300,
  preloadWindow: true,
  webPreferences: {
      backgroundThrottling: false
  }
  
})

mb.on('ready', function ready () {
  
  console.log('app is ready')
})

// mb.on('after-create-window', () => {

//   mb.window.openDevTools()
// })
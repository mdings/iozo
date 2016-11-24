const menubar = require('menubar')
const {ipcMain} = require('electron')

const Howler = require('howler')
Howler.Howler.autoSuspend = false;

const mb = menubar({
  // transparent: true,
  width: 300,
  preloadWindow: true,
  webPreferences: {
      scrollBounce: true,
      backgroundThrottling: false
  }
  
})

mb.on('ready', function ready () {
  
  console.log('app is ready')
})

// mb.on('after-create-window', () => {

//   mb.window.openDevTools()
// })
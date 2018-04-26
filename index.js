const launchChrome = require('@serverless-chrome/lambda')
const CDP = require('chrome-remote-interface')

function runChrome (event, callback) {
  console.log('EVENT:', event)

  launchChrome({
    flags: ['--window-size=1280x1696', '--hide-scrollbars', '--headless'],
    // chromePath: './node_modules/@serverless-chrome/lambda/dist/headless-chromium'
  })
    .then((chrome) => {
      // Chrome is now running on localhost:9222

      CDP.Version()
        .then((versionInfo) => {
          callback(null, {
            versionInfo,
          })
        })
        .catch((error) => {
          callback(error)
        })
    })
    // Chrome didn't launch correctly 😢
    .catch(callback)
}

module.exports.handler = function handler (event, context, callback) {
  runChrome(event, callback)
}

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  process.exit(1)
});

// Local test
// runChrome({}, console.log)



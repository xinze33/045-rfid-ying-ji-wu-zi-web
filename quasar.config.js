
const ESLintPlugin = require('eslint-webpack-plugin')
const { configure } = require('quasar/wrappers');

module.exports = configure(function (ctx) {
  console.log(ctx)
  return {
    supportTS: false,
    boot: [
      'i18n',
      'axios'
    ],
    css: [
      'app.scss'
    ],
    extras: [
      'roboto-font', // optional, you are not bound to it
      'material-icons', // optional, you are not bound to it
    ],
    build: {
      vueRouterMode: 'hash', // available values: 'hash', 'history'
      env: {
        projectName: 'RFID应急物资管理系统',
        projectCode: '045',
        // http接口地址
        // serverAddress: ctx.dev? 'https://qdrxtec.com/dragee-api/' : 'https://qdrxtec.com/dragee-api/', 
        // wsAddress: ctx.dev? 'wss://qdrxtec.com/dragee-api/webSocket/009' : 'wss://qdrxtec.com/dragee-api/webSocket/009', 
        // serverAddress: 'http://127.0.0.1:8080/dragee-api/', 
        // wsAddress: 'ws://127.0.0.1:8080/dragee-api/webSocket/z045',
        serverAddress: 'https://qdrxtec.com/dragee-api/', 
        wsAddress: 'wss://qdrxtec.com/dragee-api/webSocket/z045',

        // web地址
        webAddress: '127.0.0.1:9000',
      },
      chainWebpack (chain) {
        chain.plugin('eslint-webpack-plugin')
          .use(ESLintPlugin, [{ extensions: [ 'js', 'vue' ] }])
      }

    },
    devServer: {
      server: {
        type: 'http'
      },
      port: 9000,
      open: false // opens browser window automatically
    },
    framework: {
      config: {
        notify: {}
      },
      plugins: [
        'Notify'
      ]
    },




    animations: [],
    ssr: {
      pwa: false,
      prodPort: 3000, // The default port that the production server should use
      maxAge: 1000 * 60 * 60 * 24 * 30,
      chainWebpackWebserver (chain) {
        chain.plugin('eslint-webpack-plugin')
          .use(ESLintPlugin, [{ extensions: [ 'js' ] }])
      },
      middlewares: [
        ctx.prod ? 'compression' : '',
        'render' // keep this as last one
      ]
    },
    pwa: {
      workboxPluginMode: 'GenerateSW', // 'GenerateSW' or 'InjectManifest'
      workboxOptions: {}, // only for GenerateSW
      chainWebpackCustomSW (chain) {
        chain.plugin('eslint-webpack-plugin')
          .use(ESLintPlugin, [{ extensions: [ 'js' ] }])
      },
      manifest: {
        name: `Quasar App`,
        short_name: `Quasar App`,
        description: `A Quasar Project`,
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            src: 'icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: 'icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },
    cordova: {
      // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
    },
    capacitor: {
      hideSplashscreen: true
    },
    electron: {
      bundler: 'packager', // 'packager' or 'builder'
      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Windows only
        // win32metadata: { ... }
      },

      builder: {
        // https://www.electron.build/configuration/configuration

        appId: 'quasar-demo'
      },

      // "chain" is a webpack-chain object https://github.com/neutrinojs/webpack-chain

      chainWebpackMain (chain) {
        chain.plugin('eslint-webpack-plugin')
          .use(ESLintPlugin, [{ extensions: [ 'js' ] }])
      },



      chainWebpackPreload (chain) {
        chain.plugin('eslint-webpack-plugin')
          .use(ESLintPlugin, [{ extensions: [ 'js' ] }])
      },

    }
  }
});

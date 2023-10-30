const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);


// const path = require('path');

// module.exports = {
//   resolver: {
//     extraNodeModules: new Proxy(
//       {},
//       {
//         get: (target, name) => path.join(process.cwd(), `./src/${name}`),
//       }
//     ),
//   },
// };

// module.exports = {
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: true,
//       },
//     }),
//   },
//   resolver: {
//       nodeModulesPaths: [...localPackagePaths], // update to resolver
//   },
//   watchFolders: [...localPackagePaths], // update to watch
// };

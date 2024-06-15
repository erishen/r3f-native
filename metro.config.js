const { getDefaultConfig } = require('expo/metro-config')

module.exports = (async () => {
  const config = getDefaultConfig(__dirname)

  const { resolver: { sourceExts, assetExts } } = config

  return {
    ...config,
    resolver: {
      ...config.resolver,
      sourceExts: [...sourceExts, 'js', 'jsx', 'json', 'ts', 'tsx', 'cjs', 'mjs'],
      assetExts: [...assetExts, 'glb', 'gltf', 'png', 'jpg'],
    }
  }
})();

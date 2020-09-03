const {
    override,
    addDecoratorsLegacy,
    disableEsLint,
    addWebpackAlias,
    fixBabelImports,
    addBabelPlugin
  } = require("customize-cra");
  const path = require("path");
   
  module.exports = override(
    // 添加装饰器
    addDecoratorsLegacy(), 
   
    // 禁用eslingt
    // disableEsLint(),
    
    // 设置路径别名
    addWebpackAlias({ 
      '@': path.resolve(__dirname, 'src'),
    }),
    fixBabelImports('import', {
            libraryName: 'antd',
             libraryDirectory: 'es',
            style: 'css',
    }),
    addBabelPlugin( ['import',{
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      }, 'antd-import']),
);
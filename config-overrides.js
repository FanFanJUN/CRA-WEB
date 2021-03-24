/*
 * @Author       : LiCai
 * @connect      : 1981824361@qq.com
 * @Date         : 2021-01-11 17:00:11
 * @LastEditors  : LiCai
 * @LastEditTime : 2021-03-24 11:03:58
 * @Description  : 配置
 * @FilePath     : /CRA-WEB/config-overrides.js
 */
const {
    override,
    addDecoratorsLegacy,
    disableEsLint,
    addWebpackAlias,
    fixBabelImports,
    addBabelPlugin
  } = require("customize-cra");
  const path = require("path");
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

  const addCustomize = () => config => {
    if (process.env.NODE_ENV === 'production') {
      config.devtool = false; //去掉map文件
      if (process.env.BUNDLE_ANALYZE === 'true') {
        if (config.plugins) {
          config.plugins.push(new BundleAnalyzerPlugin());
        }
      }
    }
    const splitChunksConfig = config.optimization.splitChunks;
    if (config.entry && config.entry instanceof Array) { // dll
      config.entry = {
        main: config.entry,
        vendor: ["react", "react-dom", "react-router-dom", "react-redux", "redux", 'redux-thunk', "react-router"]
      }
    } else if (config.entry && typeof config.entry === 'object') {
      config.entry.vendor = ["react", "react-dom", "react-router-dom", "react-redux", "redux", 'redux-thunk', "react-router"]
    }


    Object.assign(splitChunksConfig, {
      chunks: "all",
      cacheGroups: {
        vendors: {
          test: /node_modules/,
          name: "vendors",
          priority: -10,
        },
        common: {
          name: "common",
          minChunks: 2,
          minSize: 30000,
          chunks: "all",
        },
      },
    });
    return config;
  }


// 添加 less 支持
  const styleConfig= ()=>(config, env)=>{
    const oneOf_loc= config.module.rules.findIndex(n=>n.oneOf)
    config.module.rules[oneOf_loc].oneOf=[    //例如要增加处理less的配置
        {
            test: /\.less$/,
            use: [
                require.resolve('style-loader'),
                {
                    loader: require.resolve('css-loader'),
                    options: {
                        importLoaders: 1,
                    },
                },
                {
                    loader: 'less-loader'
                }
            ],
        },
        ...config.module.rules[oneOf_loc].oneOf
    ]
 
    return config;
}

  module.exports = override(// 添加装饰器
    addDecoratorsLegacy(),

    // 禁用eslingt
    // disableEsLint(),

    // 设置路径别名
    addWebpackAlias({
      "@": path.resolve(__dirname, "src"),
    }), // 按需加载antd 参考 https://3x.ant.design/docs/react/use-with-create-react-app-cn
    fixBabelImports("import", {
      libraryName: "antd",
      libraryDirectory: "es",
      style: "css",
    }),
    //  fixBabelImports("antd-multi-cascader", {
    //   libraryName: "antd-multi-cascader",
    //   style: "css",
    // }), 
    addBabelPlugin([
      "import",
      {
        libraryName: "antd",
        libraryDirectory: "es",
        style: "css",
      },
      "antd-import",
    ]), 
    addCustomize(),
    styleConfig(),   //将自定义配置组合进来
    );
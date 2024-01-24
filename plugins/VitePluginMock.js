export default () => ({
  name: 'configure-preview-server',
  /**
   * config方法
   *
   * @param   {Object}  config  当前的配置对象
   * @param   {Object}  env     当前环境变量
   *
   * @return  {Object}          会和当前的配置对象进行 merge 合并
   */
  // 插件的生命周期
  config (config, env) {
    // console.log(config, env)
    // 可以一步步的交给下一步中间间
    return {
    }
  },
  configurePreviewServer(server) {
    // 返回一个钩子，会在其他中间件安装完成后调用
    return () => {
      server.middlewares.use((req, res, next) => {
        // 自定义处理请求 ...
      })
    }
  },
})

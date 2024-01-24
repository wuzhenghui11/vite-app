export default () => {
  return {
    /**
     * [transformIndexHtml description]
     *
     * @param   {string}  html  html
     * @param   {object}  ctx   执行期上下文
     *
     * @return  {object}        合并的对象
     */
    // 插件的生命周期
    transformIndexHtml (html, ctx) {
      console.log(ctx)
      return {

      }
    }
  }
}
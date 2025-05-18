import fs from 'node:fs'
import path from 'node:path'
/**
 * 区分文件和目录
 * @return  {ojbect}  返回一个对象
 */

function diffDirAndFile (dirFilesArr = [], basePath = '') {
  const result  = {
    dirs: [],
    files: [],
  }
  dirFilesArr.forEach((name) => {
    const curFileStat = fs.statSync(path.resolve(__dirname, basePath + '/' + name))
    console.log('current file stat', curFileStat)

    const isDirectory = curFileStat.isDirectory()
    if (isDirectory) {
      result.dirs.push(name)
    } else {
      result.files.push(name)
    }
  })
  return result
}

function getTotalSrcDirs (keyName = '@') {
  const result = fs.readdirSync(path.resolve(__dirname, '../src'))
  console.log(result)

  const diffReault = diffDirAndFile(result, '../src')
  console.log(diffReault)

  const resloveAliasObj = {}

  diffReault.dirs.forEach((dirName) => {
    const key = `${keyName}${dirName}`
    const absPath =  path.resolve(__dirname, '../src' + '/' + dirName)
    resloveAliasObj[key] = absPath
  })
  console.log(resloveAliasObj)

  return resloveAliasObj
}
// 插件必须返回一个对象 使用默认导出方法方便重命名和扩展
export default ({ keyName = '@' }) => {
  return {
    /**
     * config方法
     *
     * @param   {Object}  config  当前的配置对象
     * @param   {Object}  env     当前环境变量
     *
     * @return  {Object}          会和当前的配置对象（vite.config.js）进行 merge 合并
     */
    // 插件的生命周期
    config (config, env) {
      // console.log(config, env)
      const resloveAliasObj = getTotalSrcDirs(keyName)
      console.log(resloveAliasObj)
      return {
        // resolve: {
        //   ...resloveAliasObj
        // }
      }
    }
  }
}

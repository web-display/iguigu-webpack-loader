module.exports = function (content) {

}

/**
 * remainingRequire 剩下的还需要处理的loader
 * */
module.exports.pitch = function (remainingRequire) {
  const relativePath = remainingRequire.split('!').map(absolutePath => {
    /**
     *this.content 此loader所在的路径
     *absolutePath css-loader所在的绝对路径
     *就是通过this.content 把absolutePath转换为相对路径，再通过join方法拼接在一起
     *../../node_modules/css-loader/dist/cjs.js!./index.css
     * */
    return this.utils.contextify(this.context, absolutePath)
  }).join('!')

  const script = `
    import style from '!!${relativePath}'
    const styleEle = document.createElement('style')
    styleEle.innerHTML = style
    document.head.appendChild(styleEle)
  `
  return script

}
const schema = require("./schema.json");

module.exports = function (content) {
  console.log('banner-loader is worked !!!!!!!!!!');
  // 获取loader的options，同时对options内容进行校验
  // schema是options的校验规则（符合 JSON schema 规则）
  const options = this.getOptions(schema);
  console.log('content!!!', content);
  const prefix = `
    /*
    * Author: ${options.author}
    */
  `;

  return `${prefix} \n ${content}`;
};
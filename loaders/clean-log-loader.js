// loaders/clean-log-loader.js
module.exports = function cleanLogLoader(content) {
  console.log('clean-log-loader is worked !!!!!!!!!!!!!!!!!!!');
  // 将console.log替换为空
  return content.replace(/console\.log\(.*\);?/g, "");
};

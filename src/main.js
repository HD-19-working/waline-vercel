// app.js
const dotenv = require('dotenv'); // 引入dotenv
const Waline = require('@waline/vercel');// 引入并执行该文件
const http = require('http');

dotenv.config(); // 调用config方法合并.env环境变量

const walineConfig = {
  preSave(comment) {
      try {
        if(comment.comment.length > 600 || comment.nick.length > 12 || comment.mail.length > 100 || comment.link.length > 300 ||             comment.ua.length > 300) {
          return { errmsg: 'Excessive content' };
        }
      } catch(e) {
          
      }
  },
  avatarUrl(comment) {
    return comment.link;
  }
}

http.createServer(Waline(walineConfig)).listen(80, () => {
  console.log('Server is listening on port 80');
});

const notify = require('./sendNotify')
const axios = require('axios')

// 自动阅读
!(async () => {
  const {data: read_data} = await axios(process.env.AUTO_READ_URL)
  const message = read_data.code === 0 ? '阅读任务执行完成' : read_data.msg
  await notify.sendNotify('wereadx', message); 
})();
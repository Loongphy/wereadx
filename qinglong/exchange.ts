const notify = require('../sendNotify')
const axios = require('axios')

// 兑换体验卡
!(async () => {
  const {data: credit_data} = await axios(process.env.CREDIT_URL)
  const message = credit_data.code === 0 ? '兑换任务执行完成' : credit_data.msg
  await notify.sendNotify('wereadx', message); 
})();
'use strict'

module.exports = {
  // mailer: {
  //   service: 'Gmail',
  //   auth: {
  //     user: 'YOUR_GMAIL_ADDRESS',
  //     pass: 'YOUR_GMAIL_PASSWORD'
  //   }
  // },
  
  mailer: {
    // service: 'gmail',
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "b1c6efdd37e00e",
        pass: "c43a4df99a8c33"
    }
  },
  mongoURI: 'mongodb+srv://mcjovial:19971104Mj@cluster0.ul5to.mongodb.net/share?retryWrites=true&w=majority',
  sessionKey: 'McJovial'
}

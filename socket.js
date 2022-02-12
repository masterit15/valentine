const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:8080",
      methods: ["GET", "POST"],
      transports: ['websocket', 'polling'],
      credentials: true
  },
  allowEIO3: true
})

io.on('connection', socket => {
  // срабатывает при входе
  console.log(socket.id);
  // socket.on('userJoined', async data => {
  //   let user = await User.findOne({ where: { id: data.userId } }); 
  //   user.online = "Y";
  //   await user.save();
  // })
  // // срабатывает при выходе
  // socket.on('userLeft', async data => {
  //   let user = await User.findOne({ where: { id: data.userId } }); 
  //   user.online = "N";
  //   await user.save();
  // })
  // // срабатывает при входе
  // socket.on('newClaimNotified', async data => {
  //   // console.log(data)
  //   Notifycation.create({
  //     title: 'Поступила новая заявка!',
  //     text: '',
  //     date: new Date(),
  //     event: 'claim',
  //     recipients: data.departamentId,
  //     read: [data.userId],
  //   }).then(notify => {
  //     console.log('notify', notify.dataValues)
  //     socket.broadcast
  //       .to(data.departamentId)
  //       .emit('notifications', `Данные с сервера ${data}`)
  //   }).catch(err=>console.log(err))
    
  //   const payload = JSON.stringify({ title: 'Поступила новая заявка!', body: 'testtesttets!' });
  //   const user = await User.findOne({where: { id: data.userId }, raw: true})
  //   webpush.sendNotification(user.subscription, payload).catch(error => {
  //     console.error(error.stack);
  //   });
  // })
  // // срабатывает при отключении
  // socket.on('disconnect', () => {
  //   // const user = users.remove(socket.id)
  //   // if (user) {
  //   //   io.to(user.room).emit('updateUsers', users.getByRoom(user.room))
  //   //   io.to(user.room).emit(
  //   //     'newMessage',
  //   //     m('admin', `Пользователь ${user.name} вышел.`)
  //   //   )
  //   // }
  // })
})

module.exports = {
  io,
  app,
  server
}
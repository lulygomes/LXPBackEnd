import { io } from '../http'
import { CreateChatUserService } from '../services/CreateChatUserService'
import { CreateChatRoomService } from '../services/CreateChatRoomService'
import { GetAllChatUsersServices } from '../services/GetAllChatUsersService'
import { callbackify } from 'util'
import { GetChatUserBySocketIdService } from '../services/GetChatUserBySocketIdService'
import { GetChatRoomByUsers } from '../services/GetChatRoomByUsers'
import { GetChatMessagesByChatRoomService } from '../services/GetChatMessagesByChatRoomService'
import { CreateChatMessageService } from '../services/CreateChatMessageService'

interface ChatUserDTO {
  _id: string,
  email: string,
  name: string,
  user_id: string,
  socket_id: string,
}

interface ChatMessageDTO {
  _id: string;
  from?: ChatUserDTO;
  text: String;
  created_at: Date;
  roomId: String;
}

io.on("connection", socket => {
  socket.on("start", async (data) => {
    const { email, name, user_id } = data
    const createChatUserService = new CreateChatUserService();

    const user = await createChatUserService.execute({
      email,
      name,
      user_id,
      socket_id: socket.id
    })

    socket.broadcast.emit("new_user", user)
  })

  socket.on("get_users", async (callback) => {
    const getAllChatUsersService = new GetAllChatUsersServices()
    const users = await getAllChatUsersService.execute();

    callback(users)
  })

  socket.on("start_chat", async (data, callback) => {
    const createChatRoomService = new CreateChatRoomService()
    const getChatUserBySocketIdService = new GetChatUserBySocketIdService()
    const getChatRoomByUsers = new GetChatRoomByUsers()
    const getChatMessagesByChatRoomService = new GetChatMessagesByChatRoomService()

    const userLogged = await getChatUserBySocketIdService.execute(socket.id)
    let room = await getChatRoomByUsers.execute([data.idUser, userLogged?._id])

    if (!room) {
      room = await createChatRoomService.execute([data.idUser, userLogged?._id])
    }

    socket.join(room.idChatRoom)

    const messages = await getChatMessagesByChatRoomService.execute(room.idChatRoom)
    console.log(messages)
    callback({ room, messages })
  })

  socket.on('message', async data => {
    const getUserBySocketIdService = new GetChatUserBySocketIdService()
    const createChatMessageService = new CreateChatMessageService()

    const user = await getUserBySocketIdService.execute(socket.id)
    const message = await createChatMessageService.execute({
      from: user?._id,
      text: data.message,
      roomId: data.idChatRoom
    })

    const dataResponse: ChatMessageDTO = {
      _id: message.id,
      roomId: message.roomId,
      text: message.text,
      from: user!,
      created_at: message.created_at
    }

    console.log('dataResponse', dataResponse)
    io.to(data.idChatRoom).emit("message", dataResponse)
  })


})
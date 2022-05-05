import { ChatRoom } from "../schemas/ChatRoom";
import { ObjectId } from 'mongoose'

class GetChatRoomByUsers {
  async execute(idUsers: ObjectId[]) {
    console.log("entradar Room", idUsers)
    const room = await ChatRoom.findOne({
      idUsers: {
        $all: idUsers
      }
    }).exec()
    console.log("Room", room)
    return room
  }
}

export { GetChatRoomByUsers }
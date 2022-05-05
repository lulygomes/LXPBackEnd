import { ChatUser } from "../schemas/ChatUser";

class GetChatUserBySocketIdService {
  async execute(socket_id: string) {
    const user = await ChatUser.findOne({
      socket_id
    }).exec()

    return user
  }
}

export { GetChatUserBySocketIdService }
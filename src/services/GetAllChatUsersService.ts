import { ChatUser } from "../schemas/ChatUser";

class GetAllChatUsersServices {
  async execute() {
    const users = await ChatUser.find()

    return users
  }
}

export { GetAllChatUsersServices }
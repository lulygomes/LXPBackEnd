import { ChatUser } from "../schemas/ChatUser";

interface CreateChatUserDTO {
  name: string,
  socket_id: string,
  email: string,
  user_id: string,
}

class CreateChatUserService {
  async execute({ user_id, email, socket_id, name }: CreateChatUserDTO) {
    const userAlreadyExists = await ChatUser.findOne({
      email
    }).exec();

    if (userAlreadyExists) {
      const user = await ChatUser.findOneAndUpdate({
        _id: userAlreadyExists._id,
      }, {
        $set: { socket_id }
      }, {
        new: true
      }).exec()

      return user
    }

    const user = await ChatUser.create({
      email,
      socket_id,
      user_id,
      name
    })

    return user
  }
}

export { CreateChatUserService }
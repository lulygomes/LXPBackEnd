import { ChatMessage } from "../schemas/ChatMessage"

interface CreateMessageDTO {
  from: string,
  text: string,
  roomId: string,
}

class CreateChatMessageService {
  async execute({ from, text, roomId }: CreateMessageDTO) {
    const message = await ChatMessage.create({
      from,
      text,
      roomId
    })

    return message
  }
}

export { CreateChatMessageService }
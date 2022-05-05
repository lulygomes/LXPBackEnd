import { ChatMessage } from "../schemas/ChatMessage";

class GetChatMessagesByChatRoomService {
  async execute(roomId: string) {
    const messages = await ChatMessage.find({
      roomId,
    }).populate('from').exec();
    return messages
  }
}

export { GetChatMessagesByChatRoomService }
import mongoose, { Document, Schema } from "mongoose";
import { ChatUser } from "./ChatUser";
import { v4 as uuid } from 'uuid'

type ChatRoom = Document & {
  idUsers: ChatUser[],
  idChatRoom: string
}

const ChatRoomSchema = new Schema({
  idUsers: [{
    type: Schema.Types.ObjectId,
    ref: "ChatUser",
  }],
  idChatRoom: {
    type: String,
    default: uuid()
  },
})

const ChatRoom = mongoose.model<ChatRoom>("ChatRoom", ChatRoomSchema)

export { ChatRoom }
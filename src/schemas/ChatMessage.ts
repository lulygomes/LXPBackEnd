import mongoose, { Document, Schema } from "mongoose";

type ChatMessage = Document & {
  from: String;
  text: String;
  created_at: Date;
  roomId: String;
}

const ChatMessageSchema = new Schema({
  from: {
    type: Schema.Types.ObjectId,
    ref: "ChatUser"
  },
  text: String,
  created_at: {
    type: Date,
    default: Date.now()
  },
  roomId: {
    type: String,
    ref: "ChatRoom"
  },
})

const ChatMessage = mongoose.model<ChatMessage>("ChatMessages", ChatMessageSchema)

export { ChatMessage }
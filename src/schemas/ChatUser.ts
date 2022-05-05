import mongoose, { Document, Schema } from 'mongoose'

type ChatUser = Document & {
  email: string,
  name: string,
  socket_id: string,
  user_id: string,
}

const ChatUserSchema = new Schema({
  email: String,
  name: String,
  socket_id: String,
  user_id: String,
})

const ChatUser = mongoose.model<ChatUser>("ChatUser", ChatUserSchema)

export { ChatUser } 
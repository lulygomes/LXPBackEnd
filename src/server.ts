import { server } from "./http";
import './websocket/ChatService';

server.listen(3333, () => 'server running on port 3333')


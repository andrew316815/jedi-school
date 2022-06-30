export interface ChatFriend {
  id: number
  username: string
}
export interface MessageItem {
  id: number
  text: string
  sender: ChatFriend
  dest: ChatFriend
  created: string
}
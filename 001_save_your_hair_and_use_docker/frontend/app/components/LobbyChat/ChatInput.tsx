import { Input } from '@ui/input'
import { Button } from '@ui/button'

type ComponentProps = {
  nickName: string
  sendMessage: (msg: string) => void
}

const ChatInput: React.FC<ComponentProps> = ({ nickName, sendMessage }) => {

  const handleSendMessage = (formData: FormData) => {
    const msg = formData.get('message')

    sendMessage(msg as string)
  }

  return (
    <form className='flex gap-1' action={handleSendMessage}>
      <div className='min-w-20 pl-1 bg-gray-950  border-4 border-emerald-600 border-dotted text-emerald-500 font-courier text-sm overflow-x-hidden'>/{nickName ?? 'guest'}</div>
      <Input id='lobby-input' name='message' className='rounded-none focus-visible:ring-0 border-3 border-outset lobby_input-border' placeholder='Say something to the lobby' disabled={!nickName} />
      <Button type='submit' className='rounded-none bg-emerald-700 cursor-pointer border-4 border-outset lobby_button-border' disabled={!nickName}>SEND</Button>
    </form>
  )
}

export default ChatInput
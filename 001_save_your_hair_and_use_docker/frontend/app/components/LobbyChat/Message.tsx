import { getNicknameColor } from '@/app/lib/utils'

type ComponentProps = {
  remitent: string
  message: string
  date: string
}

const Message: React.FC<ComponentProps> = ({ remitent, message, date }) => {
  return (
    <li className="flex gap-2 pl-2 my-2">
      <p className='text-gray-600'>
        [{new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}]
      </p>
      <p>
        {'< '}
        <span style={{ color: getNicknameColor(remitent) }} className='font-bold'>
          {remitent}
        </span>
        {' >'} :
      </p>
      <p className='font-trebuchet text-white'>{message}</p>
    </li>
  )
}

export default Message
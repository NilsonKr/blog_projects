import { useRef } from "react"

import Image from "next/image"

import { Input } from "../ui/input"

type ComponentProps = {
  handleSetNickname: (value: string) => void
}

const EnterNickname: React.FC<ComponentProps> = ({ handleSetNickname }) => {
  const nicknameInput = useRef<HTMLInputElement>(null)

  const handleEnter = (value: string) => {
    handleSetNickname(value)
  }

  return (
    <div className="flex max-w-42 mt-5 mx-auto flex-col gap-2 items-center">

      <Image
        src='/enter-chat.gif'
        alt="chat gif"
        width={200}
        height={24}
      />
      <p>Enter a Nickname</p>

      <form className='text-center' action={() => handleEnter(nicknameInput.current?.value!)}>
        <Input ref={nicknameInput} id='nickname-input' />

        <p className='my-2'>Start chatting</p>

        <button type='submit'>
          <Image
            src='/enter.gif'
            alt='Enter chat'
            width={88}
            height={31}
          />
        </button>
      </form>
    </div>
  )
}

export default EnterNickname
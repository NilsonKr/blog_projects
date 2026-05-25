import Image from "next/image"

import { Input } from "../ui/input"

const EnterNickname = () => {
  return (
    <div className="flex max-w-38 mt-5 mx-auto flex-col gap-2 items-center">
      <p>Enter a Nickname</p>

      <Input id='nickname-input' />

      <p>Start chatting</p>

      <Image
        src='/enter-chat.gif'
        alt="Enter chat gif"
        width={150}
        height={20}
      />
    </div>
  )
}

export default EnterNickname
import Image from 'next/image'

import TitleComponent from '@ui/TitleComponent'

const Header = () => {
  return (
    <div className='relative h-20 w-full mt-4'>
      <div className="absolute inset-0 animate-heading_container_a
              bg-[linear-gradient(90deg,#ff007a,#ff8a00,#fffd6e,#67ff5a,#00e0ff,#b066ff,#ff007a)]">
      </div>
      <div className="absolute inset-0 animate-heading_container_b
              bg-[linear-gradient(90deg,#b066ff,#00e0ff,#67ff5a,#fffd6e,#ff8a00,#ff007a,#b066ff)]">
      </div>

      <div className='relative h-full w-full flex gap-8 items-center justify-center z-10'>
        <Image
          src='/warning.gif'
          alt='Warning'
          width={40}
          height={40}
        />
        <TitleComponent className='retro-heading'>WARNING</TitleComponent>
        <Image
          src='/warning.gif'
          alt='Warning'
          width={40}
          height={40}
        />
      </div>
    </div>
  )
}

export default Header
import Image from 'next/image'

import { Subject } from '@/app/types'

type ComponentProps = {
  subject: Subject
}

const WantedImage: React.FC<ComponentProps> = ({ subject }) => {
  return (
    <div className='relative w-64 aspect-256/280'>
      <div className='absolute top-15 left-13 w-37.5 h-40 overflow-hidden'>
        <Image
          src={subject.pic}
          alt='Wanted'
          fill
          className='object-cover'
        />
      </div>
      <Image
        src='/wanted-frame.png'
        alt='Wanted frame'
        width={256}
        height={280}
        className='relative z-10 pointer-events-none'
      />
      <div className='flex flex-col items-center'>
        <h3 className='font-trebuchet'>{subject.name}</h3>
        <p className='font-courier text-[0.85rem]'>{subject.created_at.toLocaleString('en-CA')}</p>
      </div>
    </div>
  )
}

export default WantedImage

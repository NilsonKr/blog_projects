import Image from 'next/image'


type ComponentProps = {
  href: string
}

const WantedImage: React.FC<ComponentProps> = ({ href }) => {
  return (
    <div className='relative w-64 aspect-256/280'>
      <div className='absolute top-15 left-13 w-37.5 h-40 overflow-hidden'>
        <Image
          src={href}
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
    </div>
  )
}

export default WantedImage

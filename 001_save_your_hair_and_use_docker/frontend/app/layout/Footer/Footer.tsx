import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='mt-12'>
      <div className='relative w-full min-h-10 mb-4'>
        <Image
          src='/footer-divider.png'
          alt='Footer divider'
          fill
        />
      </div>
      <div className='flex gap-2 items-end'>
        <a className='flex mt-4 cursor-pointer' href="https://github.com/nilsonkr" target="_blank" >
          <img width={40} height={40} src="https://text.glitter-graphics.net/flip/r.gif" />
          <img width={40} height={40} src="https://text.glitter-graphics.net/flip/e.gif" />
          <img width={40} height={40} src="https://text.glitter-graphics.net/flip/p.gif" />
          <img width={40} height={40} src="https://text.glitter-graphics.net/flip/o.gif" />
        </a>
        <p>Copyright©️ <a href='https://medium.com/@nilsonkr' target='_blank'>NilsonKr</a></p>
        <p>| code by two paws |</p>
        <Image
          src='/poweredbyautism.png'
          alt='Powered by autism'
          width={88}
          height={31}
        />
      </div>
    </footer>
  )
}

export default Footer

type ComponentProps = {
  symbol: string
}

const WindowButton: React.FC<ComponentProps> = ({ symbol }) => {
  return (
    <div className="flex w-6 h-full  justify-center items-center leading-0 font-extrabold  text-black border-3 border-outset cursor-pointer">
      <span className="-translate-y-0.75 text-shadow-[1.5px_1.5px_1px_#000]"> {symbol}</span>
    </div>
  )
}

export default WindowButton
import Image from 'next/image'

const SmileyDivider = () => {
  return (
    <div className="relative h-6 w-full my-12">
      <Image
        src='/smiley-divider.gif'
        alt="Smiley divider"
        fill
      />
    </div>
  )
}

export default SmileyDivider
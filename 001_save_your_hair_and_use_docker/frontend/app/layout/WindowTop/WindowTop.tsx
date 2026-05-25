import WindowButton from "@components/WindowButton"

const WindowTop = () => {
  return (
    <div className="absolute inset-0 h-8 w-full flex justify-between pl-3 pr-1 py-1 bg-gray-400">
      <p className="text-gray-800">https//:www.medium.com/@nilsonkr/save_your_hair_&_use_docker</p>

      <div className="flex gap-2">
        <WindowButton symbol="_" />
        <WindowButton symbol="◻" />
        <WindowButton symbol="𝗑" />
      </div>
    </div>

  )
}

export default WindowTop


import { fetchSubjects } from "@/app/actions";

import WantedImage from "@components/WantedImage"

const Board = async () => {
  const subjects = await fetchSubjects()
  return (
    <>
      <h2
        className="font-courier text-4xl text-center mt-10 
          text-shadow-[0_6px_2px_#000000,0_10px_3px_#ffc300]">
        Have you seen these guys?
      </h2>
      <p className="font-courier italic text-center mt-2 mb-6">
        Hope not<small>.</small>
      </p>

      <section className="grid grid-cols-2 gap-3">
        {subjects.map((subject) => (
          <WantedImage key={subject.id} subject={subject} />
        ))}
      </section>
    </>
  )
}

export default Board
import Image from "next/image";

import { fetchSubjects } from "./actions";

import Header from '@layout/Header'
import WantedImage from "./layout/WantedImage";
import LobbyChat from '@components/LobbyChat'

export default async function Home() {
  const subjects = await fetchSubjects()

  return (
    <div className="bg-[url('/background.svg')] bg-size-[250px] bg-default flex flex-col min-h-screen items-center ">
      <main className="w-2xl">
        <Header />
        <section className="min-h-150 w-full mt-4 py-8 px-12 border-5 border-groove bg-[#2a006b]">
          <h2
            className="font-courier text-4xl text-center  
          text-shadow-[0_6px_2px_#000000,0_10px_3px_#ffc300]">
            Have you seen these guys?
          </h2>
          <p className="font-courier italic text-center mt-2 mb-6">
            Hope not
          </p>

          <section className="grid grid-cols-2 gap-3">
            <WantedImage href="/pic.jpeg" />
            <WantedImage href="https://i.ytimg.com/vi/_-rUQoVD2X0/maxresdefault.jpg" />
            <WantedImage href="https://preview.redd.it/some-more-photos-of-my-goofy-pets-v0-458tjklctzsb1.jpg?width=640&crop=smart&auto=webp&s=ce8cb39a10912bda08dc14fd599a99c116f3351a" />
            <WantedImage href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyeMfhgcZhXcteFc3MUX5LDkS3smGiBxX2rw&s" />
          </section>

          <div className=" relative h-6 w-full">
            <Image
              src='/smiley-divider.gif'
              alt="Smiley divider"
              fill
            />
          </div>
        </section>
      </main>
      {/* <LobbyChat /> */}
    </div>
  );
}

export const dynamic = 'force-dynamic'
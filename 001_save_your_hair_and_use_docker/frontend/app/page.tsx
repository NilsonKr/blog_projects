import Image from "next/image";

import { fetchSubjects } from "./actions";

import LobbyChat from './components/LobbyChat'

export default async function Home() {
  const subjects = await fetchSubjects()

  return (
    <div className="bg-[url('/background.svg')] bg-size-[250px] bg-default flex flex-col flex-1 items-center justify-center font-sans dark:bg-black">
      <main className="py-32 px-16">
        <LobbyChat />
        <h2 className="font-impact">
          WARNING
        </h2>
      </main>
    </div>
  );
}

export const dynamic = 'force-dynamic'
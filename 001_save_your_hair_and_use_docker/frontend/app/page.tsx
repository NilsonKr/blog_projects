import { fetchSubjects } from "./actions";

import Header from '@layout/Header'
import LobbyChat from '@components/LobbyChat'

export default async function Home() {
  const subjects = await fetchSubjects()

  return (
    <div className="bg-[url('/background.svg')] bg-size-[250px] bg-default flex flex-col min-h-screen items-center ">
      <main className="py-4 px-16">
        <Header />
        <LobbyChat />
        <h2 className="font-impact">
          WARNING
        </h2>
      </main>
    </div>
  );
}

export const dynamic = 'force-dynamic'
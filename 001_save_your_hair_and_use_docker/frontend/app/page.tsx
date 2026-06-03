import Header from '@layout/Header'
import WindowTop from "./layout/WindowTop";
import Board from "@layout/Board";
import SmileyDivider from '@components/SmileyDivider';
import LobbyChat from '@layout/LobbyChat'
import Footer from "@layout/Footer";

export default async function Home() {
  return (
    <div className="bg-[url('/background.svg')] bg-size-[250px] bg-repeat bg-fixed flex flex-col items-center ">
      <main className="w-2xl">
        <Header />
        <section className="relative w-full mt-4 py-8 px-12 border-5 border-groove bg-[#2a006b]">
          <WindowTop />
          <Board />
          <SmileyDivider />
          <LobbyChat />
          <Footer />
        </section>
      </main>
    </div>
  );
}
import { Header } from "./category/Header";
import { Hero } from "./category/Hero";
import { TeamIntro } from "./category/TeamIntro";
import { TeamRoster } from "./category/TeamRoster";
import { Gallery } from "./category/Gallery";
import { Board } from "./category/Board";
import { JoinApplication } from "./category/JoinApplication";
import { Contact } from "./category/Contact";
import { Footer } from "./category/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TeamIntro />
        <TeamRoster />
        <Gallery />
        <Board />
        <JoinApplication />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
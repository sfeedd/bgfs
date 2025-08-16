import { Header } from "./list/category/Header";
import { Hero } from "./list/category/Hero";
import { TeamIntro } from "./list/category/TeamIntro";
import { TeamRoster } from "./list/category/TeamRoster";
import { Gallery } from "./list/category/Gallery";
import { Board } from "./list/category/Board";
import { JoinApplication } from "./list/category/JoinApplication";
import { Contact } from "./list/category/Contact";
import { Footer } from "./list/category/Footer";

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
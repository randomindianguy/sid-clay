import Hero from "./components/Hero";
import Diagnosis from "./components/Diagnosis";
import Drafts from "./components/Drafts";
import Prototype from "./components/Prototype";
import Hypothesis from "./components/Hypothesis";
import Risks from "./components/Risks";
import Plan from "./components/Plan";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Diagnosis />
      <Drafts />
      <Prototype />
      <Hypothesis />
      <Risks />
      <Plan />
      <About />
      <Footer />
    </main>
  );
}

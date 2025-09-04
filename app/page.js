import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sale from "./components/Sale";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
        <section className="relative h-screen bg-cover bg-center text-white bg-[url('/images/banner-background.png')]">
        <Navbar />
        <Hero />
      </section>

      {/* Sale Section */}
      <section>
        <Sale />
      </section>

    {/* Footer */}
      <Footer />
  
    </main>
  );
}

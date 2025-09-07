// app/page.jsx (or Home.jsx)
import Hero from "./components/Hero";
import Sale from "./components/Sale";


export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center text-white bg-[url('/images/banner-background.png')]">
        <Hero />
      </section>

      {/* Sale Section */}
      <section>
        <Sale />
      </section>


    </main>
  );
}

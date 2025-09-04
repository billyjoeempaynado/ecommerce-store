import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard"

export default function Shop () {
    return (
        <main>
            <section>
                <Navbar />
            </section>
            <section>
                <ProductCard />
            </section>
        </main>
    );
}
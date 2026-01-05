import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="bg-purple-800 text-white py-24 text-center">
        <h1 className="text-5xl font-bold">Rejigprocess Technology</h1>
        <p className="mt-4">
          Software Development • Consulting • Training
        </p>
      </section>

      <section className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-purple-800">About Us</h2>
        <p className="mt-4">
          Rejigprocess Technology is a Nigerian-based software development,
          consulting, and training company.
        </p>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-purple-800">Contact Us</h2>
        <ContactForm />
      </section>

      <Footer />
    </>
  );
}

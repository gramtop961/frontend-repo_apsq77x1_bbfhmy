import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <div id="doctors">
          <Doctors />
        </div>
        <Services />
        <div id="contact">
          <Contact />
        </div>
      </main>
      <footer className="border-t border-slate-200 py-10">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-slate-600">
          © {new Date().getFullYear()} Skyline General Hospital. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;

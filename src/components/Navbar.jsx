import { Hospital, Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-600 text-white">
            <Hospital className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-slate-900">Skyline Hospital</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-700 sm:flex">
          <a href="#services" className="hover:text-slate-900">Services</a>
          <a href="#appointment" className="hover:text-slate-900">Appointment</a>
        </nav>
        <a href="#appointment" className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-3 py-2 text-sm font-medium text-white hover:bg-sky-700">
          <Phone className="h-4 w-4" /> Call now
        </a>
      </div>
    </header>
  );
}

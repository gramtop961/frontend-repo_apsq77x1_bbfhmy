import { Hospital, Shield, Phone, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-sky-100 blur-3xl" />
        <div className="absolute bottom-0 -left-24 h-72 w-72 rounded-full bg-cyan-100 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 lg:flex lg:items-center lg:gap-12 lg:pt-24 lg:pb-20">
        <div className="relative z-10 mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm text-sky-700 ring-1 ring-sky-200 backdrop-blur">
            <Shield className="h-4 w-4" />
            Accredited Care You Can Trust
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Compassionate care, modern medicine
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Skyline General Hospital offers world‑class medical services with a patient‑first approach. From emergency care to specialized clinics, we are here for you 24/7.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-start">
            <a
              href="#appointment"
              className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-3 text-white shadow-sm transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              <Phone className="mr-2 h-5 w-5" /> Book an appointment
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sky-700 ring-1 ring-sky-200 transition hover:bg-sky-50"
            >
              <Hospital className="mr-2 h-5 w-5" /> Explore services
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-600 lg:justify-start">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-sky-600" />
              123 Health Ave, River City
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-sky-600" />
              (555) 012-3456
            </div>
          </div>
        </div>

        <div className="relative mt-12 flex-1 lg:mt-0">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1600&auto=format&fit=crop"
              alt="Modern hospital interior"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

import { User, Star } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. Amelia Warren',
    specialty: 'Cardiologist',
    rating: 4.9,
    img: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=1600&auto=format&fit=crop'
  },
  {
    name: 'Dr. Lucas Patel',
    specialty: 'Orthopedic Surgeon',
    rating: 4.8,
    img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1600&auto=format&fit=crop'
  },
  {
    name: 'Dr. Naomi Chen',
    specialty: 'Pediatrician',
    rating: 5.0,
    img: 'https://images.unsplash.com/photo-1555435029-1ab1d0cd80b4?q=80&w=1600&auto=format&fit=crop'
  }
];

export default function Doctors() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Meet Our Specialists</h2>
          <p className="mt-3 text-slate-600">Experienced physicians dedicated to your health and well-being.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doc) => (
            <div key={doc.name} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={doc.img} alt={doc.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{doc.name}</h3>
                    <p className="text-sky-700">{doc.specialty}</p>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="h-5 w-5 fill-amber-400" />
                    <span className="text-sm font-medium text-slate-700">{doc.rating}</span>
                  </div>
                </div>
                <button className="mt-4 inline-flex items-center rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700">Book consultation</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

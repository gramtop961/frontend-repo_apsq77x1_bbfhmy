import { Stethoscope, HeartPulse, Baby, Activity, Ambulance } from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: 'Primary Care',
    desc: 'Comprehensive family medicine and preventive care for all ages.'
  },
  {
    icon: HeartPulse,
    title: 'Cardiology',
    desc: 'Advanced heart diagnostics, interventions, and rehabilitation.'
  },
  {
    icon: Baby,
    title: 'Maternity',
    desc: 'Compassionate prenatal, delivery, and postnatal care.'
  },
  {
    icon: Activity,
    title: 'Orthopedics',
    desc: 'Sports injuries, joint replacement, and physical therapy.'
  },
  {
    icon: Ambulance,
    title: '24/7 Emergency',
    desc: 'Rapid emergency response with modern trauma facilities.'
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Medical Services</h2>
          <p className="mt-3 text-slate-600">Expert care across a wide range of specialties with a patient-first approach.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600">{desc}</p>
              <button className="mt-4 text-sm font-medium text-sky-700 hover:text-sky-900">Learn more →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

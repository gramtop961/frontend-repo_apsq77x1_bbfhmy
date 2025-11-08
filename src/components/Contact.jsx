import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="appointment" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Get in touch</h2>
            <p className="mt-3 text-slate-600">We’re here to answer questions and help you schedule your visit.</p>

            <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-lg bg-slate-50 p-5 ring-1 ring-slate-200">
                <Phone className="mt-0.5 h-5 w-5 text-sky-600" />
                <div>
                  <dt className="text-sm font-medium text-slate-900">Phone</dt>
                  <dd className="text-slate-600">(555) 012-3456</dd>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg bg-slate-50 p-5 ring-1 ring-slate-200">
                <Mail className="mt-0.5 h-5 w-5 text-sky-600" />
                <div>
                  <dt className="text-sm font-medium text-slate-900">Email</dt>
                  <dd className="text-slate-600">care@skylinehospital.com</dd>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg bg-slate-50 p-5 ring-1 ring-slate-200">
                <MapPin className="mt-0.5 h-5 w-5 text-sky-600" />
                <div>
                  <dt className="text-sm font-medium text-slate-900">Address</dt>
                  <dd className="text-slate-600">123 Health Ave, River City</dd>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg bg-slate-50 p-5 ring-1 ring-slate-200">
                <Clock className="mt-0.5 h-5 w-5 text-sky-600" />
                <div>
                  <dt className="text-sm font-medium text-slate-900">Hours</dt>
                  <dd className="text-slate-600">Open 24/7 (clinics 8am–6pm)</dd>
                </div>
              </div>
            </dl>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <form className="grid gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Full name</label>
                <input type="text" className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500" placeholder="Jane Doe" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
                  <input type="email" className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Phone</label>
                  <input type="tel" className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500" placeholder="(555) 000-0000" />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Department</label>
                <select className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500">
                  <option>Primary Care</option>
                  <option>Cardiology</option>
                  <option>Maternity</option>
                  <option>Orthopedics</option>
                  <option>Emergency</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Message</label>
                <textarea rows="4" className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500" placeholder="How can we help?" />
              </div>
              <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-lg bg-sky-600 px-4 py-2 font-medium text-white hover:bg-sky-700">Request appointment</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

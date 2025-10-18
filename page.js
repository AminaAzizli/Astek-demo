import Header from "../_components/Header";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-100 pt-28 pb-12">
        <div className="w-full px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-[2fr,3fr] gap-12 items-start">
            {/* Left column: contact info */}
            <section className="space-y-6">
              <button className="inline-flex items-center px-4 py-2 rounded-full bg-gray-200 text-sm font-medium text-gray-700">
                Get In Touch
              </button>

              <div>
                <h2 className="text-xl font-semibold text-gray-900">Let&apos;s Collaborate on Research</h2>
                <p className="mt-2 text-gray-400">Whether you&apos;re a researcher, developer, or institution interested in our platform, we&apos;d love to hear from you. Let&apos;s work together to advance software research.</p>
              </div>

              <div className="mt-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-gray-200 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                </svg>

                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Email</h4>
                  <p className="text-sm text-gray-600">contact@artifactcompare.research</p>
                </div>
              </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-200 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>

                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Phone</h4>
                    <p className="text-sm text-gray-600">+90 (531) xxx-xx-xx</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-200 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>

                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Address</h4>
                    <p className="text-sm text-gray-600">
                    Astek Team – CS319 Project<br />
                    Department of Computer Science<br />
                    Bilkent University, Ankara, Türkiye
                  </p>

                  </div>
                </div>
                
              </div>

              {<div className="mt-6">
              <img
                src="/contact-team.jpg"
                alt="Team working together"
                className="w-full md:w-8/9 rounded-lg shadow-md"
              />
            </div>
            }
            </section>

            {/* Right column: contact form */}
            <aside>
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Send Us a Message</h3>

                <form className="mt-4 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-700">First Name</label>
                      <input type="text" placeholder="John" className="mt-1 block w-full rounded-md border-gray-200 bg-gray-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700">Last Name</label>
                      <input type="text" placeholder="Doe" className="mt-1 block w-full rounded-md border-gray-200 bg-gray-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700">Email Address</label>
                    <input type="email" placeholder="john.doe@university.edu" className="mt-1 block w-full rounded-md border-gray-200 bg-gray-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700">Organization / Institution</label>
                    <input type="text" placeholder="University Name" className="mt-1 block w-full rounded-md border-gray-200 bg-gray-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700">Message</label>
                    <textarea rows={4} placeholder="Tell us about your research interests or how we can help..." className="mt-1 block w-full rounded-md border-gray-200 bg-gray-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
                  </div>

                  <div className="pt-2">
                    <button type="button" className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-blue-900 text-white px-4 py-3 text-sm font-medium hover:bg-blue-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}

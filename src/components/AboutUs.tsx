export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F6F1FF] py-20 md:py-28"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#7d4cff]/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#78ffb7]/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mac style top bar */}
        <div className="mb-8 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#7d4cff]/20 bg-white/70 backdrop-blur px-4 py-2 mb-6 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#78ffb7]" />
              <span className="text-sm font-semibold text-[#5b34d6]">
                About Our Company
              </span>
            </div>

            <h2 className="font-syne font-bold text-4xl md:text-6xl leading-tight text-[#151515] max-w-xl">
              Building scalable digital products with modern technology.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-600 max-w-xl">
              We create high-performance software experiences focused on
              scalability, design and business growth for modern companies.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-10 max-w-lg">
              <div className="rounded-3xl bg-white border border-black/5 p-6 shadow-[0_10px_40px_rgba(124,58,237,0.08)]">
                <div className="text-3xl font-bold text-[#5b34d6]">50+</div>
                <div className="mt-2 text-sm text-gray-500 font-medium">
                  Projects Delivered
                </div>
              </div>

              <div className="rounded-3xl bg-[#1B1325] border border-white/10 p-6 shadow-2xl">
                <div className="text-3xl font-bold text-[#78ffb7]">24/7</div>
                <div className="mt-2 text-sm text-gray-400 font-medium">
                  Technical Support
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="rounded-[32px] border border-[#7d4cff]/15 bg-white/80 backdrop-blur-xl p-8 shadow-[0_20px_80px_rgba(91,52,214,0.12)]">
              {/* Window header */}
              <div className="flex items-center justify-between border-b border-black/5 pb-5 mb-8">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>

                <div className="text-sm font-semibold text-gray-400">
                  Company Overview
                </div>
              </div>

              <div className="space-y-8">
                <div className="rounded-2xl border border-[#7d4cff]/10 bg-[#faf7ff] p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#5b34d6] flex items-center justify-center shadow-lg">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900">
                      Innovation First
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    Our vision is to become the trusted technology partner for
                    companies across all industries, developing innovative
                    software that helps brands unlock their digital potential.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#78ffb7]/20 bg-[#0f1720] p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#78ffb7] flex items-center justify-center shadow-lg">
                      <svg
                        className="w-5 h-5 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 17v-2a4 4 0 014-4h8"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l8 8-8 8"
                        />
                      </svg>
                    </div>

                    <h3 className="text-xl font-semibold text-white">
                      Growth Focused
                    </h3>
                  </div>

                  <p className="text-gray-400 leading-relaxed">
                    We measure our success through the success of our clients,
                    supporting them at every stage with scalable systems,
                    automation and modern digital experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="hidden md:block absolute -bottom-8 -left-8 rounded-3xl border border-black/5 bg-white shadow-2xl p-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#ff6b3d] flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33h.09A1.65 1.65 0 0010 3.09V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51h.09a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.09A1.65 1.65 0 0020.91 10H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z"
                    />
                  </svg>
                </div>

                <div>
                  <div className="text-sm text-gray-500 font-medium">
                    Performance
                  </div>

                  <div className="text-2xl font-bold text-gray-900">
                    99.9%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
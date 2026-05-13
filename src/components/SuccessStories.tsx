export default function SuccessStories() {
  const stories = [
    {
      title: "Scalable ERP System for Manufacturing",
      description: "Fragmented production processes and inventories.",
    },
    {
      title: "Mobile App for Real-Time Logistics",
      description: "No traceability of deliveries or real-time location.",
    },
    {
      title: "Personalized E-Commerce with AI",
      description: "Low conversion rate and high cart abandonment.",
    },
  ];

  return (
    <section className="bg-gray-800 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-3 h-3 rounded-full bg-[#ff5c4d]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>

          <h2 className="font-syne font-semibold text-4xl md:text-5xl text-white leading-tight">
            Success Stories
          </h2>
        </div>

        {/* Stories */}
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden">
          {stories.map((story, index) => (
            <div
              key={index}
              className={`group grid md:grid-cols-[1.2fr_1fr_auto] gap-8 items-center px-8 py-8 transition-all duration-300 hover:bg-white/[0.04] ${
                index !== stories.length - 1
                  ? "border-b border-white/10"
                  : ""
              }`}
            >
              {/* Left */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-white/5 border border-white/10 text-sm font-semibold text-coral">
                    0{index + 1}
                  </div>

                  <div className="h-px flex-1 bg-white/10" />
                </div>

                <h3 className="font-syne font-semibold text-xl md:text-2xl text-white leading-snug max-w-md">
                  {story.title}
                </h3>
              </div>

              {/* Center */}
              <div>
                <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                  {story.description}
                </p>
              </div>

              {/* Right */}
              <div className="flex justify-start md:justify-end">
                <button className="group/button flex items-center justify-center w-14 h-14 rounded-2xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-coral hover:border-coral">
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
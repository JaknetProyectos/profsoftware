export default function WorkProcess() {
  const steps = [
    {
      number: "01",
      title: "Analysis",
      description: "We identify needs and key areas.",
    },
    {
      number: "02",
      title: "Design",
      description: "We created the solution architecture.",
    },
    {
      number: "03",
      title: "Development",
      description: "We build custom software.",
    },
    {
      number: "04",
      title: "Optimization",
      description: "We improved performance and scalability.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0f1720] py-20 md:py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#7dd3fc] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#c084fc] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>

          <h2 className="font-syne font-semibold text-4xl md:text-5xl text-white">
            Work Process
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="hidden md:block absolute top-14 left-0 w-full h-px bg-white/10" />

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Number */}
                <div className="relative z-10 flex items-center justify-center md:justify-start mb-6">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                    <span className="font-syne font-semibold text-sm text-white">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05] hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-white/10 blur-3xl" />
                  </div>

                  <div className="relative z-10">
                    <h3 className="font-syne font-semibold text-2xl text-white mb-4">
                      {step.title}
                    </h3>

                    <p className="text-[#94a3b8] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
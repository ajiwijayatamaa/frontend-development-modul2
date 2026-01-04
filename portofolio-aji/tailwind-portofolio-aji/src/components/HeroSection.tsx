const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center overflow-hidden bg-black md:flex-row">
      {/* SISI KIRI */}
      <div className="flex h-1/2 w-full flex-col justify-center border-r border-white/5 px-8 md:h-full md:w-1/2 md:px-16">
        <p className="mb-2 font-mono tracking-tighter text-blue-500 uppercase">
          // Junior Web Developer
        </p>
        <h1 className="text-6xl leading-none font-black tracking-tighter text-white md:text-[120px] lg:text-[130px]">
          HELLO<span className="text-blue-600">.</span>
        </h1>
        <h1 className="text-6xl leading-none font-black tracking-tighter text-white md:text-[120px] lg:text-[135px]">
          I'M <span className="text-neutral-800">Junior Web Development</span>
        </h1>
      </div>

      {/* SISI KANAN */}
      <div className="flex h-1/2 w-full flex-col justify-center bg-neutral-950 px-8 md:h-full md:w-1/2 md:px-20">
        <div className="max-w-md">
          <p className="mb-8 text-xl leading-relaxed text-gray-400">
            A junior web developer focused on continuous learning and building
            <span className="ml-1 font-semibold text-white italic underline decoration-blue-500">
              functional, accessible web experiences.
            </span>
          </p>

          <div className="group flex flex-col gap-6">
            <a
              href="#contact"
              className="group flex items-center justify-between border-b border-white/20 pb-4 text-2xl font-bold text-white transition-all hover:border-blue-500"
            >
              <span>Check out my journey !</span>
              <span className="transition-transform group-hover:translate-x-2">
                →
              </span>
            </a>
            <a
              href="#projects"
              className="group flex items-center justify-between border-b border-white/20 pb-4 text-2xl font-bold text-white transition-all hover:border-blue-500"
            >
              <span>Selected Projects</span>
              <span className="transition-transform group-hover:translate-x-2">
                →
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Dekorasi Background - Agar tidak flat */}
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-600/10 blur-[100px]"></div>
    </section>
  );
};

export default HeroSection;

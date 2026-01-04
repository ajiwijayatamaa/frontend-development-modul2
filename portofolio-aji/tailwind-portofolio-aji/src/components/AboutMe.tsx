import AvatarImg from "../assets/avatar.jpeg";

const AboutMe = () => {
  return (
    <section id="about" className="bg-[#0a0a0a] px-6 py-24 text-white">
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
        {/* Box Dekoratif untuk Foto */}
        <div className="group relative">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-25 blur transition duration-1000 group-hover:opacity-50"></div>
          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gray-900">
            <span className="text-gray-500 italic">
              <img src={AvatarImg} alt="avatar" />
            </span>
          </div>
        </div>

        <div>
          <h2 className="mb-6 text-3xl font-bold italic">01. About Me</h2>
          <p className="mb-4 leading-relaxed text-gray-400">
            Fresh graduate Information Systems with hands-on experience in
            website development Strong interest in web development.
          </p>
          <p className="leading-relaxed text-gray-400">
            My current focus is mastering{" "}
            <span className="text-blue-400">React.js</span> and{" "}
            <span className="text-blue-400">Tailwind CSS</span> to create
            interfaces that are not only visually appealing but also
            high-performing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

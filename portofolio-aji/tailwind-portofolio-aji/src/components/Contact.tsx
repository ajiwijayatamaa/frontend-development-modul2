const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#0a0a0a] px-6 py-24 text-center text-white"
    >
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-4 text-4xl font-bold">Let’s Connect!</h2>
        <p className="mb-10 text-gray-400">
          I’m currently looking for my first job opportunity or freelance
          projects. Feel free to reach out if you have any questions or just
          want to say hello.
        </p>
        <a
          href="mailto:emailkamu@gmail.com"
          className="inline-block rounded-full bg-blue-600 px-10 py-4 font-bold transition-transform hover:scale-105 hover:bg-blue-500"
        >
          Send Email
        </a>

        <div className="mt-12 flex justify-center gap-6 text-gray-400">
          <a
            href="https://www.linkedin.com/in/ajiwijayatama/"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ajiwijayatamaa"
            className="transition hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

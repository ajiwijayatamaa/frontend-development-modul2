import { HiChevronRight } from "react-icons/hi";

const Jumbotron = () => {
  return (
    <div className="bg-[#080808] text-white">
      <div className="container mx-auto grid grid-cols-1 gap-10 p-4 md:h-[65vh] md:grid-cols-2 md:gap-24">
        {/* KOLOM KIRI */}
        <div className="order-2 flex flex-col items-center justify-center gap-4 md:order-1 md:items-start">
          <h1 className="text-4xl font-bold">Your Name Here</h1>
          <p className="font-mono">
            Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="flex w-full items-center justify-center gap-2 border border-green-500 bg-green-600 px-10 py-4 md:w-fit">
            Let’s get started <HiChevronRight />
          </button>
        </div>

        {/* KOLOM KANAN */}
        <div className="order-1 flex items-center justify-center md:order-2">
          <img
            src="/thumbnail.png"
            alt="thumbnail"
            className="p rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;

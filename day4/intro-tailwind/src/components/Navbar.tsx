import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="bg-[#080808]">
      {/* DESKTOP */}
      <div className="container mx-auto hidden justify-between rounded-b-xl bg-[#1B1B1B] p-4 text-white md:flex">
        <a href="">Home</a>
        <a href="">Case Studies</a>
        <a href="">Testimonials</a>
        <a href="">Recent Work</a>
        <a href="">Get In Touch</a>
      </div>

      {/* MOBILE */}
      <div className="flex items-center justify-between p-4 text-white md:hidden">
        <p className="text-2xl">Logo</p>
        <HiMenu className="text-2xl" />
      </div>
    </div>
  );
};

export default Navbar;

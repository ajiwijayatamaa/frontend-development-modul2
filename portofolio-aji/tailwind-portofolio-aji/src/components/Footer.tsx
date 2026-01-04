const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-black py-8 text-center">
      <p className="text-sm text-gray-500">
        Dibuat dengan ❤️ oleh{" "}
        <span className="font-medium text-white">Nama Kamu</span>
        &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;

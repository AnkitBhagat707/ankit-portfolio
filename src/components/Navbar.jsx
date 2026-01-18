const Navbar = () => {
  return (
    <nav className="w-full px-8 py-4 flex justify-between items-center border-b">
      <h1 className="text-xl font-bold"> ANKIT </h1>

      <div className="space-x-6 text-sm font-medium">
        <a href="#about" className="font-bold hover:text-blue-600">About</a>
        <a href="#skills" className="font-bold hover:text-blue-600">Skills</a>
        <a href="#projects" className="font-bold hover:text-blue-600">Projects</a>
        <a href="#contact" className="font-bold hover:text-blue-600">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;

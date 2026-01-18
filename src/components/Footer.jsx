const Footer = () => {
  return (
    <footer className="w-full border-t mt-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8 py-12 grid md:grid-cols-3 gap-8 items-center">

        {/* Branding */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-gray-900">Ankit Raj</h3>
          <p className="text-gray-600 mt-1">Full Stack Developer</p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-8 text-gray-600 font-medium">
          <a
            href="https://www.linkedin.com/in/ankit-raj-962b14298/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/AnkitBhagat707"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            GitHub
          </a>

          <a
            href="mailto:ankitbhagat707@gmail.com"
            className="hover:text-blue-600 transition"
          >
            Email
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Ankit Raj</p>
          <p className="mt-1">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

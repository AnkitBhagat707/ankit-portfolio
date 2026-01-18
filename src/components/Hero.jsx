
import profileImage from "../assets/profile.jpg";




const Hero = () => {
  return (
    <section className="w-full px-8 py-20 flex flex-col md:flex-row items-center justify-between">
      
      {/* Left Content */}
      <div className="max-w-xl">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Hi, I'm <span className="text-blue-600">Ankit Raj</span>
        </h2>

        <p className="mt-4 text-xl text-gray-600">
          Full Stack Developer building clean and scalable web applications.
        </p>

        <p className="mt-4 text-gray-500">
          I love building modern web products that solve real-world problems.
        </p>

        <div className="mt-8 flex space-x-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Contact Me
          </a>

          <a
  href="/resume.pdf"
  download
  className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
>
  Download Resume
</a>

        </div>
      </div>

      {/* Right Placeholder */}
      <img
  src={profileImage}
  alt="Ankit Raj"
  className="mt-12 md:mt-0 w-64 h-64 object-cover rounded-full shadow-lg"
/>


    </section>
  );
};

export default Hero;

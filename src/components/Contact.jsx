const Contact = () => {
  return (
    <section id="contact" className="w-full px-8 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>

        <p className="text-gray-600 text-lg mb-10">
          I'm always open to discussing new opportunities, projects, or collaborations.
          Feel free to reach out if you'd like to work together.
        </p>

        <div className="flex flex-col items-center space-y-4 mb-10">
          <p className="text-lg">
            📧 <span className="font-medium">ankitbhagat707@gmail.com</span>
          </p>

          <p className="text-lg">
            💼{" "}
            <a
              href="https://www.linkedin.com/in/ankit-raj-962b14298/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-600 hover:underline"
            >
              linkedin.com/in/ankit-raj-962b14298
            </a>
          </p>

          <p className="text-lg">
            🐙{" "}
            <a
              href="https://github.com/AnkitBhagat707"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-600 hover:underline"
            >
              github.com/AnkitBhagat707
            </a>
          </p>
        </div>

        <a
          href="mailto:ankitbhagat707@gmail.com"
          className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Contact;

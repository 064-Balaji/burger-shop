const Contact = () => {
  return (
    <div className="bg-[#f1e8d4] min-h-screen flex flex-col items-center justify-center p-10">
      <div className="max-w-4xl w-full mx-auto">
        <h1 className="text-4xl font-bold text-red-600 text-center mb-4">Contact Us</h1>
        <p className="text-gray-700 text-center text-lg mb-8">
          We'd love to hear from you! Fill out the form below to get in touch.
        </p>
        
        <form className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto">
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent"
              placeholder="Your Name"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent"
              placeholder="Your Email"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">
              Message:
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
          >
            Send Message
          </button>
        </form>
        
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Other Ways to Reach Us</h2>
          <div className="space-y-2">
            <p className="text-gray-700">
              Email: <a href="mailto:contact@burgeee.com" className="text-red-600 hover:text-red-700">contact@burgeee.com</a>
            </p>
            <p className="text-gray-700">
              Phone: <span className="text-red-600">(123) 456-7890</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

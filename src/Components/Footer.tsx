const NavBar = () => {
  return (
    <footer className="bg-black text-white font-semibold shadow-lg px-10 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-left">
          <h2 className="text-3xl font-bold mb-2">Burgeee</h2>
          <p className="mb-4 text-lg italic">Delicious Burgers Made with Love!</p>
        </div>
        <div className="flex space-x-8">
          <a href="/about" className="hover:underline hover:text-green-400 transition duration-200">About Us</a>
          <a href="/menu" className="hover:underline hover:text-green-400 transition duration-200">Menu</a>
          <a href="/contact" className="hover:underline hover:text-green-400 transition duration-200">Contact Us</a>
          <a href="/custom-order" className="hover:underline hover:text-green-400 transition duration-200">Custom Order</a>
        </div>
      </div>
      <div className="text-center mt-4 text-sm">
        &copy; {new Date().getFullYear()} Burgeee. All rights reserved.
      </div>
    </footer>
  );
};

export default NavBar;

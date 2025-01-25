import { Button } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Custom Burgers",
      description: "Create your perfect burger with our build-your-own option",
      icon: "🍔",
      link: "/custom"
    },
    {
      title: "Quick Delivery",
      description: "Fast and reliable delivery to your doorstep",
      icon: "🚚",
      link: "/delivery"
    },
    {
      title: "Fresh Ingredients",
      description: "Quality ingredients sourced from local suppliers",
      icon: "🥬",
      link: "/about"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1550317138-10000687a72b"
            alt="Hero burger"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-red-600 mb-6"
          >
            Burger Bliss
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 mb-8"
          >
            Crafting the Perfect Burger Experience
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            <Button 
              onClick={() => navigate('/burger-builder')}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg"
            >
              Create Your Burger
            </Button>
            <Button 
              onClick={() => navigate('/menu')}
              className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-full text-lg"
            >
              View Menu
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                onClick={() => navigate(feature.link)}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience Burger Bliss?
          </h2>
          <p className="text-xl mb-8">
            Join us for an unforgettable culinary journey
          </p>
          <Button 
            onClick={() => navigate('/contact')}
            className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg"
          >
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;

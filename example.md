import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, Heart, BedDouble, Bath, Square, 
  ArrowRight, Star, CheckCircle, Calculator, 
  MessageSquare, Facebook, Twitter, Instagram, Linkedin,
  Menu, X, MapPin, Home, Building
} from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-2xl tracking-tight text-navy">FloHomes</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {['Sell', 'Buy', 'Rent', 'Find agent', 'Manage rentals', 'Advertise'].map((item) => (
              <a key={item} href="#" className="text-sm font-medium text-gray-600 hover:text-accent transition-colors">
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-sm font-medium text-navy hover:text-accent transition-colors px-4 py-2">
              Sign In
            </button>
            <button className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm">
              List Property
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-navy">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-4 space-y-1 shadow-lg">
          {['Sell', 'Buy', 'Rent', 'Find agent', 'Manage rentals', 'Advertise'].map((item) => (
            <a key={item} href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-accent hover:bg-gray-50 rounded-md">
              {item}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-2">
            <button className="w-full text-center text-sm font-medium text-navy hover:text-accent transition-colors px-4 py-2 border border-gray-200 rounded-full">
              Sign In
            </button>
            <button className="w-full bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm">
              List Property
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-4xl mx-auto mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold text-navy tracking-tight mb-8"
        >
          Find your home
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-full p-2 shadow-xl shadow-navy/5 flex flex-col sm:flex-row items-center max-w-3xl mx-auto border border-gray-100"
        >
          <div className="flex w-full sm:w-auto px-4 py-2 sm:py-0 border-b sm:border-b-0 sm:border-r border-gray-100 gap-4">
            {['Buy', 'Rent', 'Sell', 'Home Value'].map((tab, i) => (
              <button key={tab} className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${i === 0 ? 'bg-navy text-white' : 'text-gray-500 hover:text-navy'}`}>
                {tab}
              </button>
            ))}
          </div>
          <div className="flex-1 flex items-center w-full px-4 py-2 sm:py-0">
            <Search className="w-5 h-5 text-gray-400 mr-3" />
            <input 
              type="text" 
              placeholder="Search Address, City, Postcode, Agent" 
              className="w-full bg-transparent border-none focus:ring-0 text-navy placeholder-gray-400 text-sm outline-none"
            />
          </div>
          <button className="w-full sm:w-auto bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-full text-sm font-medium transition-colors flex items-center justify-center gap-2 mt-2 sm:mt-0">
            <Search className="w-4 h-4" /> Find out
          </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative rounded-3xl overflow-hidden h-[400px] md:h-[500px] shadow-2xl"
      >
        <img 
          src="https://picsum.photos/seed/modernhome/1920/1080" 
          alt="Modern Home Architecture" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </motion.div>

      <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-8 px-4">
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}
          </div>
          <div>
            <div className="flex items-center gap-2 font-bold text-navy">
              <CheckCircle className="w-5 h-5 text-emerald-500" /> Trustpilot
            </div>
            <p className="text-xs text-gray-500">Excellent. 10,000+ reviews</p>
          </div>
        </div>
        
        <div className="max-w-xl text-center md:text-right">
          <p className="text-lg md:text-xl font-medium text-navy italic">
            "FloHomes is just amazing, selling a house has never been easier like FloHomes."
          </p>
          <p className="text-sm text-gray-500 mt-2">— Arthur J.</p>
        </div>
      </div>
    </section>
  );
};

const PropertyCard = ({ image, price, oldPrice, type, address, beds, baths, sqft, featured, specialOffer }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group cursor-pointer"
  >
    <div className="relative h-64 overflow-hidden">
      <img 
        src={image} 
        alt={address} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        referrerPolicy="no-referrer"
      />
      <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white text-gray-600 hover:text-accent transition-colors">
        <Heart className="w-5 h-5" />
      </button>
      {featured && (
        <span className="absolute top-4 left-4 bg-navy text-white text-xs font-bold px-3 py-1 rounded-full">
          Featured
        </span>
      )}
      {specialOffer && (
        <span className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
          Special Offer
        </span>
      )}
    </div>
    <div className="p-6">
      <div className="flex items-end gap-3 mb-2">
        <h3 className="text-2xl font-bold text-navy">${price.toLocaleString()}</h3>
        {oldPrice && <span className="text-sm text-gray-400 line-through mb-1">${oldPrice.toLocaleString()}</span>}
      </div>
      <p className="text-sm font-medium text-accent mb-1">{type}</p>
      <p className="text-sm text-gray-500 mb-6 flex items-start gap-1">
        <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" /> {address}
      </p>
      
      <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <BedDouble className="w-4 h-4 text-gray-400" /> {beds} bds
        </div>
        <div className="flex items-center gap-2">
          <Bath className="w-4 h-4 text-gray-400" /> {baths} ba
        </div>
        <div className="flex items-center gap-2">
          <Square className="w-4 h-4 text-gray-400" /> {sqft} sqft
        </div>
      </div>
    </div>
  </motion.div>
);

const PopularListings = () => {
  const listings = [
    {
      id: 1,
      image: "https://picsum.photos/seed/house1/800/600",
      price: 549000,
      oldPrice: 599000,
      type: "Single Family House",
      address: "54 School Street UNIT 211H, Westbury, NY 11590",
      beds: 4,
      baths: 3,
      sqft: "1,209",
      specialOffer: true
    },
    {
      id: 2,
      image: "https://picsum.photos/seed/house2/800/600",
      price: 354809,
      type: "Single Family House",
      address: "54 School Street UNIT 211H, Westbury, NY 11590",
      beds: 3,
      baths: 2,
      sqft: "700",
      featured: true
    },
    {
      id: 3,
      image: "https://picsum.photos/seed/house3/800/600",
      price: 199900,
      type: "Single Family House",
      address: "54 School Street UNIT 211H, Westbury, NY 11590",
      beds: 4,
      baths: 3,
      sqft: "1,209"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Popular listings</h2>
          <div className="flex items-center gap-2 text-gray-500">
            <span>FloHomes's most popular watchlists.</span>
            <a href="#" className="text-navy font-medium hover:text-accent flex items-center gap-1 transition-colors">
              View all 2,412 listings <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="flex gap-2">
          {['House', 'Apartment', 'Villa'].map((tab, i) => (
            <button key={tab} className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${i === 0 ? 'bg-navy text-white' : 'bg-white text-gray-600 border border-gray-200 hover:border-navy'}`}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {listings.map(listing => <PropertyCard key={listing.id} {...listing} />)}
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "We estimate your home and help you prepare to sell it.",
      image: "https://picsum.photos/seed/service1/600/400"
    },
    {
      title: "Find the best price that works for you",
      image: "https://picsum.photos/seed/service2/600/400"
    },
    {
      title: "We take care of the sale from start to finish.",
      image: "https://picsum.photos/seed/service3/600/400"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center max-w-2xl mx-auto mb-16">
          How to sell your home in FloHomes the easiest way
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-offwhite rounded-3xl p-8 flex flex-col items-center text-center group transition-all"
            >
              <h3 className="text-xl font-semibold text-navy mb-8 min-h-[60px]">{service.title}</h3>
              <div className="w-full h-48 rounded-2xl overflow-hidden shadow-md">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Categories = () => {
  const categories = [
    { name: "House", count: "1,068 listings", image: "https://picsum.photos/seed/cat1/400/300" },
    { name: "Apartment", count: "312 listings", image: "https://picsum.photos/seed/cat2/400/300" },
    { name: "Villa", count: "742 listings", image: "https://picsum.photos/seed/cat3/400/300" },
    { name: "Condo", count: "185 listings", image: "https://picsum.photos/seed/cat4/400/300" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Listing category</h2>
        <div className="flex items-center gap-2 text-gray-500">
          <span>Type of our property.</span>
          <a href="#" className="text-navy font-medium hover:text-accent flex items-center gap-1 transition-colors">
            View all 2,412 listings <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl p-4 flex items-center gap-4 border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy">{cat.name}</h3>
              <p className="text-sm text-gray-500">{cat.count}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const LatestListings = () => {
  const listings = [
    {
      id: 4,
      image: "https://picsum.photos/seed/apt1/800/600",
      price: 99000,
      type: "Apartment",
      address: "54 School Street UNIT 211H, Westbury, NY 11590",
      beds: 4,
      baths: 3,
      sqft: "1,209"
    },
    {
      id: 5,
      image: "https://picsum.photos/seed/apt2/800/600",
      price: 237839,
      type: "Apartment",
      address: "54 School Street UNIT 211H, Westbury, NY 11590",
      beds: 3,
      baths: 2,
      sqft: "700"
    },
    {
      id: 6,
      image: "https://picsum.photos/seed/apt3/800/600",
      price: 757894,
      type: "Apartment",
      address: "54 School Street UNIT 211H, Westbury, NY 11590",
      beds: 4,
      baths: 3,
      sqft: "1,209"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Latest listings</h2>
        <div className="flex items-center gap-2 text-gray-500">
          <span>FloHomes's most popular watchlists.</span>
          <a href="#" className="text-navy font-medium hover:text-accent flex items-center gap-1 transition-colors">
            View all 2,412 listings <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {listings.map(listing => <PropertyCard key={listing.id} {...listing} />)}
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { value: "500M+", label: "In property sales" },
    { value: "43,652", label: "Homes for sale" },
    { value: "12,579", label: "Recently sold" },
    { value: "5,892", label: "Home for rent" }
  ];

  return (
    <section className="py-24 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What's happening in FloHomes</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonial = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
      <p className="text-2xl md:text-3xl font-medium text-navy leading-relaxed mb-8">
        "The site is good, helpful in providing information to find a house, especially for me who likes to search for information via cellphone, good luck for FloHomes and continue to help for housing seekers like me."
      </p>
      <div className="flex flex-col items-center">
        <h4 className="font-bold text-navy text-lg">Pamela S.</h4>
        <p className="text-sm text-gray-500 mb-6">Lake Forest, CA</p>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center hover:bg-accent-hover transition-colors">
            <ArrowRight className="w-5 h-5 rotate-180" />
          </button>
          <button className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center hover:bg-accent-hover transition-colors">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

const BottomCTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">Find the best home with us</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border border-gray-100 shadow-sm"
        >
          <div className="flex-1">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Consultation</p>
            <h3 className="text-2xl font-bold text-navy mb-6">We are ready to help, consult your property options with us.</h3>
            <a href="#" className="text-accent font-medium hover:text-accent-hover flex items-center gap-2 transition-colors">
              Start chat <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden flex-shrink-0">
            <img src="https://picsum.photos/seed/consult/400/400" alt="Consultant" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border border-gray-100 shadow-sm"
        >
          <div className="flex-1">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Calculator</p>
            <h3 className="text-2xl font-bold text-navy mb-6">Find the best price for you, calculate your property now.</h3>
            <a href="#" className="text-accent font-medium hover:text-accent-hover flex items-center gap-2 transition-colors">
              Calculate <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
            <Calculator className="w-16 h-16 text-emerald-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-navy-light text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-2xl tracking-tight">FloHomes</span>
            </div>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Sell</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Buy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Advertise</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our agent</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Getting started</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Server status</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Report a bug</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chat support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contacts us</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><MessageSquare className="w-4 h-4" /> contact@flohomes.com</li>
              <li className="flex items-center gap-2"><Calculator className="w-4 h-4" /> (414) 687 - 5892</li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-1" /> 794 Mcallister St<br/>San Francisco, 94102</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>Copyright © 2026 FloHomes</p>
          <p>All Rights Reserved | Terms and Conditions | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-offwhite font-sans">
      <Header />
      <main>
        <Hero />
        <PopularListings />
        <Services />
        <Categories />
        <LatestListings />
        <Stats />
        <Testimonial />
        <BottomCTA />
      </main>
      <Footer />
    </div>
  );
}

import { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone, Mail } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <a href="#" className="flex items-center gap-2 group">
                            {/* Logo Container */}
                            <div className="bg-white/10 backdrop-blur-sm p-1.5 rounded-lg border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                                <img src="/logo.svg" alt="Procentrilix Logo" className="h-10 w-auto object-contain" />
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent hidden sm:block">
                                PROCENTRILIX
                            </span>
                        </a>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider font-medium relative group">
                            Home
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider font-medium relative group">
                            Services
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider font-medium relative group">
                            About
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#contact" className="px-5 py-2 rounded-full bg-gradient-to-r from-teal-600 to-amber-600 text-white font-medium hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-300 transform hover:-translate-y-1">
                            Contact Us
                        </a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-teal-400 transition-colors">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-gray-800 animate-fade-in-down">
                    <div className="px-4 py-6 space-y-4">
                        <a href="#home" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-white text-lg font-medium">Home</a>
                        <a href="#services" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-white text-lg font-medium">Services</a>
                        <a href="#about" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-white text-lg font-medium">About</a>
                        <a href="#contact" onClick={() => setIsOpen(false)} className="block text-center py-3 rounded-lg bg-teal-600 text-white font-bold mt-4">Contact Us</a>

                        <div className="pt-6 border-t border-gray-800 flex flex-col space-y-3">
                            <div className="flex items-center space-x-3 text-gray-400">
                                <Mail size={16} />
                                <span className="text-sm">Ravi@procentrilix.com</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-400">
                                <Phone size={16} />
                                <span className="text-sm">7993521407</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

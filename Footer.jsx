import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent mb-4">
                            PROCENTRILIX
                        </h2>
                        <p className="text-gray-400 max-w-sm">
                            Centralizing Expertise for the Future. Your trusted partner for specialized IT services and expert taxation consultancy.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#home" className="text-gray-400 hover:text-teal-400 transition-colors">Home</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-teal-400 transition-colors">Services</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-teal-400 transition-colors">About Us</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-teal-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Connect</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                                <Linkedin size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                                <Twitter size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                                <Instagram size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                                <Facebook size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Procentrilix. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

import { motion } from 'framer-motion';
import Scene from './Scene';

export default function Hero() {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Scene />
            </div>

            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
                        <span className="block text-white">Centralizing Expertise</span>
                        <span className="block bg-gradient-to-r from-teal-500 to-amber-400 bg-clip-text text-transparent">
                            For The Future
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
                >
                    Your one-stop solution for IT Services and Global Taxation Solutions.
                    Innovating for tomorrow, today.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-10 flex justify-center gap-4"
                >
                    <a
                        href="#services"
                        className="px-8 py-3 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-lg transition-all shadow-lg hover:shadow-teal-500/50"
                    >
                        Explore Services
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 rounded-full border border-gray-500 hover:border-white text-gray-300 hover:text-white font-bold text-lg transition-all hover:bg-white/10"
                    >
                        Get Started
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

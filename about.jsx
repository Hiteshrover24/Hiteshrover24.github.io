import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-20 bg-black text-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Who We Are</h2>
                        <h3 className="text-2xl text-teal-400 mb-6">Centralizing Expertise for the Future</h3>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            We deliver comprehensive digital transformation solutions through innovative source-to-publish workflow offerings. Our services are designed to help organizations streamline content creation, management, and delivery with efficiency and accuracy.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Our operations are supported by a highly skilled and collaborative team, fostering strong alignment between employees and management. We deliver advanced publishing and technology services in a cost-effective and timely manner.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-amber-500 rounded-2xl transform rotate-3 blur-lg opacity-30"></div>
                        <div className="relative bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-2xl">
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center text-teal-400 font-bold text-xl">1</div>
                                    <div>
                                        <h4 className="font-bold text-lg">Professional Excellence</h4>
                                        <p className="text-gray-400 text-sm">Committed to highest standards in every project.</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 font-bold text-xl">2</div>
                                    <div>
                                        <h4 className="font-bold text-lg">Client-Centric Approach</h4>
                                        <p className="text-gray-400 text-sm">Tailored solutions that meet your specific goals.</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 font-bold text-xl">3</div>
                                    <div>
                                        <h4 className="font-bold text-lg">Innovation Driven</h4>
                                        <p className="text-gray-400 text-sm">Leveraging technology for better results.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

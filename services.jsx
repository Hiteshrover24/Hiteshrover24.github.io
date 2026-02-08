import { motion } from 'framer-motion';
import { Code, FileText, Globe, DollarSign } from 'lucide-react';

const services = [
    {
        category: "IT Solutions & Services",
        items: [
            {
                title: "Managed IT Services",
                description: "Proactive management and support of your IT infrastructure to keep your systems running smoothly.",
                icon: <Code className="w-12 h-12 text-teal-400" />
            },
            {
                title: "IT Consulting",
                description: "Expert advice and strategies to align your technology with your business goals and innovation.",
                icon: <FileText className="w-12 h-12 text-amber-400" />
            },
            {
                title: "Data Backup & Recovery",
                description: "Reliable backup solutions and swift recovery services to safeguard your critical business data.",
                icon: <Globe className="w-12 h-12 text-teal-400" />
            },
            {
                title: "Remote Infrastructure Management (RIM)",
                description: "End-to-end management of IT infrastructure, ensuring high availability and performance.",
                icon: <Code className="w-12 h-12 text-amber-400" />
            },
            {
                title: "Content Transformation",
                description: "Comprehensive content digitization and transformation services for modern platforms.",
                icon: <FileText className="w-12 h-12 text-teal-400" />
            },
            {
                title: "OCR & Data Conversion",
                description: "Accurate OCR, XML, and data format conversions to digitize and structure your information.",
                icon: <Globe className="w-12 h-12 text-amber-400" />
            },
            {
                title: "Digital Publishing (ePub/PDF)",
                description: "High-quality ePub conversions and accessible PDF services complying with global standards.",
                icon: <FileText className="w-12 h-12 text-teal-400" />
            }
        ]
    },
    {
        category: "Non-IT Services",
        items: [
            {
                title: "US Taxation",
                description: "Expert US taxation services for individuals and businesses, ensuring accurate and timely filings.",
                icon: <DollarSign className="w-12 h-12 text-emerald-400" />
            }
        ]
    }
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Comprehensive solutions tailored to your business needs, ranging from specialized IT services to expert financial consultancy.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-16">
                    {services.map((category, catIndex) => (
                        <div key={catIndex}>
                            <h3 className="text-3xl font-semibold mb-8 border-l-4 border-teal-500 pl-4">{category.category}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {category.items.map((service, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        whileHover={{ scale: 1.05, rotateY: 5 }}
                                        className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all shadow-2xl hover:shadow-teal-500/20 group"
                                    >
                                        <div className="mb-6 bg-black/30 p-4 rounded-full w-fit group-hover:bg-white/10 transition-colors">
                                            {service.icon}
                                        </div>
                                        <h4 className="text-2xl font-bold mb-3">{service.title}</h4>
                                        <p className="text-gray-400 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiPowerbi, SiTableau } from "react-icons/si";
import { FaNodeJs, FaJava, FaPython } from "react-icons/fa6";
import { DiMysql } from "react-icons/di";
import { motion } from "framer-motion";

// Icon Animation Variants
const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

// Technology Icon Component
const TechnologyIcon = ({ icon: Icon, color, duration }) => (
    <motion.div
        variants={iconVariants(duration)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4"
    >
        <Icon className={`text-7xl ${color}`} />
    </motion.div>
);

export default function Technologies() {
    const technologies = [
        { icon: RiReactjsLine, color: "text-cyan-400", duration: 2.5 },
        { icon: TbBrandNextjs, color: "text-white", duration: 3 },
        { icon: FaPython, color: "text-blue-500", duration: 5 },
        { icon: SiMongodb, color: "text-green-500", duration: 5 },
        { icon: SiPowerbi, color: "text-yellow-300", duration: 2 },
        { icon: FaNodeJs, color: "text-green-500", duration: 6 },
        { icon: FaJava, color: "text-red-700", duration: 2 },
        { icon: DiMysql, color: "text-sky-400", duration: 4 },
        { icon: SiTableau, color: "text-white", duration: 6 },
    ];

    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl"
            >
                Technologies
            </motion.h1>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4"
            >
                {technologies.map((tech, index) => (
                    <TechnologyIcon
                        key={index}
                        icon={tech.icon}
                        color={tech.color}
                        duration={tech.duration}
                    />
                ))}
            </motion.div>
        </div>
    );
}

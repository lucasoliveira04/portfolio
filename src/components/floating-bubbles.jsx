import { motion } from "framer-motion";

const floatingVariants = {
    animate: {
        y: [0, -10, 0, 10, 0],
        x: [0, 5, 0, -5, 0],
        scale: [1, 1.05, 1, 0.95, 1],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

export function FloatingBubbles() {
    return (
        <div className="absolute w-full h-full top-0 left-0 z-0 pointer-events-none">
            <motion.div
                className="absolute top-10 left-10 w-16 h-16 bg-green-300 rounded-full opacity-50 blur-md"
                variants={floatingVariants}
                animate="animate"
            />
            <motion.div
                className="absolute top-[40%] left-[20%] w-24 h-24 bg-green-400 rounded-full opacity-40 blur-lg"
                variants={floatingVariants}
                animate="animate"
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div
                className="absolute bottom-[15%] left-[35%] w-12 h-12 bg-green-200 rounded-full opacity-50 blur-sm"
                variants={floatingVariants}
                animate="animate"
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <motion.div
                className="absolute bottom-20 right-[10%] w-16 h-16 bg-green-500 rounded-full opacity-50 blur-md"
                variants={floatingVariants}
                animate="animate"
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
            />
            <motion.div
                className="absolute top-[25%] right-[20%] w-20 h-20 bg-green-300 rounded-full opacity-50 blur-md"
                variants={floatingVariants}
                animate="animate"
                transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            />

            <motion.div
                className="absolute top-[10%] left-[50%] w-14 h-14 bg-green-400 rounded-full opacity-40 blur-sm"
                variants={floatingVariants}
                animate="animate"
                transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            />
            <motion.div
                className="absolute top-[60%] left-[60%] w-20 h-20 bg-green-300 rounded-full opacity-30 blur-md"
                variants={floatingVariants}
                animate="animate"
                transition={{ duration: 7.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            />
            <motion.div
                className="absolute bottom-[25%] left-[50%] w-16 h-16 bg-green-500 rounded-full opacity-45 blur-lg"
                variants={floatingVariants}
                animate="animate"
                transition={{ duration: 9.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            />
            <motion.div
                className="absolute top-[30%] right-[40%] w-12 h-12 bg-green-200 rounded-full opacity-35 blur-sm"
                variants={floatingVariants}
                animate="animate"
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            />
            <motion.div
                className="absolute bottom-[40%] right-[30%] w-10 h-10 bg-green-300 rounded-full opacity-40 blur-md"
                variants={floatingVariants}
                animate="animate"
                transition={{ duration: 7.3, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
            />
            <motion.div
                className="absolute top-[20%] left-[70%] w-24 h-24 bg-green-400 rounded-full opacity-50 blur-lg"
                variants={floatingVariants}
                animate="animate"
                transition={{ duration: 8.7, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
            />
            <motion.div
                className="absolute bottom-[10%] left-[70%] w-12 h-12 bg-green-200 rounded-full opacity-25 blur-sm"
                variants={floatingVariants}
                animate="animate"
                transition={{ duration: 7.6, repeat: Infinity, ease: "easeInOut", delay: 1.3 }}
            />
            <motion.div
                className="absolute top-[15%] right-[60%] w-16 h-16 bg-green-500 rounded-full opacity-45 blur-md"
                variants={floatingVariants}
                animate="animate"
                transition={{ duration: 8.1, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
            />
        </div>
    );
}

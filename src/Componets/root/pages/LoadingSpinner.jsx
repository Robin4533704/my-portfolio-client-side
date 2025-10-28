import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
    return (
        <div className="fixed inset-0 bg-white bg-opacity-90 z-50 flex items-center justify-center">
            <div className="text-center">
                <motion.div
                    className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-gray-600 font-medium"
                >
                    Loading Portfolio...
                </motion.p>
            </div>
        </div>
    );
};

export default LoadingSpinner;
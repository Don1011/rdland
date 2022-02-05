import React from 'react';
import { motion } from "framer-motion"




const TransitionCard = (props) => {
    return (
        <motion.div
            initial={{ x: "-1000%" }}
            animate={{ x: "0%" }}
            transition={{duration:.6}}
        >
            {props.children}
        </motion.div>
    );
};

export default TransitionCard;
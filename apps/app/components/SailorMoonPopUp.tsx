import React from "react";
import Image from "next/image";
import sailorMoonCover from "/public/sailorMoonCover.jpg";
import { motion, animate, AnimatePresence } from "framer-motion";

const SailorMoonPopUp = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 25 }}
			transition={{ delay: 0.5 }}
			className="grid place-items-center"
		>
			<Image
				className="justify-items-center"
				alt="Sailor Moon"
				src={sailorMoonCover}
			></Image>
		</motion.div>
	);
};

export default SailorMoonPopUp;

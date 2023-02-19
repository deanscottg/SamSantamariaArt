import Image from "next/image";
const Footer = () => {
	return (
		<footer className="flex justify-center items-center relative ">
			<p>&#169; Copyright Sam Santamaria Art 2023</p>

			<div className="absolute flex right-0">
				<Image
					src="/facebook.png"
					alt="facebook"
					height={40}
					width={40}
				/>
				<Image
					src="/facebook.png"
					alt="facebook"
					height={40}
					width={40}
				/>
				<Image
					src="/facebook.png"
					alt="facebook"
					height={40}
					width={40}
				/>
			</div>
		</footer>
	);
};

export default Footer;

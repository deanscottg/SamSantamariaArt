import Image from "next/image";
const Footer = () => {
	return (
		<footer className="flex justify-center items-center relative ">
			<p>&#169; Copyright Sam Santamaria Art 2023</p>

			<div className="absolute flex right-0 space-x-2">
				<Image
					src="/facebook.png"
					alt="facebook"
					height={40}
					width={40}
				/>
				<Image
					src="/instagram.png"
					alt="finstagram"
					height={40}
					width={40}
				/>
				<Image
					src="/twitter.png"
					alt="twitter"
					height={40}
					width={40}
				/>
			</div>
		</footer>
	);
};

export default Footer;

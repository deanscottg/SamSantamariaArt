import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
	const router = useRouter();
	useEffect(() => {
		setTimeout(() => {
			router.push("/");
		}, 3000);
	});
	return (
		<div className="not-found">
			<h1>So Sorry!</h1>
			<h2>This page cannot be found</h2>
			<p>
				Lets get you back on track to some amazing art shall we?
				<Link className="not-found-text" href="/">
					{" "}
					Homepage{" "}
				</Link>
			</p>
		</div>
	);
};

export default NotFound;

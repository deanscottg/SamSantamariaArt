import { FormEvent, useState } from "react";
import Input from "./Input";
import TextArea from "./Textarea";
import { validate } from "../utils/validate";
import zod, { ZodError } from "zod";
import axios from "axios";
import router from "next/router";
import SubmitLoader from "./SubmitLoader";

const formSchema = zod.object({
	name: zod.string({
		required_error: "Name is required",
	}),
	email: zod
		.string({
			required_error: "Email is required",
		})
		.email("Invalid Email Address"),
	message: zod.string({
		required_error: "Messsage is required",
	}),
});

interface IValues {
	name: string;
	email: string;
	message: string;
}
interface IErrors extends Partial<IValues> {}

export const ContactForm = () => {
	const [values, setValues] = useState<IValues>({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [errors, setErrors] = useState<ZodError | null>(null);
	// const [loading, setLoading] = useState(false);
	//   const [name, setName] = useState("");
	//   const [email, setEmail] = useState("");
	//   const [message, setMessage] = useState("");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Make api call to your email endpoint and pass the data in the call to the endpoint
		// using the state values, pass the object as the body of the POST request to the email endpoint
		const result = formSchema.safeParse(values);
		if (!result.success) {
			setErrors(result.error);

			return;
		}

		// Set loading state
		setIsSubmitting(true);

		const emailResponse = await axios.post("/api/hello", {
			...values,
		});
		// Set success page
		console.log(emailResponse);
		// {
		emailResponse && router.push("/emailSuccessPage");
		// }
	};

	const onChange = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	) => {
		setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	if (isSubmitting) return <SubmitLoader />;
	return (
		<div className="w-full h-screen">
			<div className="px-3 pt-10 ">
				<form
					onSubmit={handleSubmit}
					className="flex flex-col items-center mx-auto w-1/3"
				>
					<Input
						errors={errors}
						value={values.name}
						onChange={onChange}
						id="name"
						name="name"
						placeholder="Full Name"
						label="Your Name"
					/>
					<Input
						errors={errors}
						value={values.email}
						onChange={onChange}
						id="email"
						name="email"
						placeholder="Email Address"
						label="Your Email"
					/>
					<TextArea
						errors={errors}
						value={values.message}
						onChange={onChange}
						id="message"
						name="message"
						placeholder="Write us a message!"
						label="Message"
					/>

					<button
						className="w-full py-2 mt-6 lext-lg bg-gray-500 rounded-md active:bg-indigo-500 hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none"
						type="submit"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
		// <form className="flex flex-col w-full mx-auto" onSubmit={onSubmit}>
		//   <input
		//     type="text"
		//     placeholder="Name"
		//     value={name}
		//     onChange={(e) => setName(e.target.value)}
		//   />
		//   <input
		//     type="email"
		//     placeholder="Email"
		//     value={email}
		//     onChange={(e) => setEmail(e.target.value)}
		//   />
		//   <textarea
		//     placeholder="Your Message"
		//     value={message}
		//     onChange={(e) => setMessage(e.target.value)}
		//   />
		//   <button type="submit">Submit</button>
		// </form>
	);
};

export default ContactForm;

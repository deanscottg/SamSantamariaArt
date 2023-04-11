import { FormEvent, useState } from "react";
import Input from "./Input";
import TextArea from "./Textarea";
import { validate } from "../utils/validate";
("use client");

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
  const [errors, setErrors] = useState<IErrors>({});
  const [loading, setLoading] = useState(false);
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate(values);
    const isError = Object.keys(errors).length;
    if (isError && isError > 0) {
      setErrors(errors);
      return;
    }

    console.log(values);
  };

  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="w-full h-screen">
      <div className="px-3 pt-10 ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center mx-auto w-1/3"
        >
          <Input
            error={!!errors.name}
            errorMessage={errors.name}
            value={values.name}
            onChange={onChange}
            id="name"
            name="name"
            placeholder="Full Name"
            label="Your Name"
          />
          <Input
            error={!!errors.email}
            errorMessage={!!errors.email ? errors.email : ""}
            value={values.email}
            onChange={onChange}
            id="email"
            name="email"
            placeholder="Email Address"
            label="Your Email"
          />
          <TextArea
            error={!!errors.message}
            errorMessage={errors.message}
            value={values.message}
            onChange={onChange}
            id="message"
            name="message"
            placeholder="Write us a message!"
            label="Message"
          />

          <button
            className="w-full py-2 mt-6 lext-lg bg-gray-500 rounded-md active:bg-indigo-400 focus:ring-2 focus:ring-indigo-300 outline-none"
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

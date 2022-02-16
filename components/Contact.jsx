import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
      company: "",
    },
    onSubmit: () => {
      setMessage("Form Submitted");
      setSubmitted(true);
    },
    validationSchema: yup.object({
      name: yup.string().trim().required("Name is required"),
      email: yup
        .string()
        .email("Must be a valid email")
        .required("Email is required"),
      company: yup.string().trim().required("Company is required"),
      message: yup.string().trim().required("Message is required"),
    }),
  });

  return (
    <div id="contact" className="pt-32">
      <div className="flex flex-col items-center gap-8">
        <header>
          <h3 className="text-5xl text-slate-900 dark:text-white font-bold">
            Contact
          </h3>
        </header>
        <div
          hidden={!submitted}
          role="alert"
          className="bg-light-green rounded-lg text-white p-2"
        >
          {message}
        </div>

        <form
          className="flex flex-col dark:bg-gray-800 bg-white gap-2 shadow-lg p-6"
          onSubmit={formik.handleSubmit}
        >
          <label htmlFor="name" className="flex flex-col flex-1">
            Name
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              className="p-2 rounded-lg bg-smooth-grey dark:bg-white"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <span>{formik.errors.name && <div>{formik.errors.name}</div>}</span>
          </label>

          <div className="flex flex-row justify-between gap-3 flex-wrap">
            <label htmlFor="email" className="flex flex-col flex-1 flex-wrap">
              Email Address
              <input
                type="email"
                name="email"
                className="p-2 rounded-lg bg-smooth-grey dark:bg-white"
                placeholder="john@example.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <span>
                {formik.errors.email && <div>{formik.errors.email}</div>}
              </span>
            </label>

            <label htmlFor="company" className="flex flex-col flex-1">
              Company
              <input
                type="text"
                name="company"
                className="p-2 rounded-lg bg-smooth-grey dark:bg-white"
                placeholder="myCompany"
                value={formik.values.company}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <span>
                {formik.errors.company && <div>{formik.errors.company}</div>}
              </span>
            </label>
          </div>
          <label htmlFor="message" className="flex flex-col">
            Message
            <textarea
              name="message"
              placeholder="Your message ..."
              className="p-4 rounded-lg bg-smooth-grey dark:bg-white"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <span>
              {formik.errors.message && <div>{formik.errors.message}</div>}
            </span>
          </label>
          <button
            type="submit"
            className="
          text-lg
          flex-1
          p-2
          bg-slate-900
          text-white
          rounded-lg
          hover:bg-smooth-grey
          hover:text-slate-900
          font-bold
        "
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

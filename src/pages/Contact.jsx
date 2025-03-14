import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/azywgmdb", userInfo);
      toast.success("Your message has been sent");
      reset(); // This will clear the form after successful submission
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <section className="bg-gray-100 py-10 sm:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            We'd love to hear from you! Whether you have a question about our products, services, or anything else, our team is ready to help.
          </p>
        </div>
      </section>

      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-10 sm:py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Get in Touch</h2>
        <div className="flex flex-col items-center justify-center mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-slate-200 w-full max-w-md md:w-[450px] px-6 sm:px-8 py-6 sm:py-8 rounded-xl"
          >
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>

            {/* Name Input */}
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input
                {...register("name", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
              />
              {errors.name && <span className="text-red-500">This field is required</span>}
            </div>

            {/* Email Input */}
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
              />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>

            {/* Message Input */}
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                {...register("message", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                placeholder="Enter your message"
                rows="4"
              />
              {errors.message && <span className="text-red-500">This field is required</span>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-black text-white w-full rounded-lg px-3 py-2 mt-2 hover:bg-gray-800 transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;

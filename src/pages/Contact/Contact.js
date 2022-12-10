import React from "react";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import { FaBeer, FaPhoneAlt } from "react-icons/fa";
import { IconName, MdEmail, MdLocationOn } from "react-icons/md";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://rmc-server.vercel.app/message", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        // console.log("Success:", result);
        toast.success('Your Message succefully send')

      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="">
      <Header></Header>
      <div>
        <h2 className=" text-purple-900 text-center text-3xl font-bold mt-5">
          Contact Us
        </h2>
        <p className=" text-xl text-center text-gray-400">
          Any Questopm or remarks? Just write us a message{" "}
        </p>
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col lg:flex-row gap-x-10">
            <div className="text-center w-full lg:text-left bg-slate-800 p-5 rounded-lg text-white">
              <h1 className="text-2xl font-bold">Contact Information!</h1>
              <div className="py-8 flex flex-col gap-5">
                <div className=" flex  items-center gap-4">
                  <FaPhoneAlt></FaPhoneAlt> <span>+88 01825732533</span>
                </div>
                <div
                  className=" flex r
                 items-center gap-4"
                >
                  <MdEmail></MdEmail> <span>azadhossen6677@gmail.com</span>
                </div>
                <div className=" flex  items-center gap-4">
                  <MdLocationOn></MdLocationOn>{" "}
                  <span>Chittagong, Bangladesh</span>
                </div>
              </div>
            </div>
            <div className="card w-full shadow-2xl bg-base-100">
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="name"
                      className="input input-bordered"
                      {...register("name", { required: true })}
                    />
                    {errors.name && <span>This field is required</span>}
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="input input-bordered"
                      {...register("email", { required: true })}
                    />
                    {errors.email && <span>This field is required</span>}
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Your Message</span>
                    </label>
                    <textarea
                      className="textarea textarea-bordered h-24"
                      placeholder="Bio"
                      {...register("message", { required: true })}
                    ></textarea>
                    {errors.message && <span>This field is required</span>}
                  </div>

                  <input className="btn btn-primary mt-5" type="submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;

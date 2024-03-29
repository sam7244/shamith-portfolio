"use client";
import React from "react";
import styles from "../src/app/styles/Contacts.module.css";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";
import { AiOutlineCheckCircle, AiOutlineSend } from "react-icons/ai";
import {
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaStackOverflow,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiAtSign, FiPhone } from "react-icons/fi";

import TypingText from "./TypingText";
import TitleText from "./TitleText";
import { motion } from "framer-motion";

import { client } from "../lib/client";

const socialsData = {
  github: "https://github.com/sam",
  facebook: "https://www.facebook.com/sam/",
  linkedIn: "https://www.linkedin.com/in/sam/",
  twitter: "https://twitter.com/sam",
  medium: "https://medium.com/sam",
  stackOverflow: "https://stackoverflow.com",
  mail: "shamithkumar7244@gmail.com",
};

export const contactsData = {
  email: "shamithkumar7244@gmail.com",
  phone: "+91 8971487244",
  address: "Pornadka house Padangady Vilage Belthangady",
  github: "https://github.com/sam72444",
  facebook: "https://www.facebook.com/sam.riyaz/",
  linkedIn: "https://www.linkedin.com/in/sam/",
  twitter: "https://twitter.com/sam",
  medium: "https://medium.com/@sam",
  stackOverflow: "https://stackoverflow.com",
  devUsername: "sam",
};

function Contacts() {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { name, email, message } = formData;
  const [success, setSuccess] = useState<boolean>(false);

  const handleFormInput = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmission = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);

        setIsFormSubmitted((prev) => !prev);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((e) => {
        console.log("Something went wrong");
      });
  };

  return (
    <AlertDialog>
      <div className={`${styles.contacts} relative`} id="contacts">
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none -z-10"
          aria-hidden="true"
        >
          <div className="absolute top-0 flex items-center justify-center w-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2 aspect-square">
            <div className="absolute inset-0 translate-z-0 bg-primary-500 rounded-full blur-[120px] opacity-50" />
          </div>
        </div>
        <div className={styles.contactsContainer}>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex  flex-col mb-10`}
          >
            <TypingText title="| Get Ahold of Us" textStyles="text-center" />
            <TitleText title="Contact " textStyles="text-center" />
          </motion.div>
          <div className={`${styles.contactsBody} `}>
            <div className={styles.contactsForm}>
              <form className="relative" onSubmit={handleSubmission}>
                <div className={`${styles.inputContainer}`}>
                  <label
                    htmlFor="Name"
                    className=" bg-zinc-900/10 z-10  text-neutral-100
                                font-semibold text-[0.9rem] py-0 px-[5px] 
                                inline-flex translate-x-[25px] translate-y-[50%]"
                  >
                    Name
                  </label>
                  <input
                    placeholder="John Doe"
                    type="text"
                    onChange={handleFormInput}
                    value={name}
                    name="name"
                    className={`${styles.formInput}  
                                    border-2 border-zinc-600 bg-zinc-900/10
                                     text-[#EFF3F4] font-medium transition 
                                     focus:border-white`}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <label
                    htmlFor="Email"
                    className=" bg-zinc-900/10 z-11 text-[#EFF3F4] 
                                    font-semibold text-[0.9rem] px-[5px] 
                                    inline-flex translate-x-[25px] 
                                    translate-y-[50%]"
                  >
                    Email
                  </label>
                  <input
                    value={email}
                    onChange={handleFormInput}
                    placeholder="John@doe.com"
                    type="email"
                    name="email"
                    className={`${styles.formInput}  
                                    border-2 border-[#8B98A5]  bg-zinc-900/10
                                     text-[#EFF3F4] font-medium transition
                                      focus:border-white`}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <label
                    htmlFor="Message"
                    className=" bg-zinc-900/10 z-12 text-[#EFF3F4]
                                     font-semibold text-[0.9rem] px-[5px] 
                                     inline-flex translate-x-[25px] 
                                     translate-y-[50%]"
                  >
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={handleFormInput}
                    placeholder="Type your message...."
                    name="message"
                    className={`${styles.formMessage} 
                                    border-2 border-[#8B98A5] 
                                    focus:border-white  bg-zinc-900/10
                                     text-[#EFF3F4] font-medium transition`}
                  />
                </div>
                <div className="flex items-center justify-start w-full px-2">
                  <AlertDialogTrigger asChild>
                    <Button
                      //
                      className="bg-white text-black"
                    >
                      Send Message
                    </Button>
                  </AlertDialogTrigger>
                </div>
              </form>
            </div>
            <div className={styles.contactsDetails}>
              <a
                href={`mailto:${contactsData.email}`}
                className={styles.personalDetails}
              >
                <div
                  className="w-[45px] h-[45px]
                             rounded-full flex items-center 
                             justify-center text-2xl transition duration-200
                             ease-in-out text-[#15202B] bg-white
                              hover:bg-gray-200 hover:scale-[1.1]
                               shrink"
                >
                  <FiAtSign />
                </div>
                {/* <p style={{ color: theme.tertiary }}> */}
                <p>{contactsData.email}</p>
              </a>
              <a
                href={`tel:${contactsData.phone}`}
                className={styles.personalDetails}
              >
                <div
                  className="w-[45px] h-[45px]
                             rounded-full flex items-center 
                             justify-center text-2xl transition duration-200
                             ease-in-out text-[#15202B] bg-white
                              hover:bg-gray-200 hover:scale-[1.1]
                               shrink "
                >
                  <FiPhone />
                </div>
                {/* <p style={{ color: theme.tertiary }}> */}
                <p>{contactsData.phone}</p>
              </a>
              <div className={styles.personalDetails}>
                <div
                  className="w-[45px] h-[45px]
                             rounded-full flex items-center 
                             justify-center text-2xl transition duration-200
                             ease-in-out text-[#15202B] bg-white
                              hover:bg-gray-200 hover:scale-[1.1]
                               shrink"
                >
                  <HiOutlineLocationMarker />
                </div>
                {/* <p style={{ color: theme.tertiary }}> */}
                <p>{contactsData.address}</p>
              </div>

              <div className={styles.socialmediaIcons}>
                {socialsData.twitter && (
                  <a
                    href={socialsData.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="w-[45px] h-[45px]
                             rounded-[50%] flex items-center 
                             justify-center text-2xl transition duration-200
                             ease-in-out text-[#15202B] bg-white
                              hover:bg-gray-200 hover:scale-[1.1]
                               shrink"
                  >
                    <FaTwitter aria-label="Twitter" />
                  </a>
                )}
                {socialsData.github && (
                  <a
                    href={socialsData.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-[45px] h-[45px]
                             rounded-[50%] flex items-center 
                             justify-center text-2xl transition duration-200
                             ease-in-out text-[#15202B] bg-white
                              hover:bg-gray-200 hover:scale-[1.1]
                               shrink"
                  >
                    <FaGithub aria-label="GitHub" />
                  </a>
                )}
                {socialsData.linkedIn && (
                  <a
                    href={socialsData.linkedIn}
                    target="_blank"
                    rel="noreferrer"
                    className="w-[45px] h-[45px]
                             rounded-[50%] flex items-center 
                             justify-center text-2xl transition duration-200
                             ease-in-out text-[#15202B] bg-white
                              hover:bg-gray-200 hover:scale-[1.1]
                               shrink"
                  >
                    <FaLinkedinIn aria-label="LinkedIn" />
                  </a>
                )}

                {socialsData.stackOverflow && (
                  <a
                    href={socialsData.stackOverflow}
                    target="_blank"
                    rel="noreferrer"
                    className="w-[45px] h-[45px]
                             rounded-[50%] flex items-center 
                             justify-center text-2xl transition duration-200
                             ease-in-out text-[#15202B] bg-white
                              hover:bg-gray-200 hover:scale-[1.1]
                               shrink"
                  >
                    <FaStackOverflow aria-label="Stack Overflow" />
                  </a>
                )}
                {socialsData.facebook && (
                  <a
                    href={socialsData.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="w-[45px] h-[45px]
                             rounded-[50%] flex items-center 
                             justify-center text-2xl transition duration-200
                             ease-in-out text-[#15202B] bg-white
                              hover:bg-gray-200 hover:scale-[1.1]
                               shrink"
                  >
                    <FaFacebook aria-label="facebook" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Your Response Will Be Send To Shamith Kumar
          </AlertDialogTitle>
          <AlertDialogDescription>
            {!isFormSubmitted
              ? " Click Continue To Send Your Response | (Cancel) To Cancel The Submission"
              : "Thank You For Getting In Touch!"}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          {!isFormSubmitted && (
            <AlertDialogAction onClick={handleSubmission}>
              <button>Continue</button>
            </AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default Contacts;

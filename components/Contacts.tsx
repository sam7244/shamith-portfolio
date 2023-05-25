"use client";
import React from "react";
import styles from "../src/app/styles/Contacts.module.css";
import { useRef, useState } from "react";
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
import e from "express";
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

    await client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((e) => {
        console.log("Something went wrong");
      });
  };

  return (
    <div className={styles.contacts} id="contacts">
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

              <div className={styles.submitBtn}>
                <button
                  type="submit"
                  onSubmit={handleSubmission}
                  className="px-4  py-2 ml-2 hover:scale-110 transition duration-500 ease-in-out text-md rounded-md w-[50%] md:w-[30%]  bg-white text-black "
                >
                  <p className="font-bold">{!success ? "Send" : "Sent"}</p>
                  <div className={styles.submitIcon}>
                    <AiOutlineSend
                      className={styles.sendIcon}
                      style={{
                        animation: !success
                          ? "initial"
                          : "fly 0.8s linear both",
                        position: success ? "absolute" : "initial",
                      }}
                    />
                    <AiOutlineCheckCircle
                      className={styles.successIcon}
                      style={{
                        display: !success ? "none" : "inline-flex",
                        opacity: !success ? "0" : "1",
                      }}
                    />
                  </div>
                </button>
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
                             rounded-[50%] flex items-center 
                             justify-center text-2xl transition 
                             ease-in-out text-[#15202B] bg-white
                              hover:bg-gray-200 hover:scale-[1.1]
                               shrink delay-200"
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
                             rounded-[50%] flex items-center 
                             justify-center text-2xl transition 
                             ease-in-out text-[#15202B] bg-white
                              hover:bg-gray-200 hover:scale-[1.1]
                               shrink delay-200"
              >
                <FiPhone />
              </div>
              {/* <p style={{ color: theme.tertiary }}> */}
              <p>{contactsData.phone}</p>
            </a>
            <div className={styles.personalDetails}>
              <div
                className="w-[45px] h-[45px]
                             rounded-[50%] flex items-center 
                             justify-center text-2xl transition 
                             ease-in-out text-[#15202B] bg-white
                              hover:bg-gray-200 hover:scale-[1.1]
                               shrink delay-200"
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
                             justify-center text-2xl transition 
                             ease-in-out text-[#15202B] bg-white
                              hover:bg-gray-200 hover:scale-[1.1]
                               shrink delay-200"
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
                             justify-center text-2xl transition 
                             ease-in-out text-[#15202B] bg-white
                              hover:bg-gray-200 hover:scale-[1.1]
                               shrink delay-200"
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
                             justify-center text-2xl transition 
                             ease-in-out text-[#15202B] bg-white
                              hover:bg-gray-200 hover:scale-[1.1]
                               shrink delay-200"
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
                             justify-center text-2xl transition 
                             ease-in-out text-[#15202B] bg-white
                              hover:bg-gray-200 hover:scale-[1.1]
                               shrink delay-200"
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
                             justify-center text-2xl transition 
                             ease-in-out text-[#15202B] bg-white
                              hover:bg-gray-200 hover:scale-[1.1]
                               shrink delay-200"
                >
                  <FaFacebook aria-label="facebook" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;

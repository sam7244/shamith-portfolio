"use client"
import React from 'react'
import styles from '../src/app/styles/Contacts.module.css'
import {useRef,useState} from "react"
import { AiOutlineCheckCircle, AiOutlineSend } from "react-icons/ai";
import {
    FaFacebook, FaGithub, FaLinkedinIn, FaMediumM,
    FaStackOverflow, FaTwitter
} from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FiAtSign, FiPhone } from 'react-icons/fi';
import Image from 'next/image';


const socialsData = {
    github: 'https://github.com/sam',
    facebook: 'https://www.facebook.com/sam/',
    linkedIn: 'https://www.linkedin.com/in/sam/',
    twitter: 'https://twitter.com/sam',
    medium: 'https://medium.com/sam',
    stackOverflow: 'https://stackoverflow.com',
    mail: 'shamithkumar7244@gmail.com',
}

export const contactsData = {
    email: 'shamithkumar7244@gmail.com',
    phone: '+91 8971487244',
    address: 'Pornadka house Padangady Vilage Belthangady',
    github: 'https://github.com/sam72444',
    facebook: 'https://www.facebook.com/sam.riyaz/',
    linkedIn: 'https://www.linkedin.com/in/sam/',
    twitter: 'https://twitter.com/sam',
    medium: 'https://medium.com/@sam',
    stackOverflow: 'https://stackoverflow.com',
    devUsername: "sam"
}

function Contacts() {
   const form = useRef();
   const [success, setSuccess] = useState(false);
  return (
    <div className={styles.contacts}
    id='contacts'
   >
    <div className={styles.contactsContainer}>
    <h1 >Contacts</h1>
    <div className={styles.contactsBody}>
    <div className={styles.contactsForm}>
    <form  >
              <div className={styles.inputContainer}>
                <label
                  htmlFor="Name"
                  className="bg-[#15202B] text-[#EFF3F4] 
                                font-semibold text-[0.9rem] py-0 px-[5px] 
                                inline-flex translate-x-[25px] translate-y-[50%]"
                >
                  Name
                </label>
                <input
                  placeholder="John Doe"
                  type="text"
                  name="user_name"
                  className={`${styles.formInput}  
                                    border-2 border-[#8B98A5] bg-[#15202B]
                                     text-[#EFF3F4] font-medium transition 
                                     focus:border-[#1D9BF0]`}
                />
              </div>
              <div className={styles.inputContainer}>
                <label
                  htmlFor="Email"
                  className="bg-[#15202B] text-[#EFF3F4] 
                                    font-semibold text-[0.9rem] px-[5px] 
                                    inline-flex translate-x-[25px] 
                                    translate-y-[50%]"
                >
                  Email
                </label>
                <input
                  placeholder="John@doe.com"
                  type="email"
                  name="user_email"
                  className={`${styles.formInput}  
                                    border-2 border-[#8B98A5] bg-[#15202B]
                                     text-[#EFF3F4] font-medium transition
                                      focus:border-[#1D9BF0]`}
                />
              </div>
              <div className={styles.inputContainer}>
                <label
                  htmlFor="Message"
                  className="bg-[#15202B] text-[#EFF3F4]
                                     font-semibold text-[0.9rem] px-[5px] 
                                     inline-flex translate-x-[25px] 
                                     translate-y-[50%]"
                >
                  Message
                </label>
                <textarea
                  placeholder="Type your message...."
                  name="message"
                  className={`${styles.formMessage} 
                                    border-2 border-[#8B98A5] 
                                    focus:border-[#1D9BF0] bg-[#15202B]
                                     text-[#EFF3F4] font-medium transition`}
                />
              </div>

              <div className={styles.submitBtn}>
                <button
                  type="submit"
                  className="bg-[#1D9BF0] 
                                    hover:bg-[#8B98A5] text-[#15202B]
                                     transition delay-200 "
                >
                  <p>{!success ? "Send" : "Sent"}</p>
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
                            <div className="w-[45px] h-[45px] 
                            rounded-[50%] flex items-center 
                            justify-center text-2xl transition 
                            ease-in-out text-[#15202B] bg-[#8B98A5]
                             hover:bg-[#1D9BF0] hover:scale-[1.1] 
                             shrink delay-200"
                            >
                                <FiAtSign />
                            </div>
                            {/* <p style={{ color: theme.tertiary }}> */}
                            <p>
                                {contactsData.email}
                            </p>
                        </a>
                        <a
                            href={`tel:${contactsData.phone}`}
                            className={styles.personalDetails}
                        >
                            <div className="w-[45px] h-[45px] 
                            rounded-[50%] flex items-center 
                            justify-center text-2xl transition 
                            ease-in-out text-[#15202B] bg-[#8B98A5]
                             hover:bg-[#1D9BF0] hover:scale-[1.1] 
                             shrink delay-200"
                            >
                                <FiPhone />
                            </div>
                            {/* <p style={{ color: theme.tertiary }}> */}
                            <p>
                                {contactsData.phone}
                            </p>
                        </a>
                        <div className={styles.personalDetails}>
                            <div className="w-[45px] h-[45px]
                             rounded-[50%] flex items-center 
                             justify-center text-2xl transition 
                             ease-in-out text-[#15202B] bg-[#8B98A5]
                              hover:bg-[#1D9BF0] hover:scale-[1.1]
                               shrink delay-200"
                            >
                                <HiOutlineLocationMarker />
                            </div>
                            {/* <p style={{ color: theme.tertiary }}> */}
                            <p>
                                {contactsData.address}
                            </p>
                        </div>

                        <div className={styles.socialmediaIcons}>
                            {socialsData.twitter && (
                                <a
                                    href={socialsData.twitter}
                                    target='_blank'
                                    rel='noreferrer'
                                    className="w-[45px] h-[45px] 
                                    rounded-[50%] flex items-center 
                                    justify-center text-xl transition
                                     ease-in-out text-[#15202B] bg-[#8B98A5]
                                      hover:bg-[#1D9BF0]"
                                >
                                    <FaTwitter aria-label='Twitter' />
                                </a>
                            )}
                            {socialsData.github && (
                                <a
                                    href={socialsData.github}
                                    target='_blank'
                                    rel='noreferrer'
                                    className="w-[45px] h-[45px] 
                                    rounded-[50%] flex items-center justify-center
                                     text-xl transition ease-in-out text-[#15202B]
                                      bg-[#8B98A5] hover:bg-[#1D9BF0]"
                                >
                                    <FaGithub aria-label='GitHub' />
                                </a>
                            )}
                            {socialsData.linkedIn && (
                                <a
                                    href={socialsData.linkedIn}
                                    target='_blank'
                                    rel='noreferrer'
                                    className="w-[45px] h-[45px] rounded-[50%] flex 
                                    items-center justify-center text-xl transition 
                                    ease-in-out text-[#15202B] bg-[#8B98A5] 
                                    hover:bg-[#1D9BF0]"
                                >
                                    <FaLinkedinIn aria-label='LinkedIn' />
                                </a>
                            )}

                           



                            {socialsData.stackOverflow && (
                                <a
                                    href={socialsData.stackOverflow}
                                    target='_blank'
                                    rel='noreferrer'
                                    className="w-[45px] h-[45px] rounded-[50%] flex 
                                    items-center justify-center text-xl transition 
                                    ease-in-out text-[#15202B] bg-[#8B98A5] 
                                    hover:bg-[#1D9BF0]"
                                >
                                    <FaStackOverflow aria-label='Stack Overflow' />
                                </a>
                            )}
                            {socialsData.facebook && (
                                <a
                                    href={socialsData.facebook}
                                    target='_blank'
                                    rel='noreferrer'
                                    className="w-[45px] h-[45px] rounded-[50%] flex
                                     items-center justify-center text-xl transition
                                      ease-in-out text-[#15202B] bg-[#8B98A5]
                                       hover:bg-[#1D9BF0]"
                                >
                                    <FaFacebook aria-label='facebook' />
                                </a>
                            )}
                        </div>

        </div>




    </div>
    </div>
    <Image
      src="/contactImg.jpeg"
      alt='contacts'
      width={100}
      height={100}
      className={styles.contactsImg}
    />
    </div>
  )
}

export default Contacts;
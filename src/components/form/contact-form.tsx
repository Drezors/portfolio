"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaMailBulk } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaX, FaFacebook, FaInstagram, FaPhone, FaMailchimp, FaEnvelope, FaLocationArrow, FaLocationPin, FaLocationPinLock } from "react-icons/fa6";

export default function Header() {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phoneNumber: '',
        message: '',
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
      };
    
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Logique d'envoi du formulaire ici
        console.log(formData);
      };
      
    return(
        <section className="px-6 md:px-32 py-12 grid grid-cols-6 md:grid-cols-12 gap-16 text-usual-100 items-center">
            <div className="col-span-6 flex flex-col p-8 md:p-14 bg-usual-950 rounded-2xl gap-6 order-2 md:order-1">
                <h2 className="text-3xl font-bold">Let's work together</h2>
                <p>I design and code beautifully simple things and i love what i do. Just simple like that!</p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="flex flex-col md:flex-row gap-6 w-full">
                        <div className="flex flex-col gap-2 w-full">
                            <input className="px-4 py-2.5 rounded-lg border border-usual-200 dark:border-usual-700 bg-usual-950 dark:bg-usual-900 flex flex-row gap-2 items-center w-full" type="text" name="" id="" placeholder="Firstname" />
                            {/* <span></span> Error Message*/}
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <input className="px-4 py-2.5 rounded-lg border border-usual-200 dark:border-usual-700 bg-usual-950 dark:bg-usual-900 flex flex-row gap-2 items-center w-full" type="text" name="" id="" placeholder="Lastname" />
                            {/* <span></span> Error Message*/}
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 w-full">
                        <div className="flex flex-col gap-2 w-full">
                            <input className="px-4 py-2.5 rounded-lg border border-usual-200 dark:border-usual-700 bg-usual-950 dark:bg-usual-900 flex flex-row gap-2 items-center w-full" type="text" name="" id="" placeholder="Email" />
                            {/* <span></span> Error Message*/}
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <input className="px-4 py-2.5 rounded-lg border border-usual-200 dark:border-usual-700 bg-usual-950 dark:bg-usual-900 flex flex-row gap-2 items-center w-full" type="text" name="" id="" placeholder="Phone" />
                            {/* <span></span> Error Message*/}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <input className="px-4 py-2.5 rounded-lg border border-usual-200 dark:border-usual-700 bg-usual-950 dark:bg-usual-900 flex flex-row gap-2 items-center w-full" type="text" name="" id="" placeholder="Message" />
                        {/* <span></span> Error Message*/}
                    </div>
                    <button type="submit" className="bg-gradient-to-br from-primary-500 to-primary-200 hover:from-primary-400 hover:to-secondary-500 text-usual-50 rounded-full w-fit px-4 py-2">Envoyer ma demande</button>
                </form>
            </div>
            <div className="col-span-6 flex flex-col gap-8 order-1 md:order-2">
                <div className="flex flex-row gap-4 md:gap-8 items-center">
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="p-4 bg-gradient-to-br from-primary-500 to-primary-200 hover:from-primary-400 hover:to-secondary-500 text-usual-50 rounded-full">
                        <FaPhone className="h-6 w-6"/>
                    </motion.div>
                    <div className="flex flex-col gap-2">
                        <p>Phone</p>
                        <span className="font-bold">+33 782 13 55 39</span>
                    </div>
                </div>
                <div className="flex flex-row gap-4 md:gap-8 items-center">
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="p-4 bg-gradient-to-br from-primary-500 to-primary-200 hover:from-primary-400 hover:to-secondary-500 text-usual-50 rounded-full">
                        <FaEnvelope className="h-6 w-6"/>
                    </motion.div>
                    <div className="flex flex-col gap-2">
                        <p>Email</p>
                        <span className="font-bold">pro.@gmail.com</span>
                    </div>
                </div>
                <div className="flex flex-row gap-4 md:gap-8 items-center">
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="p-4 bg-gradient-to-br from-primary-500 to-primary-200 hover:from-primary-400 hover:to-secondary-500 text-usual-50 rounded-full">
                        <FaLocationPin className="h-6 w-6"/>
                    </motion.div>
                    <div className="flex flex-col gap-2">
                        <p>Address</p>
                        <span className="font-bold">1 rue de la victoire</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
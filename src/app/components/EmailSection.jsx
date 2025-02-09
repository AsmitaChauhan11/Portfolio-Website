"use client";
import React, { useState } from 'react'
import github from '../../../public/image/github.svg'
import linkedin from '../../../public/image/linkedin.svg'
import Link from 'next/link'
import Image from 'next/image'
import emailjs from "@emailjs/browser";

const EmailSection = () => {

    const [formData, setFormData] = useState({
        email: "",
        subject: "",
        message: "",
      });
      
      const [status, setStatus] = useState(""); 
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const sendEmail = (e) => {
        e.preventDefault(); 
    
        emailjs
          .send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, 
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, 
            {
              from_email: formData.email, 
              subject: formData.subject, 
              message: formData.message, 
            },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY 
          )
          .then(
            (response) => {
              console.log("SUCCESS!", response.status, response.text);
              setStatus("Message sent successfully! ✅");
              setFormData({ email: "", subject: "", message: "" }); 
            },
            (error) => {
              console.log("FAILED...", error);
              setStatus("Failed to send message. ❌ Please try again.");
            }
          );
      };
      return (
        <section>
          <h2 className="text-center text-4xl font-bold text-white mt-16">Contact Me</h2>
          <section className="grid md:grid-cols-2 my-8 md:my-8 py-20 gap-4">
            <div>
              <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
              <p className="text-[#ADB7BE] mb-4 max-w-md">
                I'm actively looking for exciting job opportunities and would love to connect! If you're hiring or just want to chat, feel free to reach out—I can't wait to connect and apply! 😊✨
              </p>
              <div className="socials flex flex-row gap-6">
                <Link href="https://github.com/AsmitaChauhan11">
                  <Image src={github} alt="Github Icon"/>
                </Link>
                <Link href="https://www.linkedin.com/in/asmita-chauhan-aa8a0b249/">
                  <Image src={linkedin} alt="Linkedin Icon"/>
                </Link>
              </div>
            </div>
            <div>
              <form onSubmit={sendEmail} className="flex flex-col">
                <div className="mb-6">
                  <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" 
                    required 
                    placeholder="abc@gmail.com" 
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" 
                    required 
                    placeholder="Complaint/Query" 
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 h-32" 
                    required 
                    placeholder="Hi, I want to...."
                  />
                </div>
                <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
                  Send Message
                </button>
                {status && <p className="text-white mt-4">{status}</p>} {/* Success/Error message */}
              </form>
            </div>
          </section>
        </section>
      );
    };
    
    export default EmailSection;
     
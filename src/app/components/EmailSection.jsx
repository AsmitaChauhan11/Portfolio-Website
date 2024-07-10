import React from 'react'
import instagram from '../../../public/image/instagram.svg'
import linkedin from '../../../public/image/linkedin.svg'
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
  return (
    
    <section>
        <h2 className='text-center text-4xl font-bold text-white mt-16'>Contact Me</h2>
        <section className='grid md:grid-cols-2 my-8 md:my-8 py-20 gap-4'>
            <div>
                <h5 className='text-xl font-bold text-white my-2'> Let's Connect </h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    {" "}
                    I'm currently lookinf for new opportunities, my inbox is always open. 
                    Whether you have question or just want to say hi, I'll try my best 
                    to get back to you.
                </p>
                <div className='socials flex flex-row gap-6'>
                    <Link href="instagram.com">
                        <Image src={instagram} alt="Instagram Icon"/>
                    </Link>
                    <Link href="linkedin.com">
                        <Image src={linkedin} alt="Linkedin Icon"/>
                    </Link>
    
                </div>
            </div>
            <div>
                <form className='flex flex-col'>
                    <div className='mb-6'>
                        <label htmlFor='email' className='text-white block mb-2 text-sm font-medium'>Your Email</label>
                        <input type='email' id='email' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' required placeholder='abc@gmail.com' />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor='subject' className='text-white block mb-2 text-sm font-medium'>Subject</label>
                        <input type='text' id='subject' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' required placeholder='Complaint/Query' />
                    </div>
                    <button type='submit' className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'> Send Message </button>
                </form>
            </div>
        </section>
    </section>
  )
}

export default EmailSection
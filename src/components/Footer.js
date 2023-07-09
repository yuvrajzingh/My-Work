import React from 'react'
// image
import Image from '../assets/contact1.gif'
//motion
import { motion } from 'framer-motion';
//variant
import { fadeIn } from '../variants';
// icons
import { FaGithub, FaLinkedin, FaInstagram, FaMailBulk, FaEnvelope, } from 'react-icons/fa';

export const Footer = () => {
  return (
    <section className='bg-black '>
        <div className="flex flex-row">
            <div className=''>
                <motion.img
                 variants={fadeIn('right', 0.2)}
                 initial="hidden"
                 whileInView={"show"}
                 viewport={{once: false, amount: 0.3}}  
                src={Image} alt="" className='h-[55vh]'/>
            </div>
            <div className='font-bold text-3xl m-10'>
                <motion.p
                variants={fadeIn('down', 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.3}}
                >If you like my work, do contact me</motion.p>

                <ul className='my-10'>
                  <li>
                    <a href="" className='flex gap-x-2 m-5'> <FaEnvelope/> yuvisingh1810@gmail</a>
                  </li>
                  <li>
                    <a href="" className='flex gap-x-2 m-5'> <FaGithub/> Github</a>
                  </li>
                  <li>
                    <a href="" className='flex gap-x-2 m-5'> <FaLinkedin/> LinkedIn</a>
                  </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

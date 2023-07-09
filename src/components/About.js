import React from 'react'
// image
import Image from '../assets/about.png'
//motion
import { motion } from 'framer-motion';
//variant
import { fadeIn } from '../variants';


export const About = () => {
  return (
    <section className='container mx-auto h-full'>
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-1 lg:gap-y-0 ">
            <motion.div 
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}} 
            className='flex-1 '>
                <img src={Image} alt="" className='mx-auto h-[400px]'/>
            </motion.div>
            <motion.div
             variants={fadeIn('left', 0.2)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once: false, amount: 0.3}} 
            className='flex-1 font-bold text-6xl '>
                <p >Here are all of my personal projects.<br/><span className='text-3xl'>Hope you like it!</span></p> 
            </motion.div>
        </div>
    </section>
  )
}

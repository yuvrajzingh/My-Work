import React from 'react'
// // image
import Image from '../assets/down-arrow.png'
//motion
import { motion } from 'framer-motion';
//variant
import { fadeIn } from '../variants';



export const Banner = () => {
  return (
    // <section className='bg-banner bg-cover h-[75vh] bg-blend-darken relative'>
    //     <div className='px-20 py-20 absolute'>
    //         <h1 className='text-9xl font-bold'>MY <br />WORK</h1>
    //     </div>
    // </section>
    <section className='h-screen w-full '>
        <div className='bg-banner h-screen w-full bg-fixed bg-cover relative brightness-90'>
            {/* <img src={Image} alt="" className='w-full h-full object-cover absolute mix-blend-overlay brightness-75 ' /> */}
            
        </div>
        <div className='px-20 py-10 absolute top-20'>
                <motion.h1 
                variants={fadeIn('right', 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.3}} 
                className='text-9xl font-bold text-white my-auto'>MY<br />WORK</motion.h1>
                <div><motion.img 
                variants={fadeIn('down', 1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.3}} 
                src={Image} alt="" className=' my-28' /></div>
        </div>
    </section>
  )
}

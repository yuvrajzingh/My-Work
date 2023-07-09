import React from 'react'
//motion
import { motion } from 'framer-motion';
//variant
import { fadeIn } from '../variants';
// image
import Image from '../assets/about.png'

export const Cards = () => {
  return (
    <section className='mx-auto container'>
        <div className='py-20'>
            {/* Cards */}
            <div className='grid grid-cols-3 lg:grid-rows gap-x-12'>
                {/* card 1 */}   
                <motion.div
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.3}}  
                className='my-10'>
                    <a href="">
                        <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                            <img src={Image} alt="" />
                            <div className='px-6 py-4 bg-white'>
                                <div className='font-bold text-xl mb-2 text-center text-black'>PROJECT</div>
                            </div>
                        </div>
                    </a>
                </motion.div>
                {/* card 1 */}   
                <motion.div
                variants={fadeIn('up', 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.3}}  
                className='my-10'>
                    <a href="">
                        <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                            <img src={Image} alt="" />
                            <div className='px-6 py-4 bg-white'>
                                <div className='font-bold text-xl mb-2 text-center text-black'>PROJECT</div>
                            </div>
                        </div>
                    </a>
                </motion.div>
                {/* card 1 */}   
                <motion.div
                variants={fadeIn('up', 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.3}}  
                className='my-10'>
                    <a href="">
                        <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                            <img src={Image} alt="" />
                            <div className='px-6 py-4 bg-white'>
                                <div className='font-bold text-xl mb-2 text-center text-black'>PROJECT</div>
                            </div>
                        </div>
                    </a>
                </motion.div>
                {/* card 1 */}   
                <motion.div
                variants={fadeIn('up', 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.3}}  
                className='my-10'>
                    <a href="">
                        <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                            <img src={Image} alt="" />
                            <div className='px-6 py-4 bg-white'>
                                <div className='font-bold text-xl mb-2 text-center text-black'>PROJECT</div>
                            </div>
                        </div>
                    </a>
                </motion.div>
                {/* card 1 */}   
                <motion.div
                variants={fadeIn('up', 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.3}}  
                className='my-10'>
                    <a href="">
                        <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                            <img src={Image} alt="" />
                            <div className='px-6 py-4 bg-white'>
                                <div className='font-bold text-xl mb-2 text-center text-black'>PROJECT</div>
                            </div>
                        </div>
                    </a>
                </motion.div>
                {/* card 1 */}   
                <motion.div
                variants={fadeIn('up', 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.3}}  
                className='my-10'>
                    <a href="">
                        <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                            <img src={Image} alt="" />
                            <div className='px-6 py-4 bg-white'>
                                <div className='font-bold text-xl mb-2 text-center text-black'>PROJECT</div>
                            </div>
                        </div>
                    </a>
                </motion.div>
                {/* card 1 */}   
                <motion.div
                variants={fadeIn('up', 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.3}}  
                className='my-10'>
                    <a href="">
                        <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                            <img src={Image} alt="" />
                            <div className='px-6 py-4 bg-white'>
                                <div className='font-bold text-xl mb-2 text-center text-black'>PROJECT</div>
                            </div>
                        </div>
                    </a>
                </motion.div>
                {/* card 1 */}   
                <motion.div
                variants={fadeIn('up', 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.3}}  
                className='my-10'>
                    <a href="">
                        <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                            <img src={Image} alt="" />
                            <div className='px-6 py-4 bg-white'>
                                <div className='font-bold text-xl mb-2 text-center text-black'>PROJECT</div>
                            </div>
                        </div>
                    </a>
                </motion.div>
                {/* card 1 */}   
                <motion.div
                variants={fadeIn('up', 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.3}}  
                className='my-10'>
                    <a href="">
                        <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                            <img src={Image} alt="" />
                            <div className='px-6 py-4 bg-white'>
                                <div className='font-bold text-xl mb-2 text-center text-black'>PROJECT</div>
                            </div>
                        </div>
                    </a>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

'use client';

import { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaMoon, FaSun, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { Link as ScrollLink, Element } from 'react-scroll';
import technologies from '@/components/tech';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection] = useState('');

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}
    >
      {/* Header */}
      <header className='flex justify-between items-center px-6 py-4 shadow-md sticky top-0 bg-opacity-80 backdrop-blur-lg z-10 w-full'>
        <img src="/icons/logoblack.png" className='h-7' alt="logo" />
        <nav className='hidden md:flex space-x-6'>
          {['Technologies', 'About Me', 'Projects', 'Contact Me'].map((item) => (
            <ScrollLink
              key={item}
              to={item.toLowerCase().replace(/ /g, '-')}
              smooth={true}
              duration={800}
              className={`cursor-pointer ${activeSection === item.toLowerCase().replace(/ /g, '-') ? 'text-blue-500' : ''}`}
            >
              {item}
            </ScrollLink>
          ))}
        </nav>
        <button onClick={() => setDarkMode(!darkMode)} className='flex items-center space-x-2'>
          {darkMode ? <FaSun /> : <FaMoon />} <span>{darkMode ? 'Light' : 'Dark'} Mode</span>
        </button>
      </header>

      {/* Hero Section */}
      <section className='flex flex-col md:flex-row justify-between items-center gap-10 py-20 px-6'>
        <div className='w-full md:w-1/2 flex flex-col items-center text-center md:text-left'>
          <motion.img
            src='/images/James.jpg'
            alt='MBA FONGANG James'
            className='w-40 h-40 md:w-56 md:h-56 border-4 border-gray-500 rounded-full object-cover mb-4'
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
          <p className='text-2xl font-semibold'>MBA FONGANG James</p>
          <p className='text-gray-600 dark:text-gray-300 mt-2 max-w-sm'>
            Full-Stack Developer | Passionate about crafting scalable web apps and smooth user experiences.
          </p>
          <div className='mt-4 flex flex-wrap gap-4 justify-center md:justify-start'>
            <a href="#projects" className='px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'>View Projects</a>
            <a href="#contact-me" className='px-5 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-100 dark:hover:bg-gray-700 transition'>Contact Me</a>
          </div>
          <div className='mt-4 flex space-x-4'>
            <Link href="#"><FaGithub className='text-xl hover:text-blue-500' /></Link>
            <Link href="#"><FaLinkedin className='text-xl hover:text-blue-500' /></Link>
            <Link href="#"><FaFacebook className='text-xl hover:text-blue-500' /></Link>
            <Link href="#"><FaEnvelope className='text-xl hover:text-blue-500' /></Link>
          </div>
        </div>

        <div className='w-full md:w-1/2 text-center md:text-left'>
          <h1 className='text-3xl md:text-5xl font-bold leading-tight'>
            Hi, I&apos;m James 👋<br />
            <span className='text-blue-600'>Crafting Ideas Into Reality</span>
          </h1>
          <div className='mt-4 text-xl font-medium text-gray-700 dark:text-gray-300'>
            <Typewriter
              words={[' Explore My Work', ' Crafting Web Experiences', ' Building Cool Projects']}
              loop={0}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <Element name='technologies'>
        <section className='py-20 -mt-20 px-6'>
          <motion.h3 className='text-3xl font-semibold mb-6' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>Technologies</motion.h3>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>
            {technologies.map((tech) => (
              <motion.div key={tech.name} className='flex items-center space-x-2 p-4 bg-gray-200 dark:bg-gray-800 rounded-lg' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Image src={tech.icon} alt={tech.name} width={40} height={40} />
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </section>
      </Element>

      {/* Projects Section */}
      <Element name='projects'>
        <section className='py-20 px-6'>
          <motion.h3 className='text-3xl font-semibold mb-6' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>Projects</motion.h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {Array.from({ length: 8 }).map((_, index) => (
              <motion.a key={index} href='#' className='block p-4 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Image src='/project-image.jpg' alt='Project' width={300} height={200} className='rounded' />
                <h4 className='mt-2 text-xl font-semibold'>Project {index + 1}</h4>
                <p className='text-sm text-gray-600 dark:text-gray-400'>A brief description of the project.</p>
              </motion.a>
            ))}
          </div>
        </section>
      </Element>


      {/* Updated Contact Section */}
      <Element name='contact-me'>
        <section className='py-20 px-6 md:px-32'>
          <motion.div className='grid grid-cols-1 md:grid-cols-2 gap-10' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            {/* Left side - contact info */}
            <div className='space-y-6'>
              <h3 className='text-4xl font-bold'>Contact Me</h3>
              <p className="mt-4 pl-5 text-lg text-gray-600 dark:text-gray-500 max-w-2xl">
                Have a project or idea in mind? Reach out and let’s make it happen!
              </p>
              <div className='flex pl-5 items-center gap-4'>
                <FaPhoneAlt className='text-blue-600 text-2xl' />
                <span className='text-lg'>+33 7 51 46 03 55</span>
              </div>
              <div className='flex pl-5 items-center gap-4'>
                <FaEnvelope className='text-blue-600 text-2xl' />
                <span className='text-lg'>mbajames122@gmail.com</span>
              </div>
              <div className='flex pl-5 items-center gap-4'>
                <FaMapMarkerAlt className='text-blue-600 text-2xl' />
                <span className='text-lg'>Ris Orangis ,91130 Ile-de-France, France</span>
              </div>
            </div>

            {/* Right side - form */}
            <form className='space-y-4'>
              <div className='flex gap-4'>
                <input type='text' placeholder='First Name' className='w-1/2 p-3 rounded bg-gray-200 dark:bg-gray-800' />
                <input type='text' placeholder='Last Name' className='w-1/2 p-3 rounded bg-gray-200 dark:bg-gray-800' />
              </div>
              <input type='email' placeholder='Email' className='w-full p-3 rounded bg-gray-200 dark:bg-gray-800' />
              <textarea placeholder='Message' className='w-full p-3 rounded bg-gray-200 dark:bg-gray-800 h-32'></textarea>
              <button className='w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition'>Submit</button>
            </form>
          </motion.div>
        </section>
      </Element>


      {/* Footer */}
      <footer className='py-6 text-center bg-gray-200 dark:bg-gray-800'>
        <div className='flex justify-center space-x-4'>
          <Link href="#"><FaGithub className='text-2xl' /></Link>
          <Link href="#"><FaLinkedin className='text-2xl' /></Link>
          <Link href="#"><FaFacebook className='text-2xl' /></Link>
          <Link href="#"><FaEnvelope className='text-2xl' /></Link>
        </div>
        <p className='mt-2'>&copy; 2025 My Portfolio. All rights reserved.</p>
      </footer>
    </motion.div>
  );
}

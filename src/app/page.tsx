'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaMoon, FaSun } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { Link as ScrollLink, Element } from 'react-scroll';
import technologies from '@/components/tech';
import LinkPreview from '@ashwamegh/react-link-preview'
import '@ashwamegh/react-link-preview/dist/index.css'

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className={darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}>
      {/* Header */}
      <header className='flex justify-between items-center px-6 py-4 shadow-md sticky top-0 bg-opacity-80 backdrop-blur-lg z-10 w-full'>
        <h1 className='text-2xl font-bold'>My Portfolio</h1>
        <nav className='hidden md:flex space-x-6'>
          {['Technologies', 'About Me', 'Projects', 'Contact Me'].map((item) => (
            <ScrollLink key={item} to={item.toLowerCase().replace(/ /g, '-')} smooth={true} duration={800} className={`cursor-pointer ${activeSection === item.toLowerCase().replace(/ /g, '-') ? 'text-blue-500' : ''}`}>
              {item}
            </ScrollLink>
          ))}
        </nav>
        <button onClick={() => setDarkMode(!darkMode)} className='flex items-center space-x-2'>
          {darkMode ? <FaSun /> : <FaMoon />} <span>{darkMode ? 'Light' : 'Dark'} Mode</span>
        </button>
      </header>
      {/* New Header Section */}
      <section className='flex flex-col md:flex-row justify-between items-center py-20 px-6'>
        <h1 className='text-5xl font-bold'>Explore My Work</h1>
        <motion.img src='/animated-header.gif' alt='Animated' className='w-1/2' initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} />
      </section>

      {/* Technologies Section */}
      <Element name='technologies'>
        <section className='py-20 px-6'>
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

      {/* About Me Section */}
      <Element name='about-me'>
        <section className='py-20 px-6 text-left'>
          <motion.h3 className='text-3xl font-semibold mb-6' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>About Me</motion.h3>
          <p className='text-justify'>I am a passionate developer with X years of experience...</p>
        </section>
      </Element>

      {/* Contact Section */}
      <Element name='contact-me'>
        <section className='py-20 px-6'>
          <motion.h3 className='text-3xl font-semibold mb-6' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>Contact Me</motion.h3>
          <form className='max-w-lg mx-auto space-y-4'>
            <input type='text' placeholder='Name' className='w-full p-3 rounded bg-gray-200 dark:bg-gray-800' />
            <input type='email' placeholder='Email' className='w-full p-3 rounded bg-gray-200 dark:bg-gray-800' />
            <textarea placeholder='Message' className='w-full p-3 rounded bg-gray-200 dark:bg-gray-800'></textarea>
            <button className='w-full p-3 bg-blue-600 text-white rounded'>Send Message</button>
          </form>
        </section>
      </Element>

      <div>
        <LinkPreview url='https://glitzteck.com'
        width={'200px'}
      customDomain='https://lpdg-server.azurewebsites.net/parse/link' />
      </div>
      {/* Footer */}
      <footer className='py-6 text-center bg-gray-200 dark:bg-gray-800'>
        <div className='flex justify-center space-x-4'>
          <Link href='#'><FaGithub className='text-2xl' /></Link>
          <Link href='#'><FaLinkedin className='text-2xl' /></Link>
          <Link href='#'><FaFacebook className='text-2xl' /></Link>
          <Link href='#'><FaEnvelope className='text-2xl' /></Link>
        </div>
        <p className='mt-2'>&copy; 2025 My Portfolio. All rights reserved.</p>
      </footer>
    </motion.div>
  );
}
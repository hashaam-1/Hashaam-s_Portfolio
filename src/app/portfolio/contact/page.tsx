import ContactUs from '@/components/ContactUs';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Hashaam Ahmed - MERN Stack Developer',
  description:
    'Get in touch with Hashaam Ahmed, a MERN Stack Developer specializing in React, Node.js, MongoDB, and responsive UI development. Available for freelance work, collaborations, and tech projects.',
  keywords: [
    'Hashaam Ahmed',
    'Hashaam',
    'Hashaam Portfolio',
    'Mern',
    'Hire',
    'Hire Me',
    'Gandhinagar',
    'Ahmedabad',
    'Portfolio',
    'Modern Portfolio',
    '7623057936',
    'Contact MERN Developer',
    'Contact React Developer',
    'MERN Stack Developer',
    'Node.js Developer',
    'Full Stack Developer',
    'Freelance Web Developer',
    'Next.js Portfolio',
    'dushyantsolanki.dev@gmail.com',
    '7623057936'
  ],
  creator: 'Hashaam Ahmed',
  publisher: 'Hashaam Ahmed',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  metadataBase: new URL('https://portfolio-dev-dushyant.vercel.app'),
  alternates: {
    canonical: 'https://portfolio-dev-dushyant.vercel.app/portfolio/contact',
  },
  openGraph: {
    title: 'Contact | Hashaam Ahmed - MERN Stack Developer',
    description:
      'Looking to collaborate or hire? Contact Hashaam Ahmed, a full-stack MERN Developer with skills in React, Next.js, Node.js, and MongoDB.',
    url: 'https://portfolio-dev-dushyant.vercel.app/portfolio/contact',
    siteName: 'Portfolio of Hashaam Ahmed',
    images: [
      {
        url: '/open_graph.png',
        width: 1200,
        height: 630,
        alt: 'Hashaam Ahmed - Contact Page Open Graph Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const Contact = () => {
  return (
    <article>
      <header className="mb-4">
        <h1 className="mb-3 text-2xl font-semibold"> Contact </h1>
        <div className="h-1 w-12 rounded-md bg-green-400"></div>
      </header>

      <section className="mb-4">
        <section className="relative mb-[30px] h-[400px] w-full overflow-hidden rounded-2xl border border-[#383838] lg:h-[500px]">
          <figure className="h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.1234567890123!2d73.057000!3d33.643500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfabc1234567%3A0x8abcdef123456789!2s6th%20Road%2C%20Satellite%20Town%2C%20Rawalpindi%2C%20Punjab!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              className="h-full w-full border-none grayscale invert filter"
              loading="lazy"
            ></iframe>
          </figure>
        </section>
      </section>

      <ContactUs />
    </article>
  );
};

export default Contact;

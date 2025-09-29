import { ArrowDownToLine, Send } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import type { Metadata } from 'next';
import { TestimonialCard } from '@/components/TestimonialCard';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'About | Hashaam Ahmed - MERN Stack Developer',
  manifest: '/manifest.webmanifest',
  verification: {
    google: 'OBn1HWCiR3_f-0rm_1He_vnCyzDe5EVjutjILllFoPs',
  },
  description:
    'Learn more about Hashaam Ahmed, a MERN Stack Developer with expertise in React, Next.js, Node.js, and MongoDB. Discover his background, experience, and passion for building modern web applications.',
  keywords: [
    'Hashaam Ahmed',
    'Hashaam',
    'Hashaam Portfolio',
    'Mern',
    'Portfolio',
    'Hire',
    'Hire Me',
    'Pakistan',
    'Islamabad',
    'Modern Portfolio',
    '7623057936',
    'About MERN Developer',
    'MERN Stack Developer',
    'React Developer',
    'Full Stack JavaScript Developer',
    'Node.js Developer',
    'Web Developer Portfolio',
    'Next.js Developer',
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
    canonical: 'https://portfolio-dev-dushyant.vercel.app/portfolio/about',
  },
  openGraph: {
    title: 'About | Hashaam Ahmed - MERN Stack Developer',
    description:
      'Meet Hashaam Ahmed, a passionate MERN Stack Developer skilled in building scalable web apps using React, Node.js, and MongoDB.',
    url: 'https://portfolio-dev-dushyant.vercel.app/portfolio/about',
    siteName: 'Portfolio of Hashaam Ahmed',
    images: [
      {
        url: '/open_graph.png', // Make sure this exists in /public
        width: 1200,
        height: 630,
        alt: 'Hashaam Ahmed - MERN Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

interface TestimonialData {
  avatar: string;
  name: string;
  testimonial: string;
}

const TestimonialCards: React.FC = () => {
  const testimonials: TestimonialData[] = [
    {
      avatar: '/avatar-1.png',
      name: 'John Doe',
      testimonial:
        'Hashaam is focused, reliable, and always delivers high-quality code within tight deadlines',
    },
    {
      avatar: '/avatar-1.png',
      name: 'Thomson',
      testimonial:
        'His attention to detail and ability to adapt quickly make him incredibly dependable.',
    },
    {
      avatar: '/avatar-1.png',
      name: 'Evans',
      testimonial:
        'Working with Hashaam has been smooth—he’s professional, efficient, and a strong team player',
    },
  ];

  return (
    <div className="w-full max-w-full overflow-hidden">
      <div
        className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto py-4 pt-8 lg:grid lg:grid-cols-3 lg:gap-12 lg:overflow-x-hidden"
        style={{ scrollBehavior: 'smooth' }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 snap-center lg:flex-shrink"
          >
            <TestimonialCard
              avatar={testimonial.avatar}
              name={testimonial.name}
              testimonial={testimonial.testimonial}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const About = () => {
  const tech = [
    { name: 'Node.js', url: 'https://www.svgrepo.com/show/378837/node.svg' },
    {
      name: 'JavaScript',
      url: 'https://www.svgrepo.com/show/303206/javascript-logo.svg',
    },
    { name: 'React', url: 'https://www.svgrepo.com/show/452092/react.svg' },
    { name: 'HTML5', url: 'https://www.svgrepo.com/show/452228/html-5.svg' },
    { name: 'CSS3', url: 'https://www.svgrepo.com/show/452185/css-3.svg' },
    {
      name: 'Tailwind',
      url: 'https://www.svgrepo.com/show/374118/tailwind.svg',
    },
    {
      name: 'Express.js',
      url: 'https://www.svgrepo.com/show/330398/express.svg',
    },
    {
      name: 'Fastify',
      url: 'https://www.svgrepo.com/show/353729/fastify-icon.svg',
    },
    { name: 'Socket.io', url: 'https://socket.io/images/logo-dark.svg' },
    { name: 'Mongo DB', url: 'https://www.svgrepo.com/show/373845/mongo.svg' },
    {
      name: 'Next.js',
      url: 'https://www.svgrepo.com/show/378440/nextjs-fill.svg',
    },
    { name: 'Git', url: 'https://www.svgrepo.com/show/452210/git.svg' },
    {
      name: 'Material UI',
      url: 'https://www.svgrepo.com/show/354048/material-ui.svg',
    },
    {
      name: 'TypeScript',
      url: 'https://www.svgrepo.com/show/354478/typescript-icon.svg',
    },
    { name: 'Linux', url: 'https://www.svgrepo.com/show/448236/linux.svg' },
    {
      name: 'Firebase',
      url: 'https://www.svgrepo.com/show/353735/firebase.svg',
    },
    {
      name: 'N8N',
      url: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/n8n.svg',
    },

  ];

  return (
    <article>
      <header className="mb-4">
        <h1 className="mb-3 text-2xl font-semibold"> About Me </h1>
        <div className="h-1 w-12 rounded-md bg-green-400"></div>
      </header>

      <section className="mb-8">
        <div className="flex flex-col-reverse items-center justify-between lg:flex-row lg:items-start">
          <div className="box-border pt-8 lg:pr-36">
            <p>
              I'm a MERN Stack Developer with 3+ years of hands-on experience
              crafting responsive and scalable web applications. I specialize in
              both frontend and backend development, with a solid foundation in
              JavaScript, TypeScript, and modern frameworks like React.js,
              Next.js, Node.js, and MongoDB.
            </p>
            <br />
            <p>
              On the backend, I’ve worked with Express and Fastify to build
              RESTful APIs, while integrating Socket.IO for real-time
              functionality. On the frontend, I focus on clean, accessible UI
              development using Tailwind CSS, Material UI, and Styled
              Components.
            </p>
            <br />
            <p>
              I’m passionate about writing clean, maintainable code,
              collaborating with teams using Git, and continually learning to
              stay updated with the latest in web development.
            </p>

            <div className="my-8 flex gap-2">
              <a
                href="/HashaamResume.pdf"
                download
                className="relative z-10 mr-1 flex w-34 cursor-pointer items-center justify-start gap-2 rounded-md bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] py-2 pr-8 pl-3 text-gray-200/80 shadow-[0_16px_40px_rgba(0,0,0,0.25)] transition duration-250 ease-in-out before:absolute before:inset-[1px] before:z-[-1] before:rounded-[inherit] before:bg-[#252525ea] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:transition before:duration-250 before:ease-in-out before:content-[''] hover:bg-green-300"
              >
                <span>
                  <ArrowDownToLine className="h-4 w-4 text-green-500" />
                </span>
                Resume
              </a>
              <Link
                href="/portfolio/contact"
                className="relative z-10 mr-1 flex w-38 cursor-pointer items-center justify-start gap-2 rounded-md bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] py-2 pl-3 text-gray-200/80 shadow-[0_16px_40px_rgba(0,0,0,0.25)] transition duration-250 ease-in-out before:absolute before:inset-[1px] before:z-[-1] before:rounded-[inherit] before:bg-[#252525ea] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:transition before:duration-250 before:ease-in-out before:content-[''] hover:bg-green-300"
              >
                {' '}
                <span>
                  <Send className="h-4 w-4 text-green-500" />
                </span>
                Contact Me
              </Link>
            </div>
          </div>
          <div>
            <div className="mb-4 flex h-64 w-64 items-center justify-center rounded-2xl bg-white/10 text-4xl">
              <Image
                src="/OG.svg"
                alt="Profile Picture"
                height={600}
                width={600}
              />
            </div>
          </div>
        </div>
      </section>

      <header className="mb-8">
        <h1 className="mb-3 text-2xl font-semibold"> Technology </h1>
      </header>

      <section className="mb-8 flex flex-wrap gap-8">
        <TooltipProvider>
          <div className="flex flex-wrap justify-center gap-8 lg:justify-start lg:gap-6">
            {tech.map((item, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <div className="relative z-10 flex w-36 items-center justify-center rounded-md bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] p-4 text-[#07ff45c0] shadow-[0_16px_40px_rgba(0,0,0,0.25)] transition duration-250 ease-in-out before:absolute before:inset-[1px] before:z-[-1] before:rounded-[inherit] before:bg-[#252525ea] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:transition before:duration-250 before:ease-in-out before:content-['']">
                    <Image
                      width={70}
                      height={70}
                      src={item.url}
                      alt={item.name}
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </section>
      <div className="mt-16">
        <header className="mb-4">
          <h1 className="mb-3 text-2xl font-semibold"> Testimonial </h1>
        </header>

        <section>
          <TestimonialCards />
        </section>
      </div>
    </article>
  );
};

export default About;

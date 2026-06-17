import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';
import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-dev-dushyant.vercel.app'),
  title: 'Work | Hashaam Ahmed',
  description:
    'Explore a collection of professional and personal projects built using React, Node.js, MongoDB, and more.',
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
    'Projects',
    'React',
    'Node.js',
    'MongoDB',
    'Full Stack',
    'Hashaam Ahmed',
    '7623057936',
  ],
  openGraph: {
    title: 'Hashaam Ahmed - Work',
    description:
      'Showcasing projects including Task Mate, Go Din Din, Zirotix, and more.',
    url: 'https://portfolio-dev-dushyant.vercel.app/portfolio/work',
    siteName: 'Hashaam Ahmed Portfolio',
    images: [
      {
        url: '/open_graph.png',
        width: 1200,
        height: 630,
        alt: 'Hashaam Ahmed Portfolio',
      },
    ],
    type: 'website',
  },
};

const projects = [
   {
    name: 'MOH Capital Overseas - A Multi-vendor E-commerce Platform',
    description:
      'MOH Capital Overseas is a B2B agricultural marketplace that connects farmers, suppliers, and global buyers, enabling seamless trade of fruits, vegetables, spices, and other agricultural products while ensuring quality, compliance, and efficient supply chain management.',
    technologies: [
      'Next.js',
      'React',
      'Shadcn UI',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'MongoDB',
      'Socket.io',
      'Personal',
    ],
    link: 'https://www.mohcapitaloverseas.com/',
    image: '/MOHCapital.png',
  },
  {
    name: 'ACSSLC - CRM',
    description:
      'CRM software helps businesses manage customer data, track sales, automate tasks, and improve service. It boosts efficiency, builds stronger relationships, and drives growth.',
    technologies: [
      'React',
      'Shadcn UI',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'MongoDB',
      'Socket.io',
      'Personal',
    ],
    image: '/CRMLLC.png',
  },
  {
    name: 'HHTechHub - IT Company Site',
    description:
      'HHTech Hub is a modern IT solutions company providing services in web development, mobile apps, software, CRM/ERP systems, and digital solutions to help businesses grow with technology.',
    technologies: [
      'React',
      'Shadcn UI',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'MongoDB',
      'Socket.io',
      'Personal',
    ],
    link: 'https://hhtechhub.com/',
    image: '/HHTechHub.png',
  },
  {
    name: 'Hospital Management System - HMS',
    description:
      'A Hospital Management System is software that manages patient records, appointments, billing, staff, and inventory. It improves efficiency, reduces paperwork, and enhances patient care.',
    technologies: [      
      'React',
      'Shadcn UI',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'MongoDB',
      'Socket.io',
      'Personal',],
    image: '/HMS.png',
  },
  {
    name: 'Clicksy - A Buffer Web App',
    description:
      'Clicky is a buffer app that helps you schedule and automate social media posts across multiple platforms. It saves time, ensures consistent posting, boosts engagement, and makes managing content simple and efficient.',
    technologies: [
      'React',
      'SHADcn UI',
      'Tailwind CSS',
      'OTPLESS',
      'Node JS',
      'Express',
      'Mongo DB',
      'Company',
    ],
    image: '/zirotix.svg',
  },
  {
    name: 'Ecommerce Hub - Shopify Clone',
    description:
      'Ecommerce Hub is a Shopify clone that lets you create and manage online stores with product listings, payments, and order tracking. It’s fast, customizable, and easy to use for growing eCommerce businesses.',
    technologies: [
      'React',
      'Material UI',
      'Node.js',
      'Fastify',
      'MongoDB',
      'Socket.io',
      'Company',
    ],
    image: '/peliswan.svg',
  },
  {
    name: 'ErrandBee - Task Management App',
    description:
      'Errand Bee is a delivery and task app that connects users with trusted runners for errands, deliveries, and on-demand services. It saves time, offers real-time tracking, and ensures fast, reliable task completion.',
    technologies: [
      'React',
      'Shadcn UI',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'MongoDB',
      'Socket.io',
      'Personal',
    ],
    image: '/ErrandBeeApp.png',
  },
  {
    name: 'MOH Capital - Accounting Software',
    description:
      'MOH Capital Accounting Software helps businesses manage expenses, invoices, stock, and reports with ease, ensuring accurate and efficient financial management.',
    technologies: [     
      'React',
      'Shadcn UI',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'MongoDB',
      'Socket.io',
      'Personal'],
    image: '/MOHCapital.png',
  },
];

const ProjectCard = ({
  name,
  description,
  technologies,
  link,
  image,
}: {
  name: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
}) => {
  return (
    <div className="relative z-10 w-full max-w-[400px] min-w-[300px] flex-1 rounded-lg bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] py-2 text-gray-200/80 shadow-[0_16px_40px_rgba(0,0,0,0.25)] transition duration-250 ease-in-out before:absolute before:inset-[1px] before:z-[-1] before:rounded-[inherit] before:bg-[#252525ea] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:transition before:duration-250 before:ease-in-out before:content-[''] hover:bg-green-300">
      <div className="flex h-full flex-col p-4">
        <img
          src={image}
          alt={`${name} screenshot`}
          loading="lazy"
          className="mb-8 h-56 w-full rounded-xl object-cover"
        />
        <h3 className="mb-2 text-lg font-semibold text-white">{name}</h3>
        <p className="mb-3 flex-grow text-sm text-gray-300">{description}</p>
        <div className="mt-auto">
          <div className="mb-4 flex flex-wrap gap-2">
            {technologies.map((tech: string, index: number) => (
              <span
                key={index}
                className="rounded-sm bg-black/40 px-2 py-1 text-xs font-medium text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
          {link && (
            <InteractiveHoverButton>
              <Link
                href={link}
                className="inline-block text-sm text-green-300 transition-colors duration-200 hover:underline"
              >
                View Project
              </Link>
            </InteractiveHoverButton>
          )}
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <article>
      <header className="mb-4">
        <h1 className="mb-3 text-2xl font-semibold"> Work </h1>
        <div className="h-1 w-12 rounded-md bg-green-400"></div>
      </header>

      <section className="mb-4">
        <div className="flex flex-wrap justify-start gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              link={project.link as any}
              image={project.image}
            />
          ))}
        </div>
      </section>
    </article>
  );
};

export default Work;

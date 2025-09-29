import { Briefcase, GraduationCap } from 'lucide-react';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume | Hashaam Ahmed  - MERN Stack Developer',
  description:
    'View the professional resume of Hashaam Ahmed, a MERN Stack Developer skilled in React, Node.js, Next.js, and MongoDB. Explore experience, skills, and education.',
  keywords: [
    'Hashaam Ahmed',
    'Hashaam Ahmed Resume',
    'Hashaam',
    'Hashaam Portfolio',
    'Mern',
    'Hire',
    'Hire Me',
    'Pakistan',
    'Islamabad',
    'Portfolio',
    'Modern Portfolio',
    '7623057936',
    'MERN Stack Developer Resume',
    'React Developer Resume',
    'Full Stack Developer CV',
    'JavaScript Developer Resume',
    'Web Developer Resume',
    'Next.js Developer Resume',
    'Node.js Resume',
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
    canonical: 'https://portfolio-dev-dushyant.vercel.app/portfolio/resume',
  },
  openGraph: {
    title: 'Resume | Hashaam Ahmed - MERN Stack Developer',
    description:
      'Explore the resume of Hashaam Ahmed, a full-stack JavaScript developer specializing in the MERN stack, including React, Next.js, Node.js, and MongoDB.',
    url: 'https://portfolio-dev-dushyant.vercel.app/portfolio/resume',
    siteName: 'Portfolio of Hashaam Ahmed',
    images: [
      {
        url: '/open_graph.png', // Recommended: upload this image (1200x630px)
        width: 1200,
        height: 630,
        alt: 'Hashaam Ahmed Resume Preview',
      },
    ],
    locale: 'en_US',
    type: 'profile',
  },
};

const Resume = () => {
  const skills = [
    { name: 'HTML', percentage: 92 },
    { name: 'CSS', percentage: 90 },
    { name: 'JavaScript', percentage: 91 },
    { name: 'TypeScript', percentage: 75 },
    { name: 'React JS', percentage: 90 },
    { name: 'Next JS', percentage: 88 },
    { name: 'Node JS', percentage: 89 },
    { name: 'Express JS', percentage: 88 },
    { name: 'MongoDB', percentage: 85 },
    { name: 'Firebase', percentage: 85 },
    { name: 'Socket.IO', percentage: 80 },
    { name: 'Git', percentage: 85 },
    { name: 'Tailwind CSS', percentage: 90 },
    { name: 'Material UI', percentage: 85 },
    { name: 'Shadcn UI', percentage: 85 },
    { name: 'Deployment', percentage: 75 },
  ];
  return (
    <article>
      <header className="mb-4">
        <h1 className="mb-3 text-2xl font-semibold"> Resume </h1>
        <div className="h-1 w-12 rounded-md bg-green-400"></div>
      </header>

      <section className="mb-4">
        <div className="">
          {/* Experience Section */}
          <div>
            <div className="mb-6 flex items-center">
              <div className="relative z-10 mr-3 rounded-md bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] px-3 py-3 text-[#07ff45c0] shadow-[0_16px_40px_rgba(0,0,0,0.25)] transition duration-250 ease-in-out before:absolute before:inset-[1px] before:z-[-1] before:rounded-[inherit] before:bg-[#252525ea] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:transition before:duration-250 before:ease-in-out before:content-['']">
                <Briefcase className="text-green-500" />
              </div>

              <h2 className="text-2xl font-bold">Experience</h2>
            </div>

            <div className="relative">
              {/* Continuous vertical line for experience - connects to last dot */}
              <div className="absolute -top-6 left-5 h-full w-0.5 bg-white/10"></div>

              <div className="space-y-8">
                {/* 
                                <div className="relative pl-12">
                                    <div className="absolute left-[13px] top-2 w-4 h-4 bg-white/30 rounded-full z-10  after:content-[''] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-2 after:h-2 after:bg-green-500 after:rounded-full"></div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Lemolite Technologies LLP</h3>
                                    <p className="text-gray-400 text-sm mb-3">Aug 2024 - Jan 2025, </p>
                                    <span className='text-gray-100 bg-white/5 py-1 px-2 rounded-sm text-sm '>Mern Stack Intern</span>

                                </div> */}

                <div className="relative pl-12">
                  <div className="absolute top-2 left-[13px] z-10 h-4 w-4 rounded-full bg-white/30 after:absolute after:top-1/2 after:left-1/2 after:h-2 after:w-2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-green-500 after:content-['']"></div>
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    Clickmaster - Islamabad
                  </h3>
                  <p className="mb-3 text-sm text-gray-400">
                    March 2022 - June 2025{' '}
                  </p>
                  <span className="rounded-sm bg-white/5 px-2 py-1 text-sm text-gray-100">
                    Mern Stack Developer
                  </span>
                  <ul className="mt-4 list-inside list-disc space-y-2 leading-relaxed text-gray-300">
                    <li>
                      Developed full-stack web applications using React.js,
                      Next.js, Node.js and MongoDB, ensuring responsive design
                      and performance.
                    </li>
                    <li>
                      Built and maintained scalable REST APIs with Express.js
                      and Fastify, and integrated Socket.IO for real-time
                      functionality.
                    </li>
                    <li>
                      Designed clean, user-friendly interfaces with Tailwind
                      CSS, Material UI, and Styled Components, following modern
                      UX practices.
                    </li>
                    <li>
                      Worked with TypeScript and Git in an Agile environment,
                      focusing on clean code, reusability, and collaboration
                      across teams.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Education Section */}
          <div className="mt-12">
            <div className="mb-6 flex items-center">
              <div className="relative z-10 mr-3 rounded-md bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] px-3 py-3 text-[#07ff45c0] shadow-[0_16px_40px_rgba(0,0,0,0.25)] transition duration-250 ease-in-out before:absolute before:inset-[1px] before:z-[-1] before:rounded-[inherit] before:bg-[#252525ea] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:transition before:duration-250 before:ease-in-out before:content-['']">
                <GraduationCap className="text-green-500" />
              </div>

              <h2 className="text-2xl font-bold">Education</h2>
            </div>

            <div className="relative">
              {/* Continuous vertical line for education - connects to last dot */}
              <div className="absolute -top-6 left-5 h-full w-0.5 bg-white/10"></div>

              <div className="space-y-8">
                {/* PMAS Arid Agriculture University */}
                <div className="relative pl-12">
                  <div className="absolute top-2 left-[13px] z-10 h-4 w-4 rounded-full bg-white/30 after:absolute after:top-1/2 after:left-1/2 after:h-2 after:w-2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-green-500 after:content-['']"></div>

                  <h3 className="mb-2 text-xl font-semibold text-white">
                   PMAS Arid Agriculture University - Rawalpindi
                  </h3>
                  <p className="mb-3 text-sm text-gray-400">2020 — 2024</p>
                  <p className="leading-relaxed text-gray-300">
                    I hold a Bachelor of Science (B.S) in Computer
                    Science from PMAS Arid Agriculture University. My studies provided me with a
                    strong foundation in computer science principles and
                    practical skills, which I apply in my work as a Full Stack
                    Developer and Designer.
                  </p>
                </div>

                {/* The Imperial Science School */}
                <div className="relative pl-12">
                  <div className="absolute top-2 left-[13px] z-10 h-4 w-4 rounded-full bg-white/30 after:absolute after:top-1/2 after:left-1/2 after:h-2 after:w-2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-green-500 after:content-['']"></div>
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    Steps College - Rawalpindi
                  </h3>
                  <p className="mb-3 text-sm text-gray-400">2018 — 2020</p>
                  <p className="leading-relaxed text-gray-300">
                    I completed my high schooling at Steps College
                    Rawalpindi, where I achieved an A+ grade. This solid academic
                    foundation helped shape my passion for technology and set
                    the stage for my further studies in computer engineering.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}

          <div className="mt-12">
            <h2 className="mb-8 text-2xl font-bold">Skills</h2>

            <div className="rounded-2xl  text-white shadow-md shadow-black/5">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {skills.map((skill, index) => (
                  <div key={index} className="mb-4">
                    <div className="mb-1 flex justify-between">
                      <span className="rounded-bl-0 relative z-10 mb-2 rounded-sm rounded-tr-4xl bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] py-0.5 pr-6 pl-2 text-gray-200 shadow-[0_16px_40px_rgba(0,0,0,0.25)] transition duration-250 ease-in-out before:absolute before:inset-[1px] before:z-[-1] before:rounded-[inherit] before:bg-[#252525ea] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:transition before:duration-250 before:ease-in-out before:content-['']">
                        {skill.name}
                      </span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="h-2.5 w-full rounded-full bg-gray-700">
                      <div
                        className="h-2.5 rounded-full bg-green-500"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                    {/* Add separator for non-last items in multi-column layouts */}
                    {index < skills.length - 1 && (
                      <div className="mt-4 hidden border-t border-white/10 md:block md:border-t-0 md:border-r lg:block lg:border-t-0 lg:border-r"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Resume;

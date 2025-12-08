'use client';

import {
  Calendar,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapIcon,
  Phone,
  Menu,
  X,
  Bot,
} from 'lucide-react';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { NumberTicker } from '@/components/NumberTiker';
import ChatBot from '@/components/ChatBot';

const profileData = {
  name: 'Hashaam Ahmed',
  title: 'Full Stack Developer',
  avatar: '/myavatar.png',
  email: 'hashaamamz1@gmail.com',
  phone: '+92 312 8752466',
  birthday: 'June 28, 2002',
  location: 'Islamabad, Pakistan',
};

const navLinks = [
  { name: 'About', href: '/portfolio/about' },
  { name: 'Resume', href: '/portfolio/resume' },
  { name: 'Work', href: '/portfolio/work' },
  { name: 'Contact', href: '/portfolio/contact' },
];

// Sidebar Component
function Sidebar({ count }: { count: number }) {
  return (
    <div className="fixed top-4 flex h-screen scrollbar-hide overflow-y-auto  flex-col">
      {/* Profile Header */}
      <div className="flex flex-col items-center p-8">
        <div className="mb-4 flex h-40 w-40 items-center justify-center rounded-2xl bg-white/10 text-4xl">
          <Image
            src={profileData.avatar}
            alt="Profile Picture"
            height={200}
            width={200}
          />
        </div>
        <h1 className="mb-4 text-2xl font-semibold text-white">
          {profileData.name}
        </h1>
        <p className="relative z-10 mr-1 rounded-md bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] px-4 py-2 text-gray-200/80 shadow-[0_16px_40px_rgba(0,0,0,0.25)] transition duration-250 ease-in-out before:absolute before:inset-[1px] before:z-[-1] before:rounded-[inherit] before:bg-[#252525ea] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:transition before:duration-250 before:ease-in-out before:content-['']">
          {profileData.title}
        </p>
      </div>

      {/* Contact Information */}
      <div className="px-12">
        <Separator className="bg-white/20" />
      </div>
      <div className="flex-1 space-y-1 p-4">
        <ContactItem
          icon={Mail}
          label="EMAIL"
          value={profileData.email}
          href={`mailto:${profileData.email}`}
        />
        <ContactItem
          icon={Phone}
          label="PHONE"
          value={profileData.phone}
          href={`tel:${profileData.phone}`}
        />
        <ContactItem
          icon={Calendar}
          label="BIRTHDAY"
          value={profileData.birthday}
        />
        <ContactItem
          icon={MapIcon}
          label="LOCATION"
          value={profileData.location}
        />

        {/* Social Links */}
        <div className="border-white/10 p-6">
          <div className="flex justify-center space-x-4">
            <SocialLink
              href="https://github.com/hashaam-1"
              icon={Github}
            />
            <SocialLink
              href="https://www.linkedin.com/in/hashaam-ahmed-1a54b1378/"
              icon={Linkedin}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Contact Item Component
function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: any;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center space-x-3 rounded-lg p-3 transition-colors duration-200">
      <div className="flex-shrink-0">
        <div className="relative z-10 mr-1 rounded-md bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] px-3 py-3 text-[#07ff45c0] shadow-[0_16px_40px_rgba(0,0,0,0.25)] transition duration-250 ease-in-out before:absolute before:inset-[1px] before:z-[-1] before:rounded-[inherit] before:bg-[#252525ea] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:transition before:duration-250 before:ease-in-out before:content-['']">
          <Icon className="text-green-500" />
        </div>
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs tracking-wide text-gray-400 uppercase">{label}</p>
        <p className="truncate text-sm text-gray-200">{value}</p>
      </div>
    </div>
  );

  return href ? <a href={href}>{content}</a> : content;
}

// Social Link Component
function SocialLink({ href, icon: Icon }: { href: string; icon: any }) {
  return (
    <a
      href={href}
      className="relative z-10 mr-1 rounded-md bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] px-3 py-3 text-[#07ff45c0] shadow-[0_16px_40px_rgba(0,0,0,0.25)] transition duration-250 ease-in-out before:absolute before:inset-[1px] before:z-[-1] before:rounded-[inherit] before:bg-[#252525ea] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:transition before:duration-250 before:ease-in-out before:content-[''] hover:bg-green-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="text-white-300 h-5 w-5" />
    </a>
  );
}

// Mobile Header Component
function MobileHeader({
  isExpanded,
  onToggle,
  count,
}: {
  isExpanded: boolean;
  onToggle: () => void;
  count: number;
}) {
  return (
    <motion.div
      className="sticky top-0 z-50 border-b border-white/10 bg-white/10 backdrop-blur-md lg:hidden"
      initial={false}
      animate={{ height: isExpanded ? 'auto' : '80px' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {/* Collapsed Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
            <Image
              src={profileData.avatar}
              alt="Profile Picture"
              height={48}
              width={48}
              className="rounded-xl"
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">
              {profileData.name}
            </h2>
            <p className="text-sm text-gray-400">{profileData.title}</p>
          </div>
        </div>

        <button
          onClick={onToggle}
          className="rounded-lg bg-white/10 p-2 transition-colors hover:bg-white/20"
        >
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isExpanded ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.div>
        </button>
      </div>
      <div className="relative">
        <motion.div
          className="fixed top-[400px] right-0 z-50 rounded-xl rounded-r-none border border-white/10 bg-black/40 px-3 py-2 lg:hidden"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'linear' }}
        >
          <span className="font-medium text-green-500">
            <NumberTicker value={count} format="youtube" />
          </span>
        </motion.div>
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="space-y-3 px-4 pb-4">
              <Separator className="bg-white/20" />

              {/* Contact Info in Mobile */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="flex items-center space-x-2">
                  <div className="relative z-10 mr-1 rounded-md bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] px-3 py-3 text-[#07ff45c0] shadow-[0_16px_40px_rgba(0,0,0,0.25)] transition duration-250 ease-in-out before:absolute before:inset-[1px] before:z-[-1] before:rounded-[inherit] before:bg-[#252525ea] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:transition before:duration-250 before:ease-in-out before:content-['']">
                    <Mail className="h-5 w-5 text-green-500" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 uppercase">EMAIL</p>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="truncate text-sm text-gray-200"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="relative z-10 mr-1 rounded-md bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] px-3 py-3 text-[#07ff45c0] shadow-[0_16px_40px_rgba(0,0,0,0.25)] transition duration-250 ease-in-out before:absolute before:inset-[1px] before:z-[-1] before:rounded-[inherit] before:bg-[#252525ea] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:transition before:duration-250 before:ease-in-out before:content-['']">
                    <Phone className="h-5 w-5 text-green-500" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 uppercase">PHONE</p>
                    <a
                      href={`tel:${profileData.phone}`}
                      className="text-sm text-gray-200"
                    >
                      {profileData.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="relative z-10 mr-1 rounded-md bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] px-3 py-3 text-[#07ff45c0] shadow-[0_16px_40px_rgba(0,0,0,0.25)] transition duration-250 ease-in-out before:absolute before:inset-[1px] before:z-[-1] before:rounded-[inherit] before:bg-[#252525ea] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:transition before:duration-250 before:ease-in-out before:content-['']">
                    <Calendar className="h-5 w-5 text-green-500" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 uppercase">BIRTHDAY</p>
                    <p className="text-sm text-gray-200">
                      {profileData.birthday}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="relative z-10 mr-1 rounded-md bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] px-3 py-3 text-[#07ff45c0] shadow-[0_16px_40px_rgba(0,0,0,0.25)] transition duration-250 ease-in-out before:absolute before:inset-[1px] before:z-[-1] before:rounded-[inherit] before:bg-[#252525ea] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:transition before:duration-250 before:ease-in-out before:content-['']">
                    <MapIcon className="h-5 w-5 text-green-500" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 uppercase">LOCATION</p>
                    <p className="text-sm text-gray-200">
                      {profileData.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4 pt-4">
                <SocialLink
                  href="https://github.com/dushyantsolanki"
                  icon={Github}
                />
                <SocialLink
                  href="https://www.linkedin.com/in/dushyantsolanki/"
                  icon={Linkedin}
                />
                <SocialLink
                  href="https://www.instagram.com/dushyantsolanky/"
                  icon={Instagram}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Bottom Navigation Component
function BottomNavigation({
  count,
  pathname,
  hovered,
  setHovered,
  toggleChatBot,
  isChatBotOpen,
}: {
  count: number;
  pathname: string;
  hovered: string | null;
  setHovered: (arg: string | null) => void;
  toggleChatBot: () => void;
  isChatBotOpen: boolean;
}) {
  return (
    <nav className="fixed bottom-0 left-1/2 z-50 w-full -translate-x-1/2 transform lg:hidden">
      <motion.div
        className="overflow-hidden rounded-2xl rounded-b-none border border-b-0 border-amber-100/10 bg-white/10 px-4 py-4 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <ul className="flex w-full min-w-0 items-center justify-between">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            const isHovering = hovered === link.href;

            return (
              <motion.li
                key={link.name}
                className="relative min-w-0 flex-1"
                onMouseEnter={() => setHovered(link.href)}
                onMouseLeave={() => setHovered(null)}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {(isActive || isHovering) && (
                  <motion.div
                    layoutId="mobile-nav-highlight"
                    className="absolute inset-x-1 top-1/2 h-10 -translate-y-1/2 rounded-xl border border-white/20 bg-black/10"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <Link
                  href={link.href}
                  className={`relative z-10 flex w-full items-center justify-center truncate px-2 py-3 text-xs font-medium transition-all sm:text-sm ${isActive ? 'text-white' : 'text-green-500'}`}
                >
                  <span className="truncate">{link.name}</span>
                </Link>
              </motion.li>
            );
          })}
          <motion.li
            key="chatbot"
            className="relative min-w-0 flex-1"
            onMouseEnter={() => setHovered('chatbot')}
            onMouseLeave={() => setHovered(null)}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
          >
            {(isChatBotOpen || hovered === 'chatbot') && (
              <motion.div
                layoutId="mobile-nav-highlight"
                className="absolute inset-x-1 top-1/2 h-10 -translate-y-1/2 rounded-xl border border-white/20 bg-black/10"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            <button
              onClick={toggleChatBot}
              className={`relative z-10 flex w-full items-center justify-center truncate px-2 py-3 text-xs font-medium transition-all sm:text-sm ${isChatBotOpen ? 'text-white' : 'text-green-500'}`}
            >
              <Bot className="h-5 w-5" />
            </button>
          </motion.li>
        </ul>
      </motion.div>
    </nav>
  );
}

// Desktop Navigation Component
function DesktopNavigation({
  count,
  pathname,
  hovered,
  setHovered,
  isChatBotOpen,
  toggleChatBot,
}: {
  count: number;
  pathname: string;
  hovered: string | null;
  setHovered: (arg: string | null) => void;
  isChatBotOpen: boolean;
  toggleChatBot: () => void;
}) {
  return (
    <nav className="z-50 mt-2 sticky bottom-1 flex w-full items-center justify-center">
      <motion.div
        className="flex h-18 items-center rounded-3xl border border-amber-100/10 bg-white/10 px-8 backdrop-blur-sm"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <ul className="relative flex space-x-8">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            const isHovering = hovered === link.href;

            return (
              <motion.li
                key={link.name}
                className="relative"
                onMouseEnter={() => setHovered(link.href)}
                onMouseLeave={() => setHovered(null)}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {(isActive || isHovering) && (
                  <motion.div
                    layoutId="nav-highlight"
                    className={`absolute inset-x-0 top-1/2 h-10 -translate-y-1/2 rounded-xl border border-white/20 bg-black/10`}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}

                <Link
                  href={link.href}
                  className={`relative z-10 flex items-center justify-center px-5 py-3 text-lg font-medium ${isActive ? 'text-white' : 'text-green-500'
                    }`}
                >
                  {link.name}
                </Link>
              </motion.li>
            );
          })}
          <motion.li
            key="chatbot"
            className="relative"
            onMouseEnter={() => setHovered('chatbot')}
            onMouseLeave={() => setHovered(null)}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
          >
            {(isChatBotOpen || hovered === 'chatbot') && (
              <motion.div
                layoutId="nav-highlight"
                className="absolute inset-x-0 top-1/2 h-10 -translate-y-1/2 rounded-xl border border-white/20 bg-black/10"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            {/* <button
              onClick={toggleChatBot}
              className={`relative z-10 flex items-center justify-center px-5 py-3 text-lg font-medium transition-all ${isChatBotOpen ? 'text-white' : 'text-green-500'}`}
            >
              <Bot className="h-6 w-6 mr-1" /> Shree
            </button> */}
          </motion.li>
        </ul>
      </motion.div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [count, setCount] = useState<number>(0);
  const [isChatBotOpen, setIsChatBotOpen] = useState(false);
  const pathname = usePathname();

  const analytics = async () => {
    try {
      const res: any = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/portfolio`
      );
      const visitor = await res.json();

      if (res.ok) {
        setCount(visitor.visit);
      }
    } catch (error) {
      console.log('Analytics :: ', error);
    }
  };

  const toggleChatBot = () => {
    setIsChatBotOpen(prev => !prev);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      analytics();
    }
  }, [isClient]);

  // Prevent rendering until client-side
  if (!isClient) {
    return (
      <div className="min-h-screen w-full bg-black">
        <div className="flex h-screen items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-green-500 border-t-transparent"></div>
        </div>
      </div>
    );
  }
  return (
    <main className="min-h-screen relative">
      {/* Mobile Header */}
      <MobileHeader
        isExpanded={isMobileExpanded}
        onToggle={() => setIsMobileExpanded(!isMobileExpanded)}
        count={count}
      />

      {/* Desktop Layout */}
      <div className="hidden min-h-screen lg:grid lg:grid-cols-[350px_1fr] lg:grid-rows-[1fr_auto]">
        {/* Desktop Sidebar */}
        <div className="row-span-2 border border-amber-100/10 bg-white/5">
          <Sidebar count={count} />
        </div>

        {/* Desktop Main Content */}
        <div className="px-8">
          <motion.div
            className="min-h-screen rounded-xl rounded-t-none border-2 border-t-0 border-white/10 bg-white/5 p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {children}
          </motion.div>
        </div>

        {/* Desktop Navigation */}
        <DesktopNavigation
          count={count}
          pathname={pathname}
          hovered={hovered}
          setHovered={setHovered}
          toggleChatBot={toggleChatBot}
          isChatBotOpen={isChatBotOpen}
        />
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Mobile Main Content */}
        <motion.div
          className="min-h-screen px-1.5 py-1.5 pb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            {children}
          </div>
        </motion.div>
      </div>

      {/* ChatBot Toggle for Mobile */}
      <AnimatePresence>
        {isChatBotOpen && (
          <motion.div
            className="fixed bottom-0 right-4 z-50 w-full max-w-[400px] sm:max-w-[400px]"
            initial={{ opacity: 1, y: 100, x: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100, }}
            transition={{ duration: 0.3, ease: 'linear' }}
          >
            <ChatBot isOpen={isChatBotOpen} setIsOpen={setIsChatBotOpen} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Navigation for Mobile */}
      <BottomNavigation
        count={count}
        pathname={pathname}
        hovered={hovered}
        setHovered={setHovered}
        toggleChatBot={toggleChatBot}
        isChatBotOpen={isChatBotOpen}
      />
    </main>
  );
}

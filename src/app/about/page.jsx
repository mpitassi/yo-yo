import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    '',
}


export default function About() {
  return (
    <Container className="mt-32 sm:mt-16">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
<Image
  src={portraitImage}
  alt=""
  sizes="(min-width: 1024px) 32rem, 20rem"
  className="h-[280px] rotate-0 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
/>

          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
            About Me
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
I focus on team strategy and performance evaluation using the  
NHL’s puck and player tracking data, while also building  
tools and pipelines to support future analytics needs. Currently,  
I’m a Research Scientist Intern with the Chicago Blackhawks.  
During my Master’s in Mathematics, I was advised by <a href="https://cs.uwaterloo.ca/~brecht/" target="_blank"  
rel="noopener noreferrer" className="text-teal-500 hover:underline">  
Tim Brecht</a> and also worked with <a href="https://cs.uwaterloo.ca/~rcohen/" target="_blank"  
rel="noopener noreferrer" className="text-teal-500 hover:underline">   
Robin Cohen</a>. Before that, 
I received a Bachelor’s degree in Software Engineering from Western University and an Honours Business Administration (HBA) degree from the Ivey Business School.
            </p>

          </div>
          <div className="mt-8">
            <ul role="list" className="flex items-center gap-6 justify-start">
              <SocialLink href="#" icon={LinkedInIcon}>
                Connect on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:mpitassi@uwo.ca"
                icon={MailIcon}
                className="pl-6"
              >
                mpitassi@uwo.ca
              </SocialLink>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  )
}


import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import logoBlackhawks from '@/images/logos/blackhawks.png'
import logoDavid from '@/images/logos/waterloo5.png'
import logoRichter1 from '@/images/logos/richter4.jpeg'
import logoOTPP from '@/images/logos/otpp.jpeg'
import logoTD from '@/images/logos/td.png'
import { publications } from '@/lib/publicationsData'
import { formatDate } from '@/lib/formatDate'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Publication({ publication }) {
  return (
    <Card as="publication">
      <Card.Title href={`/publications/${publication.slug}`}>
        {publication.title}
      </Card.Title>



      <Card.Description>{publication.description}</Card.Description>
      <Card.Cta>Read publication</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Role({ role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Chicago Blackhawks',
      title: 'Research Science Intern',
      logo: logoBlackhawks,
      start: '2025',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'University of Waterloo',
      title: 'Research and Teaching Assistant',
      logo: logoDavid,
      start: '2023',
      end: '2025',
    },
    {
      company: 'Richter Consulting',
      title: 'Analyst - Corporate Strategy',
      logo: logoRichter1,
      start: '2021',
      end: '2022',
    },
    {
      company: 'Ontario Teacher`s Pension Plan',
      title: 'Data Analyst Intern',
      logo: logoOTPP,
      start: '2020',
      end: '2020',
    },
    {
      company: 'TD Canada Trust',
      title: 'Data Analyst Intern',
      logo: logoTD,
      start: '2018',
      end: '2019',
    },
  ]

  return (
<div className="rounded-2xl border border-zinc-100 p-4 dark:border-zinc-700/40">
  <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
    <BriefcaseIcon className="h-6 w-6 flex-none" />
    <span className="ml-3">Work</span>
  </h2>
  <ol className="mt-6 space-y-4">
    {resume.map((role, roleIndex) => (
      <Role key={roleIndex} role={role} />
    ))}
  </ol>

  <div className="flex flex-col gap-2 mt-6">
      <a
      href="/Miles_Pitassi_Resume.pdf"
      download
      className="group w-full"
    >
      <Button variant="secondary" className="w-full">
        Download Resume
        <ArrowDownIcon className="h-4 w-4 ml-2 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </a>
    <a
      href="/Miles_Pitassi_CV.pdf"
      download
      className="group w-full"
    >
      <Button variant="secondary" className="w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 ml-2 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </a>
  </div>
</div>

  )
}

export default async function Home() {
const featuredSlugs = [
  'impact-of-traffic-on-shot-attempts',   
  'new-views-of-shots'                 
];

const featuredPublications = featuredSlugs
  .map(slug => publications.find(pub => pub.slug === slug))
  .filter(Boolean); // in case any are missing


  return (
    <>
<Container className="mt-16">
  <div className="flex flex-row items-start gap-8 max-w-5xl mx-auto">
    {/* Main Text & LinkedIn (Moved fully left, removed avatar) */}
    <div className="flex flex-col justify-start flex-1 min-w-0">
      <h1 className="text-xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
        Data Analyst, Researcher, Sports Enthusiast
      </h1>
      <p className="mt-5 text-base text-zinc-600 dark:text-zinc-400">
Hi! I&apos;m Miles, a data analyst and researcher for sports. I&apos;m currently a Research Scientist Intern for the Chicago Blackhawks,
developing models using the NHL&apos;s puck and player tracking data.
      </p>
      <div className="mt-4 flex gap-4">
        <SocialLink
          href="https://www.linkedin.com/in/miles-pitassi-763080169/"
          aria-label="Connect on LinkedIn"
          icon={LinkedInIcon}
        />
      </div>
    </div>

    {/* Right: Lake Louise Photo remains unchanged */}
    <div className="flex flex-col justify-start">
      <Image
        src="/lakelouise.jpg"
        alt="Miles Pitassi Hockey"
        width={180}
        height={220}
        className="rounded-2xl shadow-xl bg-white border border-zinc-200 p-1 object-cover"
        priority
        style={{ maxHeight: 'calc(100% - 4px)', objectFit: 'cover' }}
      />
    </div>
  </div>
</Container>

<Container className="mt-4 md:mt-6">
  <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-8 lg:max-w-none lg:grid-cols-2">

<div className="flex flex-col gap-6">
  <h2 className="text-base font-semibold text-zinc-700 dark:text-zinc-100 mb-2">
    Featured Publications
  </h2>

  {featuredPublications.map((publication) => (
    <Publication key={publication.slug} publication={publication} />
  ))}
</div>

    <div className="space-y-6 lg:pl-16 xl:pl-24">
      <Resume />
    </div>
  </div>
</Container>


    </>
  )
}

import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoBlackhawks from '@/images/logos/blackhawks.png'
import logoDavid from '@/images/logos/waterloo5.png'
import logoRichter1 from '@/images/logos/richter4.jpeg'
import logoOTPP from '@/images/logos/otpp.jpeg'
import logoTD from '@/images/logos/td.png'

const jobs = [
  {
    company: 'Chicago Blackhawks',
    logo: logoBlackhawks,
    title: 'Research Scientist Intern',
    type: 'Internship',
    dates: 'May 2025 - Present',
    location: 'Chicago, Illinois, United States',
    description: 'Working on statistical and machine learning analysis for NHL puck and player tracking data to support team analytics.',
  },
  {
    company: 'University of Waterloo',
    logo: logoDavid,
    title: 'Research And Teaching Assistant',
    type: 'Permanent Full-time',
    dates: 'May 2023 - May 2025',
    location: 'Waterloo, Ontario, Canada',
    description: (
      <>
        <ul className="list-disc ml-5">
          <li>Conducted statistical analysis and machine learning models using NHL puck and player tracking data, resulting in multiple published research papers</li>
          <li>Assisted in teaching Mathematics and Computer Science courses, including creating and delivering instructional materials, conducting tutorials and lab sessions, and providing academic support to over 100 students</li>
        </ul>
      </>
    ),
  },
  {
    company: 'Richter',
    logo: logoRichter1,
    title: 'Associate - Strategy and Transaction Advisory',
    type: 'Permanent Full-time',
    dates: 'Sep 2021 - Jul 2022',
    location: 'Toronto, Ontario, Canada',
    description: (
      <>
        <ul className="list-disc ml-5">
          <li>Analyzed market and financial data to identify growth opportunities and ideated a 5-year expansion strategy for a Montreal beauty store, expanding into 5 cities across Canada</li>
          <li>Led an end-to-end digital transformation for a subscription-based alcohol company, resulting in a forecasted growth of 100% over the next four months</li>
        </ul>
      </>
    ),
  },
  {
    company: "Ontario Teachers'​ Pension Plan",
    logo: logoOTPP,
    title: 'Data Analyst',
    type: 'Internship',
    dates: 'Jun 2020 - Dec 2020',
    location: 'Toronto, Ontario, Canada',
    description: (
      <>
        <ul className="list-disc ml-5">
          <li>Performed data collection and curation using PowerBI, SQL, and Adobe Analytics for ongoing campaigns</li>
          <li>Presented statistical insights to 800+ members and developed templates for future campaigns</li>
        </ul>
      </>
    ),
  },
  {
    company: 'TD',
    logo: logoTD,
    title: 'Personal Banking Analyst',
    type: '',
    dates: 'May - Sep 2018, 2019',
    location: 'Toronto, Canada Area',
    description: (
      <>
        <ul className="list-disc ml-5">
          <li>Developed software to detect and score customer digital activity, supporting the Next Best Action (NBA) ML model</li>
          <li>Produced data reports on estate accounts, leading to a nationwide program for retention of long-term accounts</li>
        </ul>
      </>
    ),
  },
]

export const metadata = {
  title: 'Experience'}
export default function Experience() {
  return (
    <SimpleLayout title="Work Experience">
      <ul role="list" className="flex flex-col gap-y-8">
        {jobs.map((job) => (
          <Card as="li" key={job.company + job.title}>
            <div className="flex items-center gap-4">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image src={job.logo} alt={job.company + ' logo'} className="h-8 w-8" unoptimized />
              </div>
              <div>
                <div className="text-base font-semibold text-zinc-800 dark:text-zinc-100">{job.title}</div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">{job.company} &middot; {job.type}</div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">{job.dates}</div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">{job.location}</div>
              </div>
            </div>
            <div className="mt-4 text-zinc-600 dark:text-zinc-300">
              {job.description}
            </div>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}

import Link from 'next/link'
import { Container } from '@/components/Container'
import {
  LinkedInIcon,
} from '@/components/SocialIcons'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className="flex">
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
    'I’m Miles Pitassi. I live in Waterloo, where I teach, volunteer, and build cool things.',
}

export default function About() {
  return (
    <Container className="mt-20 sm:mt-16 max-w-2xl">
      <div className="space-y-12 text-base text-zinc-800 dark:text-zinc-200">

        {/* Teaching Section */}
        <section>
          <h2 className="text-lg font-bold mb-4 text-zinc-800 dark:text-zinc-100">
            Teaching
          </h2>
          <div className="space-y-8">
            <div>
              <div className="font-medium">
                Winter 2024: CS230: Introduction to Computers and Computer Applications, University of Waterloo.
              </div>
              <div className="text-sm text-zinc-700 dark:text-zinc-300">
                Instructional Apprentice — Delivered tutorials and a guest lecture, developed teaching materials, and supported course delivery. Received perfect evaluation scores and frequent commendations for instructional clarity and engagement.
              </div>
            </div>
            <div>
              <div className="font-medium">
                Fall 2023: CS115: Introduction to Computer Science 1, University of Waterloo.
              </div>
              <div className="text-sm text-zinc-700 dark:text-zinc-300">
                Led tutorials, held office hours, and supported assessments. Rated 5.0 with strong student feedback highlighting clear explanations and responsiveness.
              </div>
            </div>
            <div>
              <div className="font-medium">
                Spring 2023: CS240: Data Structures and Data Management, University of Waterloo.
              </div>
              <div className="text-sm text-zinc-700 dark:text-zinc-300">
                Provided tutorial support and office hours for a core data structures course. Consistently rated 5.0/5.0, with student comments emphasizing effectiveness in breaking down complex concepts.
              </div>
            </div>
          </div>
        </section>

        {/* Volunteering Section */}
        <section>
          <h2 className="text-lg font-bold mb-4 text-zinc-800 dark:text-zinc-100">
            Volunteering & Service
          </h2>
          <div className="space-y-8">
            <div>
              <div className="font-medium">
                Volunteer Tutor, Parkdale Project Read
              </div>
              <div className="text-sm text-zinc-700 dark:text-zinc-300">
                Provide weekly one-on-one tutoring to adult learners in literacy and numeracy. Support goal-based learning with a trauma-informed, learner-centered approach. Engage in community-building activities and adapt instructional strategies to diverse learning needs.
              </div>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section>
          <h2 className="text-lg font-bold mb-4 text-zinc-800 dark:text-zinc-100">
            Awards
          </h2>
          <div className="space-y-8">
            <div>
              <div className="font-medium">
                Alumni Gold Medal Nominee (University of Waterloo)
              </div>
            </div>
            <div>
              <div className="font-medium">
                Rico Mariani 2SLGBTQ+ Graduate Award (University of Waterloo) <span className="font-normal">($4,500)</span>
              </div>
            </div>
            <div>
              <div className="font-medium">
                Undergraduate Scholarship of Distinction (University of Western Ontario) <span className="font-normal">($15,000)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-lg font-bold mb-4 text-zinc-800 dark:text-zinc-100">
            Projects
          </h2>
          <div className="space-y-8">
            <div>
              <div className="font-medium">
                SafeSpace
              </div>
              <div className="text-sm text-zinc-700 dark:text-zinc-300">
                Developed a full-stack mobile application to address the limitations of mental health therapy.
                Node.js serves a REST API for the backend, Swift is used for the frontend for iOS devices, and TensorFlow.js powers the abuse detection model.
              </div>
            </div>
            {/* Add more projects in the same format if desired */}
          </div>
        </section>

        {/* Social links */}
        <section>
          <ul role="list" className="flex items-center gap-6 justify-start mt-2">
            <SocialLink href="https://www.linkedin.com/in/miles-pitassi-763080169/" icon={LinkedInIcon}>
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
        </section>
      </div>
    </Container>
  )
}

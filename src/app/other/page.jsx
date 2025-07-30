import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'Other',
  description: '',
}

export default function About() {
  return (
    <SimpleLayout title="Other things I do!">
      <div className="space-y-12 text-base text-zinc-800 dark:text-zinc-200">
        {/* Teaching */}
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
                Instructional Apprentice — Delivered tutorials and a guest lecture, developed teaching materials, and supported course delivery. Received perfect evaluation score (5.0) and frequent commendations for instructional clarity and engagement.
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

        {/* Volunteering & Service */}
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

        {/* Awards */}
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
      </div>
    </SimpleLayout>
  )
}


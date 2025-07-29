import { SimpleLayout } from '@/components/SimpleLayout'
import { publications } from '@/lib/publicationsData'

export const metadata = {
  title: 'Publications',
  description: 'Academic publications and conference papers.',
}

export default function PublicationsIndex() {
  // Use the thesis's unique slug
  const thesis = publications.find(
    pub => pub.slug === 'puck-possessions-and-shot-quality'
  )

  // Remove thesis from the year-based lists
  const pubs2025 = publications.filter(
    pub => new Date(pub.date).getFullYear() === 2025 && pub.slug !== 'puck-possessions-and-shot-quality'
  )
  const pubs2024 = publications.filter(
    pub => new Date(pub.date).getFullYear() === 2024
  )

  return (
    <SimpleLayout title="Publications">
      <div className="space-y-12 text-base text-zinc-800 dark:text-zinc-200">
        {/* Thesis section */}
        {thesis && (
          <div>
            <div className="text-xs uppercase text-zinc-400 mb-2 font-semibold tracking-widest">
              Thesis
            </div>
            <div className="font-medium">{thesis.title}</div>
            <div className="text-sm">
              {thesis.authors.split(/(Miles Pitassi)/g).map((part, idx) =>
                part === 'Miles Pitassi'
                  ? <strong key={idx}>Miles Pitassi</strong>
                  : part
              )}
            </div>
            <div className="text-sm italic">{thesis.conference}</div>
            {thesis.link ? (
              <a
                href={thesis.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:underline"
              >
                [PDF]
              </a>
            ) : (
              <span className="text-zinc-400">[Link coming soon]</span>
            )}
          </div>
        )}

        {/* 2025 Publications */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-zinc-800 dark:text-zinc-100">2025</h2>
          <div className="space-y-8">
            {pubs2025.map((pub) => (
              <div key={pub.slug}>
                <div className="font-medium">{pub.title}</div>
                <div className="text-sm">
                  {pub.authors.split(/(Miles Pitassi)/g).map((part, idx) =>
                    part === 'Miles Pitassi'
                      ? <strong key={idx}>Miles Pitassi</strong>
                      : part
                  )}
                </div>
                <div className="text-sm italic">{pub.conference}</div>
                {pub.link ? (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:underline"
                  >
                    [PDF]
                  </a>
                ) : (
                  <span className="text-zinc-400">[Link coming soon]</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 2024 Publications */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-zinc-800 dark:text-zinc-100">2024</h2>
          <div className="space-y-8">
            {pubs2024.map((pub) => (
              <div key={pub.slug}>
                <div className="font-medium">{pub.title}</div>
                <div className="text-sm">
                  {pub.authors.split(/(Miles Pitassi)/g).map((part, idx) =>
                    part === 'Miles Pitassi'
                      ? <strong key={idx}>Miles Pitassi</strong>
                      : part
                  )}
                </div>
                <div className="text-sm italic">{pub.conference}</div>
                {pub.link ? (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:underline"
                  >
                    [PDF]
                  </a>
                ) : (
                  <span className="text-zinc-400">[Link coming soon]</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SimpleLayout>
  )
}

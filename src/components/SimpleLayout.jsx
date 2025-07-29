import { Container } from '@/components/Container'

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="mt-8 sm:mt-16">
      <header className="max-w-2xl">

<h1 className="text-xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
  {title}
</h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {intro}
        </p>
      </header>
      {children && <div className="mt-8 sm:mt-12">{children}</div>}
    </Container>
  )
}


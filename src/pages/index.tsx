import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js boilerplate</title>
        <meta
          name="description"
          content="Next.js, Typescript, ESLint, Prettier, Husky, Lint-Staged, Jest, Testing Library, Commitlint, Tailwindcss"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col min-h-screen items-center justify-between p-12">
        <div className="flex justify-center items-center flex-1">
          <h1 className="text-3xl font-bold">Hello World!</h1>
        </div>
        <div className="flex justify-between items-center w-full">
          <div>
            <a
              href="https://github.com/bonabrian/nextjs-boilerplate"
              target="_blank"
              rel="noreferrer"
              className="text-purple-500 hover:text-purple-600"
            >
              Next.js Boilerplate
            </a>
          </div>
          <div>
            <a
              href="https://bonabrian.com"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              Bona Brian Siagian
            </a>
          </div>
        </div>
      </main>
    </>
  )
}

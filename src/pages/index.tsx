import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo title="Home" />
      <div>
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
      </div>
    </>
  )
}

# nextjs-platform-builder

ouput these codes: /**
 * v0 by Vercel.
 * @see https://v0.dev/t/8WUEPct2Axq
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#0A1929] text-gray-50">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-700">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="h-6 w-6 text-[#9B5DE5]" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:text-[#00D7FF] underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-[#00D7FF] underline-offset-4" prefetch={false}>
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-[#00D7FF] underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-[#00D7FF] underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-[#00D7FF] sm:text-5xl xl:text-6xl/none">
                    The complete platform for building the Web
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    Give your team the toolkit to stop configuring and start innovating. Securely build, deploy, and
                    scale the best web experiences.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#9B5DE5] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#9B5DE5]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#9B5DE5] disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-[#00D7FF] bg-[#0A1929] px-8 text-sm font-medium shadow-sm transition-colors hover:bg-[#0A1929]/90 hover:text-[#00D7FF] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00D7FF] disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0E2240] dark:bg-[#0A1929]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#0A1929] px-3 py-1 text-sm text-[#00D7FF]">
                  New Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-[#00D7FF] sm:text-5xl">
                  Faster iteration. More innovation.
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The platform for rapid progress. Let your team focus on shipping features instead of managing
                  infrastructure with automated CI/CD, built-in testing, and integrated collaboration.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-[#00D7FF]">Collaboration</h3>
                      <p className="text-gray-300">Make collaboration seamless with built-in code review tools.</p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-[#00D7FF]">Automation</h3>
                      <p className="text-gray-300">Automate your workflow with continuous integration.</p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-[#00D7FF]">Scale</h3>
                      <p className="text-gray-300">Deploy to the cloud with a single click and scale with ease.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-[#00D7FF] md:text-4xl/tight">
                Experience the workflow the best frontend teams love.
              </h2>
              <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let your team focus on shipping features instead of managing infrastructure with automated CI/CD.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#9B5DE5] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#9B5DE5]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#9B5DE5] disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Contact Sales
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-[#00D7FF] bg-[#0A1929] px-8 text-sm font-medium shadow-sm transition-colors hover:bg-[#0A1929]/90 hover:text-[#00D7FF] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00D7FF] disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn more
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#0E2240] to-[#0A1929] dark:bg-[#0A1929]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#0A1929] px-3 py-1 text-sm text-[#00D7FF]">
                  Features Showcase
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-[#00D7FF] sm:text-5xl">
                  Where Intelligence Takes Form
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Dynamic, asymmetrical grid showcases core features. Cards have subtle background gradients (navy to
                  blue) for depth and visual interest.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0E2240] to-[#00D7FF] p-1 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                <div className="flex h-full flex-col items-start justify-between rounded-xl bg-[#0A1929] p-6 transition-all duration-300 group-hover:bg-[#0E2240]">
                  <div>
                    <BotIcon className="h-8 w-8 text-[#00D7FF]" />
                    <h3 className="mt-4 text-xl font-bold text-[#00D7FF]">Smart Automation</h3>
                    <p className="mt-2 text-gray-300">Automates customer interactions, freeing human agents.</p>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#9B5DE5] px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#9B5DE5]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#9B5DE5] disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0E2240] to-[#00D7FF] p-1 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                <div className="flex h-full flex-col items-start justify-between rounded-xl bg-[#0A1929] p-6 transition-all duration-300 group-hover:bg-[#0E2240]">
                  <div>
                    <UserPlusIcon className="h-8 w-8 text-[#00D7FF]" />
                    <h3 className="mt-4 text-xl font-bold text-[#00D7FF]">Personalized Experiences</h3>
                    <p className="mt-2 text-gray-300">Tailors interactions based on customer preferences.</p>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#9B5DE5] px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#9B5DE5]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#9B5DE5] disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0E2240] to-[#00D7FF] p-1 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                <div className="flex h-full flex-col items-start justify-between rounded-xl bg-[#0A1929] p-6 transition-all duration-300 group-hover:bg-[#0E2240]">
                  <div>
                    <InfoIcon className="h-8 w-8 text-[#00D7FF]" />
                    <h3 className="mt-4 text-xl font-bold text-[#00D7FF]">Data-Driven Insights</h3>
                    <p className="mt-2 text-gray-300">Provides valuable data to optimize strategies.</p>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#9B5DE5] px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#9B5DE5]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#9B5DE5] disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0E2240] to-[#00D7FF] p-1 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                <div className="flex h-full flex-col items-start justify-between rounded-xl bg-[#0A1929] p-6 transition-all duration-300 group-hover:bg-[#0E2240]">
                  <div>
                    <ImportIcon className="h-8 w-8 text-[#00D7FF]" />
                    <h3 className="mt-4 text-xl font-bold text-[#00D7FF]">Seamless Integrations</h3>
                    <p className="mt-2 text-gray-300">
                      Compatible with leading CRM, marketing, and e-commerce platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f5f5f5] dark:bg-[#0A1929]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center" />
          </div>
        </section>
      </main>
    </div>
  )
}

function BotIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  )
}


function ImportIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v12" />
      <path d="m8 11 4 4 4-4" />
      <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" />
    </svg>
  )
}


function InfoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function UserPlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="19" x2="19" y1="8" y2="14" />
      <line x1="22" x2="16" y1="11" y2="11" />
    </svg>
  )
}

body {
  font-family: var(--font-comfortaa), sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-syne), sans-serif;
}

// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Syne } from 'next/font/google'
import { Comfortaa } from 'next/font/google'
import './styles.css'

const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne',
})
const comfortaa = Comfortaa({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-comfortaa',
})

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={syne.variable + ' ' + comfortaa.variable}>
        {children}
      </body>
    </html>
  )
}



## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/nextjs-platform-builder.git
cd nextjs-platform-builder
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

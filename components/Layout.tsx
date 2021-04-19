import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/users">
          <a>Users List</a>
        </Link>{' '}
        | <a href="/api/users">Users API</a>
      </nav>
    </header>
    {children}
    <footer>
      <hr style={{border:'1px solid rgba(255, 0, 0, .5)'}} />
      {/* <span>footer</span> */}
    </footer>
    <style jsx global>{`
      body {
        background-color: #1f1f1f;
      }
      h1, h2, p, a, span{
        color: white;
      }
      *{
        font-family: sans-serif;
      }
    `}</style>
  </div>
)

export default Layout

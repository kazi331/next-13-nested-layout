import NavLink from './components/NavLink'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <title>Nextjs Nested Route</title>
      <head />
      <body>
        <header>
          <nav>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/admin">Admin</NavLink>
            <NavLink href="/movies">Movies</NavLink>
            <NavLink href="/posts">Posts</NavLink>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}

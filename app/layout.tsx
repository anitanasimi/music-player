import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { auth } from '@/app/auth'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Music Player',
  description: 'Upload and Listen to music',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await auth()
  let isLoggedIn = true;
  if (!session?.user) {
    isLoggedIn = false;
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-pink-200 text-white p-4">
          <nav className="container mx-auto flex items-center justify-between py-4">
            <div className="flex items-center">
              <img src="https://img.icons8.com/color/96/apple-music.png" alt="Logo" className="mr-3" />
              <ul className="flex space-x-4">
                <li>
                  <a href="/" className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">Home</a>
                </li>
                {isLoggedIn ? (
                  <li>
                    <Link href="/profile" className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
                      Profile
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link href="/api/auth/signin" className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
                      SignIn
                    </Link>
                  </li>
                )}

              </ul>
            </div>
            {isLoggedIn && (
              <div className="hidden md:block">
                <Link href="/api/auth/signout" className="text-white bg-slate-600 rounded px-4 py-2">
                  Signout
                </Link>
              </div>
            )}

          </nav>
        </header>
        <main className="container mx-auto flex items-center justify-between p-4">
          {children}
        </main>
      </body>
    </html>
  )
}



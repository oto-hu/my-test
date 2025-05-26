'use client'

import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const { data: session } = useSession()
  const pathname = usePathname()

  const navItems = [
    { href: '/dashboard', label: 'ダッシュボード' },
    { href: '/announcements', label: 'お知らせ' },
    { href: '/content', label: '限定コンテンツ' },
    { href: '/members', label: 'メンバー一覧' },
    { href: '/board', label: '掲示板' },
  ]

  if (session?.user?.role === 'admin') {
    navItems.push({ href: '/admin', label: '管理画面' })
  }

  return (
    <header className="salon-header">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/dashboard" className="text-2xl font-bold">
              プレミアムサロン
            </Link>
            <nav className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-purple-200 transition-colors ${
                    pathname === item.href ? 'text-purple-200 font-semibold' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm">
              {session?.user?.name}さん
              {session?.user?.role === 'admin' && (
                <span className="ml-2 px-2 py-1 bg-yellow-400 text-purple-800 text-xs rounded-full">
                  管理者
                </span>
              )}
            </span>
            <button
              onClick={() => signOut({ callbackUrl: '/login' })}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition-all"
            >
              ログアウト
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
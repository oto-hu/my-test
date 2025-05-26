'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const navItems = [
    { href: '/dashboard', label: 'ダッシュボード' },
    { href: '/announcements', label: 'お知らせ' },
    { href: '/content', label: '限定コンテンツ' },
    { href: '/members', label: 'メンバー一覧' },
    { href: '/board', label: '掲示板' },
    { href: '/admin', label: '管理画面' },
  ]

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
              ようこそ、サロンメンバーさん
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
'use client'

import Header from '../components/Header'
import Link from 'next/link'

// ダミーデータ
const recentAnnouncements = [
  {
    id: 1,
    title: '新メンバー限定イベントのお知らせ',
    date: '2024-01-15',
    summary: '来月開催予定の特別セミナーについて詳細をお知らせします。'
  },
  {
    id: 2,
    title: '限定コンテンツ追加のお知らせ',
    date: '2024-01-10',
    summary: '新しい動画コンテンツとPDF資料を追加しました。'
  }
]

const recentContent = [
  {
    id: 1,
    title: 'ビジネス成功の秘訣 Vol.3',
    type: '動画',
    category: 'ビジネス戦略',
    date: '2024-01-12'
  },
  {
    id: 2,
    title: '投資初心者向けガイド',
    type: 'PDF',
    category: '投資・資産運用',
    date: '2024-01-08'
  }
]

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            こんにちは！
          </h1>
          <p className="text-gray-600">
            プレミアムサロンメンバー限定サイトへようこそ
          </p>
        </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* 最新のお知らせ */}
            <div className="salon-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">最新のお知らせ</h2>
                <Link href="/announcements" className="text-purple-600 hover:text-purple-800 text-sm">
                  すべて見る →
                </Link>
              </div>
              <div className="space-y-4">
                {recentAnnouncements.map((announcement) => (
                  <div key={announcement.id} className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-medium text-gray-800">{announcement.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{announcement.summary}</p>
                    <p className="text-xs text-gray-500 mt-2">{announcement.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 新着コンテンツ */}
            <div className="salon-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">新着コンテンツ</h2>
                <Link href="/content" className="text-purple-600 hover:text-purple-800 text-sm">
                  すべて見る →
                </Link>
              </div>
              <div className="space-y-4">
                {recentContent.map((content) => (
                  <div key={content.id} className="flex items-start space-x-3">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      content.type === '動画' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {content.type}
                    </span>
                    <div>
                      <h3 className="font-medium text-gray-800">{content.title}</h3>
                      <p className="text-sm text-gray-600">{content.category}</p>
                      <p className="text-xs text-gray-500 mt-1">{content.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* クイックアクセス */}
          <div className="salon-card p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">クイックアクセス</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/announcements" className="salon-button text-center block">
                お知らせ
              </Link>
              <Link href="/content" className="salon-button text-center block">
                限定コンテンツ
              </Link>
              <Link href="/members" className="salon-button text-center block">
                メンバー一覧
              </Link>
              <Link href="/board" className="salon-button text-center block">
                掲示板
              </Link>
            </div>
          </div>
        </main>
      </div>
  )
}
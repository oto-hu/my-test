'use client'

import Header from '../components/Header'
import Link from 'next/link'

// ダミーのお知らせデータ
const announcements = [
  {
    id: 1,
    title: '新メンバー限定イベントのお知らせ',
    date: '2024-01-15',
    category: 'イベント',
    summary: '来月開催予定の特別セミナーについて詳細をお知らせします。',
    content: `
      プレミアムサロンメンバーの皆様へ

      来月2月20日（火）19:00より、メンバー限定の特別セミナー「次世代ビジネス戦略」を開催いたします。

      【開催概要】
      ・日時：2024年2月20日（火）19:00-21:00
      ・場所：オンライン（Zoom）
      ・講師：田中専務取締役
      ・参加費：無料（メンバー限定）

      参加ご希望の方は、1月30日までにお申し込みください。
    `
  },
  {
    id: 2,
    title: '限定コンテンツ追加のお知らせ',
    date: '2024-01-10',
    category: 'コンテンツ',
    summary: '新しい動画コンテンツとPDF資料を追加しました。',
    content: `
      メンバーの皆様

      限定コンテンツに新しい教材を追加いたしました。

      【追加コンテンツ】
      1. 「ビジネス成功の秘訣 Vol.3」（動画：45分）
      2. 「投資初心者向けガイド」（PDF：32ページ）
      3. 「マーケティング戦略テンプレート」（Excel）

      ぜひご活用ください。
    `
  },
  {
    id: 3,
    title: 'サイトメンテナンスのお知らせ',
    date: '2024-01-05',
    category: 'システム',
    summary: 'システムメンテナンスに伴う一時的なサービス停止について',
    content: `
      システムメンテナンスのお知らせ

      下記日程でシステムメンテナンスを実施いたします。

      【メンテナンス日時】
      2024年1月15日（月）2:00-4:00

      メンテナンス中はサイトにアクセスできませんので、ご了承ください。
    `
  }
]

export default function AnnouncementsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">お知らせ</h1>
          <p className="text-gray-600">サロンからの最新情報をお届けします</p>
        </div>

        <div className="space-y-6">
          {announcements.map((announcement) => (
            <div key={announcement.id} className="salon-card p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className={`px-3 py-1 text-xs rounded-full ${
                      announcement.category === 'イベント' ? 'bg-green-100 text-green-700' :
                      announcement.category === 'コンテンツ' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {announcement.category}
                    </span>
                    <span className="text-sm text-gray-500">{announcement.date}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {announcement.title}
                  </h2>
                  <p className="text-gray-600">{announcement.summary}</p>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="whitespace-pre-line text-gray-700">
                  {announcement.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
'use client'

import { useState } from 'react'
import Header from '../components/Header'

// ダミーの管理データ
const dashboardStats = {
  totalMembers: 8,
  totalAnnouncements: 3,
  totalContent: 5,
  totalPosts: 3
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const tabs = [
    { id: 'dashboard', label: 'ダッシュボード' },
    { id: 'announcements', label: 'お知らせ管理' },
    { id: 'content', label: 'コンテンツ管理' },
    { id: 'members', label: 'メンバー管理' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">管理画面</h1>
            <p className="text-gray-600">サロンの運営管理を行います</p>
          </div>

          {/* タブナビゲーション */}
          <div className="mb-6">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-purple-500 text-purple-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* ダッシュボード */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="salon-card p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {dashboardStats.totalMembers}
                  </div>
                  <div className="text-gray-700">総メンバー数</div>
                </div>
                <div className="salon-card p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {dashboardStats.totalAnnouncements}
                  </div>
                  <div className="text-gray-700">お知らせ件数</div>
                </div>
                <div className="salon-card p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {dashboardStats.totalContent}
                  </div>
                  <div className="text-gray-700">コンテンツ数</div>
                </div>
                <div className="salon-card p-6 text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    {dashboardStats.totalPosts}
                  </div>
                  <div className="text-gray-700">掲示板投稿数</div>
                </div>
              </div>

              <div className="salon-card p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">最近のアクティビティ</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">新しいメンバー「小林麻衣」が参加しました</span>
                    <span className="text-sm text-gray-500">2024-01-15</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">お知らせ「新メンバー限定イベント」を投稿しました</span>
                    <span className="text-sm text-gray-500">2024-01-15</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">新しいコンテンツ「ビジネス成功の秘訣 Vol.3」を追加しました</span>
                    <span className="text-sm text-gray-500">2024-01-12</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* お知らせ管理 */}
          {activeTab === 'announcements' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">お知らせ管理</h2>
                <button className="salon-button">新規お知らせ作成</button>
              </div>
              
              <div className="salon-card p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4">タイトル</th>
                        <th className="text-left py-3 px-4">カテゴリ</th>
                        <th className="text-left py-3 px-4">投稿日</th>
                        <th className="text-left py-3 px-4">操作</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4">新メンバー限定イベントのお知らせ</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                            イベント
                          </span>
                        </td>
                        <td className="py-3 px-4">2024-01-15</td>
                        <td className="py-3 px-4">
                          <button className="text-blue-600 hover:text-blue-800 mr-3">編集</button>
                          <button className="text-red-600 hover:text-red-800">削除</button>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4">限定コンテンツ追加のお知らせ</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                            コンテンツ
                          </span>
                        </td>
                        <td className="py-3 px-4">2024-01-10</td>
                        <td className="py-3 px-4">
                          <button className="text-blue-600 hover:text-blue-800 mr-3">編集</button>
                          <button className="text-red-600 hover:text-red-800">削除</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* コンテンツ管理 */}
          {activeTab === 'content' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">コンテンツ管理</h2>
                <button className="salon-button">新規コンテンツ追加</button>
              </div>
              
              <div className="salon-card p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4">タイトル</th>
                        <th className="text-left py-3 px-4">タイプ</th>
                        <th className="text-left py-3 px-4">カテゴリ</th>
                        <th className="text-left py-3 px-4">公開日</th>
                        <th className="text-left py-3 px-4">操作</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4">ビジネス成功の秘訣 Vol.3</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">
                            動画
                          </span>
                        </td>
                        <td className="py-3 px-4">ビジネス戦略</td>
                        <td className="py-3 px-4">2024-01-12</td>
                        <td className="py-3 px-4">
                          <button className="text-blue-600 hover:text-blue-800 mr-3">編集</button>
                          <button className="text-red-600 hover:text-red-800">削除</button>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4">投資初心者向けガイド</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                            PDF
                          </span>
                        </td>
                        <td className="py-3 px-4">投資・資産運用</td>
                        <td className="py-3 px-4">2024-01-08</td>
                        <td className="py-3 px-4">
                          <button className="text-blue-600 hover:text-blue-800 mr-3">編集</button>
                          <button className="text-red-600 hover:text-red-800">削除</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* メンバー管理 */}
          {activeTab === 'members' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">メンバー管理</h2>
                <button className="salon-button">新規メンバー追加</button>
              </div>
              
              <div className="salon-card p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4">名前</th>
                        <th className="text-left py-3 px-4">メールアドレス</th>
                        <th className="text-left py-3 px-4">参加日</th>
                        <th className="text-left py-3 px-4">ステータス</th>
                        <th className="text-left py-3 px-4">操作</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4">田中太郎</td>
                        <td className="py-3 px-4">member@salon.jp</td>
                        <td className="py-3 px-4">2023-03-15</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                            アクティブ
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <button className="text-blue-600 hover:text-blue-800 mr-3">編集</button>
                          <button className="text-gray-600 hover:text-gray-800">停止</button>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4">山田花子</td>
                        <td className="py-3 px-4">yamada@salon.jp</td>
                        <td className="py-3 px-4">2023-04-02</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                            アクティブ
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <button className="text-blue-600 hover:text-blue-800 mr-3">編集</button>
                          <button className="text-gray-600 hover:text-gray-800">停止</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </main>
    </div>
  )
}
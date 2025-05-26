'use client'

import Header from '../components/Header'
import { useState } from 'react'

// ダミーの限定コンテンツデータ
const contentData = [
  {
    id: 1,
    title: 'ビジネス成功の秘訣 Vol.3',
    type: '動画',
    category: 'ビジネス戦略',
    date: '2024-01-12',
    description: '成功する経営者が実践している3つの重要な戦略について詳しく解説します。',
    duration: '45分',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    featured: true
  },
  {
    id: 2,
    title: '投資初心者向けガイド',
    type: 'PDF',
    category: '投資・資産運用',
    date: '2024-01-08',
    description: '投資を始める前に知っておくべき基礎知識を32ページにまとめました。',
    pages: '32ページ',
    downloadUrl: '#'
  },
  {
    id: 3,
    title: 'マーケティング戦略テンプレート',
    type: 'Excel',
    category: 'マーケティング',
    date: '2024-01-03',
    description: '実際に使えるマーケティング戦略立案用のExcelテンプレートです。',
    downloadUrl: '#'
  },
  {
    id: 4,
    title: 'リーダーシップ論 特別講義',
    type: '動画',
    category: 'リーダーシップ',
    date: '2023-12-28',
    description: '組織を率いるリーダーに必要な資質と行動について学びます。',
    duration: '65分',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 5,
    title: '財務分析の基礎',
    type: 'PDF',
    category: '財務・会計',
    date: '2023-12-20',
    description: '企業の財務諸表を読み解くための基本的な分析手法を解説。',
    pages: '28ページ',
    downloadUrl: '#'
  }
]

const categories = ['すべて', 'ビジネス戦略', '投資・資産運用', 'マーケティング', 'リーダーシップ', '財務・会計']

export default function ContentPage() {
  const [selectedCategory, setSelectedCategory] = useState('すべて')
  const [selectedContent, setSelectedContent] = useState<any>(null)

  const filteredContent = selectedCategory === 'すべて' 
    ? contentData 
    : contentData.filter(item => item.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">限定コンテンツ</h1>
            <p className="text-gray-600">メンバー限定の特別な学習コンテンツをお楽しみください</p>
          </div>

          {/* カテゴリフィルター */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    selectedCategory === category
                      ? 'salon-button'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* コンテンツ一覧 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent.map((content) => (
              <div key={content.id} className="salon-card p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className={`px-3 py-1 text-xs rounded-full ${
                    content.type === '動画' ? 'bg-red-100 text-red-700' :
                    content.type === 'PDF' ? 'bg-blue-100 text-blue-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {content.type}
                  </span>
                  {content.featured && (
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">
                      注目
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {content.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-3">{content.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{content.category}</span>
                  <span>{content.date}</span>
                </div>

                {content.duration && (
                  <p className="text-sm text-gray-600 mb-3">再生時間: {content.duration}</p>
                )}
                
                {content.pages && (
                  <p className="text-sm text-gray-600 mb-3">{content.pages}</p>
                )}

                <button
                  onClick={() => setSelectedContent(content)}
                  className="salon-button w-full"
                >
                  {content.type === '動画' ? '動画を見る' : 'ダウンロード'}
                </button>
              </div>
            ))}
          </div>

          {/* コンテンツ詳細モーダル */}
          {selectedContent && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">
                      {selectedContent.title}
                    </h2>
                    <button
                      onClick={() => setSelectedContent(null)}
                      className="text-gray-500 hover:text-gray-700 text-xl"
                    >
                      ×
                    </button>
                  </div>

                  {selectedContent.type === '動画' && selectedContent.videoUrl && (
                    <div className="mb-4">
                      <iframe
                        width="100%"
                        height="400"
                        src={selectedContent.videoUrl}
                        title={selectedContent.title}
                        frameBorder="0"
                        allowFullScreen
                        className="rounded-lg"
                      ></iframe>
                    </div>
                  )}

                  <div className="space-y-3">
                    <p className="text-gray-700">{selectedContent.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>カテゴリ: {selectedContent.category}</span>
                      <span>公開日: {selectedContent.date}</span>
                      {selectedContent.duration && (
                        <span>時間: {selectedContent.duration}</span>
                      )}
                    </div>
                  </div>

                  {selectedContent.type !== '動画' && (
                    <div className="mt-6">
                      <button className="salon-button">
                        ファイルをダウンロード
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </main>
    </div>
  )
}
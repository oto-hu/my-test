'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import Header from '../components/Header'
import ProtectedRoute from '../components/ProtectedRoute'

// ダミーの掲示板データ
const initialPosts = [
  {
    id: 1,
    title: '新年の目標設定について',
    author: 'タナカT',
    date: '2024-01-15 10:30',
    content: '皆さん、新年の目標は設定されましたか？ビジネス面での目標設定のコツなどあれば教えてください。',
    replies: [
      {
        id: 1,
        author: 'ハナコ',
        date: '2024-01-15 14:20',
        content: 'SMART原則を使った目標設定がおすすめです！具体的で測定可能な目標を立てるようにしています。'
      },
      {
        id: 2,
        author: 'サトケン',
        date: '2024-01-15 16:45',
        content: '短期・中期・長期に分けて段階的に設定するのが良いと思います。'
      }
    ]
  },
  {
    id: 2,
    title: 'おすすめのビジネス書',
    author: 'ミサキ',
    date: '2024-01-12 09:15',
    content: '最近読んだビジネス書で印象に残ったものがあれば、ぜひ共有してください！',
    replies: [
      {
        id: 3,
        author: 'カナさん',
        date: '2024-01-12 11:30',
        content: '「ピープルアナリティクス」という本が人事の観点から興味深かったです。'
      }
    ]
  },
  {
    id: 3,
    title: '副業について相談',
    author: 'イトウさん',
    date: '2024-01-10 20:00',
    content: 'サラリーマンをしながら副業を検討中です。税務面で注意すべき点があれば教えてください。',
    replies: []
  }
]

export default function BoardPage() {
  const { data: session } = useSession()
  const [posts, setPosts] = useState(initialPosts)
  const [newPostTitle, setNewPostTitle] = useState('')
  const [newPostContent, setNewPostContent] = useState('')
  const [showNewPostForm, setShowNewPostForm] = useState(false)
  const [selectedPost, setSelectedPost] = useState<any>(null)
  const [newReply, setNewReply] = useState('')

  const handleNewPost = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newPostTitle.trim() || !newPostContent.trim()) return

    const newPost = {
      id: posts.length + 1,
      title: newPostTitle,
      author: session?.user?.name || 'Anonymous',
      date: new Date().toLocaleString('ja-JP'),
      content: newPostContent,
      replies: []
    }

    setPosts([newPost, ...posts])
    setNewPostTitle('')
    setNewPostContent('')
    setShowNewPostForm(false)
  }

  const handleNewReply = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newReply.trim() || !selectedPost) return

    const reply = {
      id: Date.now(),
      author: session?.user?.name || 'Anonymous',
      date: new Date().toLocaleString('ja-JP'),
      content: newReply
    }

    const updatedPosts = posts.map(post => 
      post.id === selectedPost.id 
        ? { ...post, replies: [...post.replies, reply] }
        : post
    )

    setPosts(updatedPosts)
    setSelectedPost({ ...selectedPost, replies: [...selectedPost.replies, reply] })
    setNewReply('')
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">掲示板</h1>
            <p className="text-gray-600">メンバー同士でコミュニケーションを取りましょう</p>
          </div>

          {/* 新規投稿ボタン */}
          <div className="mb-6">
            <button
              onClick={() => setShowNewPostForm(!showNewPostForm)}
              className="salon-button"
            >
              新規投稿
            </button>
          </div>

          {/* 新規投稿フォーム */}
          {showNewPostForm && (
            <div className="salon-card p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">新規投稿</h3>
              <form onSubmit={handleNewPost} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    タイトル
                  </label>
                  <input
                    type="text"
                    value={newPostTitle}
                    onChange={(e) => setNewPostTitle(e.target.value)}
                    className="salon-input w-full"
                    placeholder="投稿のタイトルを入力"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    内容
                  </label>
                  <textarea
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    className="salon-input w-full h-32 resize-none"
                    placeholder="投稿内容を入力"
                    required
                  />
                </div>
                <div className="flex space-x-4">
                  <button type="submit" className="salon-button">
                    投稿する
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowNewPostForm(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    キャンセル
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* 投稿一覧 */}
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="salon-card p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {post.title}
                  </h3>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                
                <p className="text-gray-700 mb-4">{post.content}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">by {post.author}</span>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500">
                      返信 {post.replies.length}件
                    </span>
                    <button
                      onClick={() => setSelectedPost(post)}
                      className="text-purple-600 hover:text-purple-800 text-sm"
                    >
                      詳細・返信
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 投稿詳細モーダル */}
          {selectedPost && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-gray-800">
                      {selectedPost.title}
                    </h2>
                    <button
                      onClick={() => setSelectedPost(null)}
                      className="text-gray-500 hover:text-gray-700 text-xl"
                    >
                      ×
                    </button>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                      <span>by {selectedPost.author}</span>
                      <span>{selectedPost.date}</span>
                    </div>
                    <p className="text-gray-700">{selectedPost.content}</p>
                  </div>

                  {/* 返信一覧 */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      返信 ({selectedPost.replies.length}件)
                    </h3>
                    <div className="space-y-4">
                      {selectedPost.replies.map((reply: any) => (
                        <div key={reply.id} className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                            <span>by {reply.author}</span>
                            <span>{reply.date}</span>
                          </div>
                          <p className="text-gray-700">{reply.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 返信フォーム */}
                  <form onSubmit={handleNewReply} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        返信を投稿
                      </label>
                      <textarea
                        value={newReply}
                        onChange={(e) => setNewReply(e.target.value)}
                        className="salon-input w-full h-24 resize-none"
                        placeholder="返信内容を入力"
                        required
                      />
                    </div>
                    <button type="submit" className="salon-button">
                      返信する
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </ProtectedRoute>
  )
}
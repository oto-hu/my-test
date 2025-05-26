'use client'

import Header from '../components/Header'

// ダミーのメンバーデータ
const members = [
  {
    id: 1,
    name: '田中太郎',
    nickname: 'タナカT',
    joinDate: '2023-03-15',
    bio: '東京在住のビジネスコンサルタント。スタートアップ支援に従事。',
    avatar: '👨‍💼',
    interests: ['ビジネス戦略', 'スタートアップ', 'マーケティング']
  },
  {
    id: 2,
    name: '山田花子',
    nickname: 'ハナコ',
    joinDate: '2023-04-02',
    bio: 'フリーランスのWebデザイナー。デザイン思考でビジネス課題を解決。',
    avatar: '👩‍💻',
    interests: ['デザイン', 'UX/UI', 'ブランディング']
  },
  {
    id: 3,
    name: '佐藤健一',
    nickname: 'サトケン',
    joinDate: '2023-02-20',
    bio: '投資家兼経営者。複数の事業を展開中。',
    avatar: '👨‍💼',
    interests: ['投資', '経営戦略', 'M&A']
  },
  {
    id: 4,
    name: '鈴木美咲',
    nickname: 'ミサキ',
    joinDate: '2023-05-10',
    bio: 'マーケティング専門家。データ分析を活用した施策立案が得意。',
    avatar: '👩‍💼',
    interests: ['データ分析', 'マーケティング', '広告運用']
  },
  {
    id: 5,
    name: '高橋雄一',
    nickname: 'タカハシ',
    joinDate: '2023-01-08',
    bio: 'IT企業経営者。テクノロジーとビジネスの架け橋となる活動を推進。',
    avatar: '👨‍💻',
    interests: ['テクノロジー', 'DX', 'AI・機械学習']
  },
  {
    id: 6,
    name: '中村加奈',
    nickname: 'カナさん',
    joinDate: '2023-06-15',
    bio: '人事コンサルタント。組織作りと人材育成のエキスパート。',
    avatar: '👩‍💼',
    interests: ['人事', '組織開発', 'リーダーシップ']
  },
  {
    id: 7,
    name: '伊藤誠',
    nickname: 'イトウさん',
    joinDate: '2023-04-25',
    bio: '財務・会計のプロフェッショナル。企業の財務戦略をサポート。',
    avatar: '👨‍💼',
    interests: ['財務・会計', '税務', '資金調達']
  },
  {
    id: 8,
    name: '小林麻衣',
    nickname: 'マイ',
    joinDate: '2023-07-03',
    bio: 'セールス・営業のスペシャリスト。BtoB営業で多数の実績。',
    avatar: '👩‍💼',
    interests: ['営業', 'セールス', '顧客開発']
  }
]

export default function MembersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">メンバー一覧</h1>
            <p className="text-gray-600">プレミアムサロンメンバーの皆さんです</p>
          </div>

          <div className="mb-6 bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
            <p className="text-blue-800">
              <strong>注意:</strong> こちらに表示されている情報はすべてダミーデータです。
              実際の個人情報は含まれておりません。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {members.map((member) => (
              <div key={member.id} className="salon-card p-6 text-center">
                <div className="text-6xl mb-4">{member.avatar}</div>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {member.nickname}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{member.name}</p>
                
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-800 mb-2">興味・関心分野</h4>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.interests.map((interest, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
                
                <p className="text-xs text-gray-500">
                  参加日: {member.joinDate}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="salon-card p-6 inline-block">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                メンバー募集中！
              </h3>
              <p className="text-gray-600 mb-4">
                プレミアムサロンでは新しいメンバーを募集しています。<br />
                ご興味のある方は運営事務局までお問い合わせください。
              </p>
              <button className="salon-button">
                お問い合わせ
              </button>
            </div>
          </div>
        </main>
    </div>
  )
}
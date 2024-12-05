import Image from 'next/image'
import Link from 'next/link'

export default function Media() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-4 h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center">
              <div className="bg-[#00BFB2] p-2 rounded">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="URAGAWA"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-[#00BFB2] font-medium hover:text-[#00BFB2]/80">
                GALLERY
              </Link>
              <Link href="/media" className="text-gray-600 font-medium hover:text-gray-900">
                MEDIA
              </Link>
              <Link href="/company" className="text-gray-600 font-medium hover:text-gray-900">
                COMPANY
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm">
              URAGAWAとは
            </Link>
            <Image
              src="/placeholder.svg?height=24&width=100"
              alt="MORE WORKS"
              width={100}
              height={24}
              className="h-6 w-auto"
            />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">NEW ARTICLES</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Image src="/placeholder.svg" alt="Article 1" width={600} height={400} className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">朝原はUIデザイナー、エンジニアといった職種を超えた共創から生まれる、ビジネットの新しいプロダクト開発に注力する理由</h3>
              <p className="text-gray-600">朝原がUIデザイナーからプロダクトマネージャーへキャリアチェンジした理由や、ビジネットでのプロダクト開発の特徴についてお話を伺いました。</p>
            </div>
            <div>
              <Image src="/placeholder.svg" alt="Article 2" width={600} height={400} className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">マルチプレイヤーだからこそ見える、大阪なりの仕事観や働き方とは？LIFULL HOME'S LIVE</h3>
              <p className="text-gray-600">大阪拠点のLIFULL HOME'S LIVEでプロダクトマネージャーを務める西野さん。マルチプレイヤーとして活躍する西野さんに、大阪ならではの仕事観や働き方について伺いました。</p>
            </div>
          </div>
        </section>

        <ArticleSection title="制作の裏側" />
        <ArticleSection title="考え方" />
        <ArticleSection title="企業ストーリー" />
        <ArticleSection title="マネジメント" />
        <ArticleSection title="キャリア" />
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          © 2024 LIFULL. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

function ArticleSection({ title }: { title: string }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-gray-100 p-4 rounded-lg">
            <Image src="/placeholder.svg" alt={`Article ${i}`} width={300} height={200} className="rounded-lg mb-4" />
            <h3 className="text-lg font-semibold mb-2">記事タイトル</h3>
            <p className="text-gray-600 text-sm">記事の簡単な説明がここに入ります。</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="px-6 py-2 bg-teal-500 text-white rounded-md">インタビューをもっと見る</button>
      </div>
    </section>
  )
}


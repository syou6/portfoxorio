import Image from 'next/image'
import Link from 'next/link'

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image src="/logo.png" alt="LIFULL Logo" width={120} height={40} />
              </Link>
              <nav className="hidden md:flex items-center space-x-8">
                <Link href="/gallery" className="text-[#00BFB2] font-medium hover:text-[#00BFB2]/80">
                  GALLERY
                </Link>
                <Link href="/company" className="text-gray-600 font-medium hover:text-gray-900">
                  COMPANY
                </Link>
              </nav>
            </div>
            <div className="flex items-center">
              <div className="hidden md:block">
                <input
                  type="text"
                  placeholder="検索"
                  className="border border-gray-300 rounded-md py-2 px-4"
                />
              </div>
              <button className="ml-4 px-4 py-2 bg-teal-500 text-white rounded-md">お問い合わせ</button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-4">MEDIA ページへようこそ</h1>
        <p className="text-gray-700">
          ここにMEDIAページのコンテンツを追加します。
        </p>

        <h3 className="text-xl font-semibold mb-2">
          マルチプレイヤーだからこそ見える、大阪なりの仕事観や働き方とは？LIFULL HOME&#39;S LIVE
        </h3>
        <p className="text-gray-600">
          大阪拠点のLIFULL HOME&#39;S LIVEでプロダクトマネージャーを務める西野さん。マルチプレイヤーとして活躍する西野さんに、大阪ならではの仕事観や働き方について伺いました。
        </p>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          © 2024 LIFULL. All rights reserved.
        </div>
      </footer>
    </div>
  )
}


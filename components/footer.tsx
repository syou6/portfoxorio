import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-8 text-sm text-gray-600 mb-8">
          <Link href="/about" className="hover:text-gray-900">
            KAWAMOTOについて
          </Link>
          <Link href="/terms" className="hover:text-gray-900">
            利用規約
          </Link>
          <Link href="/privacy" className="hover:text-gray-900">
            プライバシーポリシー
          </Link>
          <Link href="/contact" className="hover:text-gray-900">
            お問い合わせ
          </Link>
        </div>
        <div className="flex justify-center">
          <Image
            src="/placeholder.svg?height=24&width=100"
            alt="KAWAMOTO"
            width={100}
            height={24}
            className="h-6 w-auto"
          />
        </div>
      </div>
    </footer>
  )
}


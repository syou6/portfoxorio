import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
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
            <Link
              href="/gallery"
              className="text-[#00BFB2] font-medium hover:text-[#00BFB2]/80"
            >
              GALLERY
            </Link>
            <Link
              href="/media"
              className="text-gray-600 font-medium hover:text-gray-900"
            >
              MEDIA
            </Link>
            <Link
              href="/company"
              className="text-gray-600 font-medium hover:text-gray-900"
            >
              COMPANY
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-6">
          <Link
            href="/about"
            className="text-gray-600 hover:text-gray-900 text-sm"
          >
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
  )
}


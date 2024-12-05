import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Sidebar() {
  return (
    <div className="w-80 space-y-8">
      <div className="bg-[#5F6F7E] p-6 rounded-lg text-white">
        <h2 className="font-bold mb-4">REQUEST</h2>
        <p className="text-sm mb-4">
          URAGAWAでは、素晴らしいWebサイトを随時募集しております。もしよければ、ご紹介ください。
        </p>
        <Button className="w-full bg-[#00BFB2] hover:bg-[#00BFB2]/90 text-white border-none">
          紹介する
        </Button>
      </div>
      
      <div className="space-y-4">
        <h2 className="font-bold text-gray-900">PICKUP ARTICLES</h2>
        <div className="space-y-4">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="BIRDMAN"
              fill
              className="object-cover"
            />
            <Badge className="absolute top-4 right-4 bg-[#E31B6D] text-white border-none">
              PICK UP
            </Badge>
          </div>
          <h3 className="font-medium text-sm leading-relaxed">
            マルチプレイヤーだからこそ見つける、大事なのは確信や信頼ではなくて、自分のスタイル｜BIRDMAN
          </h3>
          <Badge variant="outline" className="text-xs">
            キャリア
          </Badge>
        </div>
      </div>
    </div>
  )
}


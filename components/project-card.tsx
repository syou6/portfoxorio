import Image from 'next/image'
import Link from 'next/link'
import { Badge } from "@/components/ui/badge"
import type { Project } from '@/lib/types'

export function ProjectCard({ title, createdBy, link, isNew, imageUrl }: Project) {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <Link 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block relative aspect-[4/3]"
      >
        <Image
          src={imageUrl}
          alt={`Preview of ${title}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {isNew && (
          <Badge className="absolute top-4 right-4 bg-[#E31B6D] text-white border-none px-2 py-0.5 text-xs font-medium">
            NEW
          </Badge>
        )}
      </Link>
      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-1 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-500">Created By {createdBy}</p>
      </div>
    </div>
  )
}


'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react'
import { Switch } from "@/components/ui/switch"
import { filterOptions } from '@/lib/constants'

export function FilterBar() {
  const [isMobileView, setIsMobileView] = useState(false)

  return (
    <div className="sticky top-16 z-40 bg-white border-b border-gray-200">
      <div className="p-4 flex flex-wrap items-center gap-2">
        {filterOptions.map((filter) => (
          <DropdownMenu key={filter.id}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="h-8 text-sm font-normal border-gray-300"
              >
                {filter.label}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              {filter.options.map((option) => (
                <DropdownMenuItem key={option}>
                  {option}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ))}
        <div className="ml-auto flex items-center space-x-2">
          <Switch
            checked={isMobileView}
            onCheckedChange={setIsMobileView}
            className="data-[state=checked]:bg-[#00BFB2]"
          />
          <span className="text-sm text-gray-600">モバイル</span>
        </div>
      </div>
    </div>
  )
}


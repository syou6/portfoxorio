export interface Project {
  id: string
  title: string
  createdBy: string
  imageUrl: string
  isNew?: boolean
  link: string
}

export interface FilterOption {
  id: string
  label: string
  options: string[]
}


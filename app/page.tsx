import { Header } from "@/components/header"
import { FilterBar } from "@/components/filter-bar"
import { ProjectCard } from "@/components/project-card"
import { Sidebar } from "@/components/sidebar"
import { Footer } from "@/components/footer"
import { projects, archiveProjects } from "@/lib/constants"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-16"> {/* Offset for fixed header */}
        <FilterBar />
        <main className="container mx-auto px-4 py-8">
          <div className="flex gap-8">
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    {...project}
                  />
                ))}
              </div>
              
              <div className="mt-20 mb-12">
                <h2 className="text-2xl font-bold text-center mb-12">ARCHIVE</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {archiveProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      {...project}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="sticky top-28">
                <Sidebar />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}


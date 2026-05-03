import ProjectDetail from '../../../components/ProjectDetail'
import { projects } from '../projectsData'

export const metadata = {
  title: 'Instagram Art Community · Swarna Dey',
}

export default function InstagramArtPage() {
  const project = projects.find(p => p.slug === 'instagram-art-community')
  return <ProjectDetail project={project} />
}

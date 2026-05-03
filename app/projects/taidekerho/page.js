import ProjectDetail from '../../../components/ProjectDetail'
import { projects } from '../projectsData'

export const metadata = {
  title: 'Community Art Club — Taidekerho · Swarna Dey',
}

export default function TaidekerhoPage() {
  const project = projects.find(p => p.slug === 'taidekerho')
  return <ProjectDetail project={project} />
}

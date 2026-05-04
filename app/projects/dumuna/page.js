import ProjectDetail from '../../../components/ProjectDetail'
import { projects } from '../projectsData'

export const metadata = {
  title: 'DUMUNA — Model United Nations · Swarna Dey',
}

export default function DUMUNAPage() {
  const project = projects.find(p => p.slug === 'dumuna')
  return <ProjectDetail project={project} />
}

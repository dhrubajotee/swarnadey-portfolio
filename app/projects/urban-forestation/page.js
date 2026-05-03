import ProjectDetail from '../../../components/ProjectDetail'
import { projects } from '../projectsData'

export const metadata = {
  title: 'Urban Forestation Campaign · Swarna Dey',
}

export default function UrbanForestationPage() {
  const project = projects.find(p => p.slug === 'urban-forestation')
  return <ProjectDetail project={project} />
}

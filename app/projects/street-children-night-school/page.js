import ProjectDetail from '../../../components/ProjectDetail'
import { projects } from '../projectsData'

export const metadata = {
  title: 'Street Children Night School · Swarna Dey',
}

export default function NightSchoolPage() {
  const project = projects.find(p => p.slug === 'street-children-night-school')
  return <ProjectDetail project={project} />
}

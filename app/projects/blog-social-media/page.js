import ProjectDetail from '../../../components/ProjectDetail'
import { projects } from '../projectsData'

export const metadata = {
  title: 'International Life in Jyväskylä · Swarna Dey',
}

export default function BlogSocialMediaPage() {
  const project = projects.find(p => p.slug === 'blog-social-media')
  return <ProjectDetail project={project} />
}

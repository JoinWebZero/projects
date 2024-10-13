import { ProjectCard } from '@/components/ProjectCard';
import { About } from '@/components/About';
import { ActiveProjects } from '@/components/ActiveProjects';

export const Home = () => {
  

  return (
    <main className="flex flex-col items-center justify-center gap-4 p-4">
      <About />
      
      <ActiveProjects Project={{
        donationAddress: '',
        eventStartedAt: '',
        slidesUrl: '',
        demoUrl: '',
        githubRepo: '',
        description: '',
        projectName: '',
        teamLead: '',
        techStack: '',
        milestones: ''
      }} />

    </main>
  );
};

export default Home;
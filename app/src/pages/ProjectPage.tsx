import React, { useState, useEffect } from 'react';

// Define project and category types
interface Project {
  projectName: string;
  teamLead: string;
  description: string;
  githubRepo: string;
  demoUrl: string;
  slidesUrl: string;
  techStack: string;
  donationAddress?: string;
}

const categories = [
  'All',
  'DeFi',
  'Web3 Infrastructure',
  'Social/Community Platforms',
  'Governance and DAOs',
  'Data and Analytics',
  'Gaming and NFTs',
  'Developer Tools',
  'Decentralized Applications (dApps)',
  'Climate and Sustainability',
  'Content and Media',
];

// Mock function to fetch project data
const fetchProjects = async (): Promise<Project[]> => {
  const response = await fetch('/funkhaus-2024.json'); // Ensure the correct path to your JSON file
  return await response.json();
};

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    // Fetch projects when component mounts
    fetchProjects().then((data) => {
      setProjects(data);
      setFilteredProjects(data); // Initially display all projects
    });
  }, []);

  // Function to filter projects by category
  const filterByCategory = (category: string) => {
    setSelectedCategory(category);
    
    if (category === 'All') {
      // If "All" is selected, show all projects
      setFilteredProjects(projects);
    } else {
      // Filter based on the selected category
      const filtered = projects.filter((project) => {
        switch (category) {
          case 'DeFi':
            return project.description.toLowerCase().includes('defi') || project.description.toLowerCase().includes('crypto');
          case 'Web3 Infrastructure':
            return project.description.toLowerCase().includes('infrastructure');
          case 'Social/Community Platforms':
            return project.description.toLowerCase().includes('community');
          case 'Governance and DAOs':
            return project.description.toLowerCase().includes('governance') || project.description.toLowerCase().includes('dao');
          case 'Data and Analytics':
            return project.description.toLowerCase().includes('data') || project.description.toLowerCase().includes('analytics');
          case 'Gaming and NFTs':
            return project.description.toLowerCase().includes('nft') || project.description.toLowerCase().includes('gaming');
          case 'Developer Tools':
            return project.description.toLowerCase().includes('tool') || project.description.toLowerCase().includes('developer');
          case 'Decentralized Applications (dApps)':
            return project.description.toLowerCase().includes('dapp');
          case 'Climate and Sustainability':
            return project.description.toLowerCase().includes('climate') || project.description.toLowerCase().includes('sustainability');
          case 'Content and Media':
            return project.description.toLowerCase().includes('content') || project.description.toLowerCase().includes('media');
          default:
            return false;
        }
      });
      setFilteredProjects(filtered);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-3xl font-bold mb-4">Projects by Category</h1>

      {/* Category Selector */}
      <div className="mb-4">
        <label htmlFor="category-select" className="mr-2 font-semibold">
          Select Category:
        </label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={(e) => filterByCategory(e.target.value)}
          className="border p-2 text-black bg-white" /* Ensure the text in the dropdown is visible */
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Render Project Cards */}

      <div className="flex flex-col items-center justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <div key={index} className="project-card border p-4 rounded-md shadow-md">
              <h2 className="text-xl font-semibold mb-2">{project.projectName}</h2>
              <p className="text-sm text-gray-600 mb-2">Team Lead: {project.teamLead}</p>
              <p className="text-sm mb-4">{project.description}</p>
              <p><strong>Tech Stack:</strong> {project.techStack}</p>

              <div className="flex flex-col space-y-2 mt-4">
                {project.githubRepo && (
                  <a
                    href={project.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    GitHub Repository
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Demo
                  </a>
                )}
                {project.slidesUrl && (
                  <a
                    href={project.slidesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Slides
                  </a>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No projects found for the selected category.</p>
        )}
      </div>
    </main>
  );
};

export default ProjectsPage;

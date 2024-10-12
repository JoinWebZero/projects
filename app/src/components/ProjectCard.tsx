import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useState, useEffect } from 'react';
import { Project } from '@/contexts/ProjectsContext';
import { useNavigate } from 'react-router-dom';
import { Label } from '@radix-ui/react-dropdown-menu';

interface Props {
  Project: Project;
}

export const ProjectCard = ({ Project: d }: Props) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const navigate = useNavigate();


  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 1000);
    }
  }, [copied]);

  const onSupport = () => {
    setShowDetails(!showDetails);
  };

  const onDonate = () => {
    // const slug = d.projectName.replace(/\s+/g, '-').toLowerCase();

    navigate(`/project/${d.donationAddress}`);
  }

  return (
    <Card className="border-2 flex flex-col p-4 mb-5">
      <div className="flex flex-col">
        {/* Project Basic Info */}
        <div className="flex flex-row">
          {/* Image Section (if you have images) */}
          {/* <div className="p-2 w-[10%]">
            <img className="rounded-3xl" width="100" src={d.image} alt={d.project_name} />
          </div> */}
          <div className="p-2 w-full">
            <h2 className="font-bold text-xl">{d.projectName}</h2>

      <div className="grid">
              <div className="items-center text-sm">
                <strong>Team lead: </strong>
              </div>
              <p>{d.teamLead}</p>

              <div className="items-center text-sm">
                <strong>Donation address: </strong>
                <a
                  href={`https://assethub-polkadot.subscan.io/`}
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 {d.donationAddress}
                </a>
      
              </div>
              

              {/* <div className="items-center pt-10">__description__</div> */}

              <div className="items-center text-sm">
                <strong>Last milestone update:</strong>
              <p>{d.milestones}</p>
              </div>
            </div>

            <div className="mt-4 p-4 border-t border-gray-200">

              <p className="mt-2">{d.description}...</p>
              <div className="flex flex-wrap gap-4 mt-4">
                {d.githubRepo && (
                  <a
                    href={d.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    GitHub Repository
                  </a>
                )}
                {d.demoUrl && d.demoUrl !== 'nan' && (
                  <a
                    href={d.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Project Demo
                  </a>
                )}
                {d.slidesUrl && d.slidesUrl !== 'nan' && (
                  <a
                    href={d.slidesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Link to Slides
                  </a>
                )}
              </div>
            </div>

            {/* <div className="flex flex-col space-y-4">
              {d.donationAddress && d.donationAddress !== 'nan' && (
                <Button variant="secondary" className="mt-4 " onClick={onDonate}>
                  Support
                </Button>
              )}
              <Button className="mt-4" onClick={onDonate}>
                Updates
              </Button>
            </div> */}
          </div>
        </div>

        {/* Detailed Information */}
        {showDetails && (
          <div className="mt-4 p-4 border-t border-gray-200">
            <p className="mt-2">{d.description}</p>
            {d.teamLead && d.teamLead !== 'nan' && (
              <p className="mt-2">
                <strong>Team Lead:</strong> {d.teamLead}
              </p>
            )}

            {d.techStack && d.techStack !== 'nan' && (
              <p className="mt-2">
                <strong>Tech Stack:</strong> {d.techStack}
              </p>
            )}

            <div className="flex flex-wrap gap-4 mt-4">
              {d.githubRepo && (
                <a
                  href={d.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub Repository
                </a>
              )}
              {d.demoUrl && d.demoUrl !== 'nan' && (
                <a
                  href={d.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Project Demo
                </a>
              )}
              {d.slidesUrl && d.slidesUrl !== 'nan' && (
                <a
                  href={d.slidesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Link to Slides
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

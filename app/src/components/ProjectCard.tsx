import { Card } from '@/components/ui/card';
import { useState, useEffect } from 'react';
import { Project } from '@/contexts/ProjectsContext';

interface Props {
  Project: Project;
}

export const ProjectCard = ({ Project: d }: Props) => {
  const [copied, setCopied] = useState<boolean>(false);
  const showDetails = useState<boolean>(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 1000);
    }
  }, [copied]);

  return (
    <Card className="border-2 flex flex-col p-4 mb-5">
      <div className="flex flex-col">
        {/* Project Basic Info */}
        <div className="flex flex-row">
          <div className="p-2 w-full">
            <h2 className="font-bold text-xl">{d.projectName}</h2>

            <div>
              {/* <div className="items-center text-sm">
                <strong>Name: </strong>
                {d.teamLead}
              </div> */}

              {/* Render Project Address only if it exists */}
              {/* {d.donationAddress && (
                <div className="items-center text-sm">
                  <strong>Project address: </strong>
                  <a
                    href={`https://assethub-polkadot.subscan.io/account/${d.donationAddress}`}
                    className="text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {d.donationAddress}
                  </a>
                </div>
              )} */}

              <div className="items-center text-sm">
                <p>{d.description}</p>
              </div>
              <div className="items-center text-sm mt-4">
                <strong>Tags:</strong>
                <p>{d.techStack}</p>
              </div>
            </div>

            <div className="mt-4 p-4 border-t border-gray-200">
              {/* <p className="mt-2">{d.description}...</p> */}
              <div className="items-center text-sm">
                <strong>Last milestone update: </strong>
                {d.milestones}
              </div>
              {/* Render links only if they exist */}
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

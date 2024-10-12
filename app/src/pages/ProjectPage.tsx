import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useProjects } from '@/contexts/ProjectsContext';
import { useNetwork } from '@/contexts/NetworkContext';
import { Button } from '@/components/ui/button';
import { useAccounts } from '@/contexts/AccountsContext';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const ProjectPage: React.FC = () => {
  const [commitDate, setCommitDate] = useState<string | null>(null);
  const { donationAddress } = useParams();
  const { getProjectByAddress } = useProjects();
  const [Project, setProject] = useState(getProjectByAddress(donationAddress));
  const [amount, setAmount] = useState<number>(0);
  const { api } = useNetwork();
  const { selectedAccount } = useAccounts();

  // Fetch latest commit date when the project or GitHub repo changes
  useEffect(() => {
    if (Project?.githubRepo) {

      const repoPath = Project.githubRepo.replace('https://github.com/', ''); // Extract "owner/repo"

      fetch(`https://api.github.com/repos/${repoPath}/commits`)
        .then(response => response.json())
        .then(data => {
          if (data && data.length > 0) {
            const latestCommit = data[0];
            setCommitDate(
              new Date(latestCommit.commit.committer.date).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })
            );
          }
        })
        .catch(error => console.error('Error fetching commit data:', error));
    }
  }, [Project]);

  // Fetch project data if it hasn't already been set
  useEffect(() => {
    if (!Project) {
      setProject(getProjectByAddress(donationAddress));
    }
  }, [donationAddress, Project, getProjectByAddress]);

  if (!Project || !api) return <div>No Project found</div>;

  const onChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  if (!api || !selectedAccount) return <div>No account found</div>;

  const onSign = async () => {
    // Your donation sign logic goes here
  };

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:mx-[5%] xl:mx-[20%] mx-0 sm:px-6 sm:py-0 md:gap-8">
      <h1 className="font-unbounded text-primary flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
        Donate to "{Project.projectName}"
      </h1>

      <div className="grid">
        <div className="items-center text-sm">
          <strong>Team lead: </strong> {Project.teamLead}
        </div>

        <div className="items-center text-sm">
          <strong>Donation address</strong>:
          <a
            href={`https://assethub-polkadot.subscan.io/account/${Project.donationAddress}`}
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {Project.donationAddress}
          </a>
        </div>
        
        <div className="items-center text-sm">
          <strong>Github</strong>:
          <a href={Project.githubRepo} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
            {Project.githubRepo}
          </a>
          <br />
        </div>

        <div className="items-center pt-10">{Project.description}</div>

        <div className="items-center text-sm pt-10">
          <strong>Latest Commit Date:</strong> {commitDate ? commitDate : 'Loading...'}
        </div>

        <div className="pageTop">
          <Label>Amount</Label>
          <Input onChange={onChangeAmount} value={amount} />
        </div>
      </div>

      <Button onClick={onSign} disabled={amount === 0}>
        Support
      </Button>
    </main>
  );
};

export default ProjectPage;
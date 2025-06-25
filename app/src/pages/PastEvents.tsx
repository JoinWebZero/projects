
export const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center p-6 sm:p-8 lg:p-12 bg-gray-50">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-6">
        Prize Pool Logic for the Blockspace Symmetry Hackathon at Funkhaus, 2024
      </h2>

      {/* Paragraph Content */}
      <div className="max-w-4xl text-center text-gray-700 leading-relaxed">
        {/* Acknowledgment to Partners */}
        <h3 className="text-lg sm:text-xl font-semibold mb-4">
          Thank you to our hackathon partners who contributed to the prize pool and helped mentor teams during the hackathon:
        </h3>

        {/* Partner List */}
        <ul className="text-lg font-medium text-gray-800 mb-6">
          <li>Polkadot</li>
          <li>Solana</li>
          <li>Rootstock</li>
          <li>Starknet</li>
          <li>Cere Network</li>
        </ul>

        {/* Prize Pool Information */}
        <p className="mb-4">
          The prize amount is a growing pool currently set at <strong>$30,000</strong>.
        </p>

        {/* Prize Distribution */}
        <p className="mb-4">
          The prize money will be evenly distributed among the winning teams.
        </p>

        {/* Payment Installments */}
        <p className="mb-4">
          Prizes will be distributed to the winning teams in two installments: an initial payment of <strong>$3,000</strong> within the first week after the winners are announced, and the remaining amount within six weeks following the first round of post-hackathon evaluations.
        </p>

        {/* Resources by Partners */}
        <p className="mb-4">
          Teams will be able to choose what resources they would like to use, offered by our Partners.
        </p>

        {/* Project Presentation */}
        <p className="mb-4">
          You will present your project to a panel of experienced judges who will assess its viability beyond the hackathon.
        </p>
      </div>
    </main>
  );
};

export default Home;

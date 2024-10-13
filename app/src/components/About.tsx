export const About = () => {
  return (
    <section className="bg-custom-svg py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center flex flex-col items-center justify-center space-y-4">

          {/* Title or Headline */}
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Projects submitted at the Blockspace Hackathons
          </h2>

          {/* Paragraph content */}
          <p className="mt-2 text-lg max-w-3xl mx-auto">
            You can see the milestones reached by projects who won prizes and continued working on their projects post-hackathon.
          </p>

        </div>
      </div>
    </section>
  );
};

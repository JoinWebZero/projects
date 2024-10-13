import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Project, useProjects } from '@/contexts/ProjectsContext';
import { ProjectCard } from "./ProjectCard";

interface Props {
    Project: Project;
  }
  
export const ActiveProjects = ({ Project: d }: Props) => {

    const { projects } = useProjects();

    // Slider settings for the carousel
    const sliderSettings = {
        dots: false, // No dots, just arrows
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Show 1 slide at a time
        slidesToScroll: 1, // Scroll 1 slide at a time
        centerMode: true, // Center the slide
        centerPadding: "0", // No padding around the slide
        arrows: true, // Show navigation arrows
    };

    return (
        <div className="flex flex-col items-center justify-center gap-4 p-4">
            <h2 className="text-primary text-xl font-semibold tracking-tight text-center">
                Projects with completed milestones
            </h2>


            <div className="w-full max-w-lg">
                <Slider {...sliderSettings}>
                    {projects?.filter(d => d.donationAddress).map((d, index) => (
                        <div key={index} className="flex justify-center">
                            <ProjectCard Project={d} />
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Grid for all past submissions */}

            <h2 className="text-primary text-xl font-semibold tracking-tight text-center">
                All past submissions
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4 w-full max-w-4xl">
                {projects?.map((d, index) => (
                    <ProjectCard key={index} Project={d} />
                ))}
            </div>

        </div>
    );
};
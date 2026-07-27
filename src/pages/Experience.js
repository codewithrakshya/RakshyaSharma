import ExperienceSection from "../components/WorkExperience";
import EducationSection from "../components/Education";

const Experience = () => {
  return (
    <div className="flex flex-col w-full md:flex-row">
      <div className="w-full mb-8 md:w-1/2 md:mb-0 md:pl-16">
        <h2 className="flex justify-center mb-4 text-4xl font-bold md:text-5xl">
          Education
        </h2>
        <EducationSection />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="flex justify-center mb-4 text-4xl font-bold md:text-5xl">
          Experience
        </h2>
        <ExperienceSection />
      </div>
    </div>
  );
};

export default Experience;

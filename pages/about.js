import SiteHead from "../components/SiteHead";
import Image from "next/image";

const About = () => {
  return (
    <>
      <SiteHead routeTitle="About" />
      <div className="flex flex-col items-center">
        <Image
          src="/profile-photo.jpg"
          alt="joao's photo"
          width="400"
          height="400"
        />
      </div>
    </>
  );
};

export default About;

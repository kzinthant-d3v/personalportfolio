import { GradientHeader } from "..";
import Image from "next/image";
import HeroImg from "../../images/hero.png";
import DownArrow from "../../icons/DownArrow.svg";

const HeaderSection = () => {
  return (
    <div>
      <div className="h-10" />
      <div className="flex flex-col">
        <GradientHeader text="About me." className="text-center lg:text-left" />
        <div className="h-[20px] lg:h-[20px] 2xl:h-[400px]" />
        <div className="flex flex-col lg:flex-row">
          <div className="lg:pt-[100px] flex-1">
            <h2 className="header text-center lg:text-left">
              Hi, I am Kyaw Zin Thant.
            </h2>
            <h2 className="header text-center lg:text-left">
              You can call me Kaskar!
            </h2>
            <div className="h-[20px] lg:h-[16px] 2xl:h-[16px]" />
            <p className="text-center lg:text-left based-text-size mx-auto lg:mx-0 md:w-[500px] lg:w-[500px] 2xl:w-[1500px] lg:leading-8">
              I am software developer who wants to make the world a better place
              by giving quality of a true software.
            </p>
            <div className="hidden lg:flex lg:mt-[97px] items-center space-x-4 cursor-pointer">
              <Image src={DownArrow} alt="Down Arrow" />
              <span>Get to know about me</span>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <Image src={HeroImg} alt="Hero Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;

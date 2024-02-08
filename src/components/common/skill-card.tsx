import Image from "next/image";

interface SkillCardProps {
  icon: string;
  name: string;
}

const SkillCard = ({ icon, name }: SkillCardProps) => {
  return (
    <div className="relative shadow-md bg-white dark:bg-dark rounded-lg aspect-square w-full flex flex-col justify-end">
      <Image
        src={icon}
        alt={name}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[70%] md:-translate-y-[80%]"
        width={50}
        height={50}
      />
      <p className="based-text-size text-center mb-[7px] md:mb-4 lg:mb-4 xl:mb-5">
        {name}
      </p>
    </div>
  );
};

export default SkillCard;

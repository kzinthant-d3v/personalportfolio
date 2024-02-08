"use client";

import ReactSVG from "../../icons/react.svg";
import AngularSVG from "../../icons/angular.svg";
import AntDesignSVG from "../../icons/antdesign.svg";
import AstroJsSVG from "../../icons/astrojs.svg";
import CssSVG from "../../icons/css.svg";
import DockerSVG from "../../icons/docker.svg";
import FigmaSVG from "../../icons/figma.svg";
import FirebaseSVG from "../../icons/firebase.svg";
import FlutterSVG from "../../icons/flutter.svg";
import GatsbySVG from "../../icons/gatsby.svg";
import GraphqlSVG from "../../icons/graphql.svg";
import HtmlSVG from "../../icons/html.svg";
import JavascriptSVG from "../../icons/javascript.svg";
import JestSVG from "../../icons/jest.svg";
import JquerySVG from "../../icons/jquery.svg";
import LinuxSVG from "../../icons/linux.svg";
import MaterialSVG from "../../icons/material.svg";
import MongoDbSVG from "../../icons/mongodb.svg";
import NestSVG from "../../icons/nestjs.svg";
import NextSVG from "../../icons/nextjs.svg";
import NodeSVG from "../../icons/nodejs.svg";
import PrismaSVG from "../../icons/prisma.svg";
import PythonSVG from "../../icons/python.svg";
import ReduxSVG from "../../icons/redux.svg";
import RestApiSVG from "../../icons/restapi.svg";
import ServerlessSVg from "../../icons/serverless.svg";
import SqlSVG from "../../icons/sql.svg";
import StrapiSVG from "../../icons/strapi.svg";
import TailwindSVG from "../../icons/tailwind.svg";
import TypescriptSVG from "../../icons/typescript.svg";
import VimSVG from "../../icons/vim.svg";

import SkillCard from "../common/skill-card";
import { useState } from "react";

const skills = [
  {
    name: "HTML",
    icon: HtmlSVG,
  },
  {
    name: "CSS",
    icon: CssSVG,
  },
  {
    name: "Tailwind",
    icon: TailwindSVG,
  },
  {
    name: "Vim",
    icon: VimSVG,
  },
  {
    name: "Javascript",
    icon: JavascriptSVG,
  },
  {
    name: "Typescript",
    icon: TypescriptSVG,
  },
  {
    name: "Graphql",
    icon: GraphqlSVG,
  },
  {
    name: "React",
    icon: ReactSVG,
  },
  {
    name: "Redux",
    icon: ReduxSVG,
  },
  {
    name: "Jest",
    icon: JestSVG,
  },
  {
    name: "NextJs",
    icon: NextSVG,
  },
  {
    name: "Gatsby",
    icon: GatsbySVG,
  },
  {
    name: "Strapi",
    icon: StrapiSVG,
  },
  {
    name: "Material UI",
    icon: MaterialSVG,
  },
  {
    name: "AntDesign",
    icon: AntDesignSVG,
  },
  {
    name: "Figma",
    icon: FigmaSVG,
  },
  {
    name: "Angular",
    icon: AngularSVG,
  },
  {
    name: "NodeJs",
    icon: NodeSVG,
  },
  {
    name: "NestJs",
    icon: NestSVG,
  },
  {
    name: "Prisma",
    icon: PrismaSVG,
  },
  {
    name: "MongoDb",
    icon: MongoDbSVG,
  },
  {
    name: "Firebase",
    icon: FirebaseSVG,
  },
  {
    name: "Serverless",
    icon: ServerlessSVg,
  },
  {
    name: "Docker",
    icon: DockerSVG,
  },
  {
    name: "Linux",
    icon: LinuxSVG,
  },
  {
    name: "Python",
    icon: PythonSVG,
  },
  {
    name: "Flutter",
    icon: FlutterSVG,
  },
  {
    name: "Jquery",
    icon: JquerySVG,
  },
  {
    name: "Sql",
    icon: SqlSVG,
  },
];

type Navs = "Expertise" | "Experience" | "Education";

const sections: Record<Navs, JSX.Element> = {
  Expertise: (
    <div className="w-full">
      <h2 className="font-bold text-transparent bg-clip-text moving-gradient mb-8 text-2xl text-center lg:hidden">
        Expertise
      </h2>
      <div className="w-full lg:flex-1 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 auto-rows-auto gap-4 place-items-center">
        {skills.map((skill, index) => (
          <SkillCard key={index} icon={skill.icon} name={skill.name} />
        ))}
      </div>
    </div>
  ),
  Experience: (
    <div className="mt-8 lg:mt-0">
      <h2 className="font-bold text-transparent bg-clip-text moving-gradient mb-8 text-2xl text-center lg:hidden">
        Experiences
      </h2>
    </div>
  ),
  Education: (
    <div className="mt-8 lg:mt-0">
      <h2 className="font-bold text-transparent bg-clip-text moving-gradient mb-8 text-2xl text-center lg:hidden">
        Education
      </h2>
    </div>
  ),
};

const Expertise = () => {
  const [activeNav, setActiveNav] = useState<Navs>("Expertise");
  return (
    <div className="flex">
      <div className="hidden lg:flex flex-col space-y-8 md:w-[20%] lg:w-[20%]">
        {Object.keys(sections).map((nav) => (
          <div
            key={nav}
            className={`cursor-pointer ${
              nav === activeNav
                ? "text-transparent font-semibold bg-clip-text bg-black dark:moving-gradient"
                : "text-[#93ACC8]"
            }`}
            onClick={() => setActiveNav(nav as Navs)}
          >
            {nav}
          </div>
        ))}
      </div>
      <div className="w-full">
        {sections[activeNav]}

        <div className="lg:hidden">
          {sections["Experience"]}
          {sections["Education"]}
        </div>
      </div>
    </div>
  );
};

export default Expertise;

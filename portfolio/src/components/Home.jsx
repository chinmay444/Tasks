import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap, FaServer, FaDatabase, FaToolbox, FaCode, FaRocket } from 'react-icons/fa';

function Home() {
  return (
    <>
      <div className="text-center p-8">
        <a href="https://avatars.githubusercontent.com/u/101935866?v=4"></a>
        <header className="bg-gray-800 text-white py-10">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-xl mb-8">Hi, I'm Chinmay Chaudhari, a Software Engineer</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <SkillBox icon={<FaHtml5 />} name="HTML" />
            <SkillBox icon={<FaCss3 />} name="CSS" />
            <SkillBox icon={<FaJs />} name="JavaScript" />
            <SkillBox icon={<FaReact />} name="React" />
            <SkillBox icon={<FaBootstrap />} name="Bootstrap" />
            <SkillBox icon={<FaServer />} name="Linux" />
            <SkillBox icon={<FaDatabase />} name="Redis" />
            <SkillBox icon={<FaToolbox />} name="DevOps" />
            <SkillBox icon={<FaCode />} name="Git" />
            <SkillBox icon={<FaRocket />} name="Docker" />
            <SkillBox icon={<FaRocket />} name="Jenkins" />
            <SkillBox icon={<FaRocket />} name="Ansible" />
            <SkillBox icon={<FaRocket />} name="Kubernetes" />
            <SkillBox icon={<FaRocket />} name="Maven" />
            <SkillBox icon={<FaRocket />} name="VSCode" />
          </div>
        </header>
      </div>
    </>
  );
}

function SkillBox({ icon, name }) {
  return (
    <div className="flex flex-col items-center mx-5 justify-center bg-blue-500 rounded-lg p-4 transform hover:scale-105 transition-transform duration-300">
      {icon}
      <p className="mt-2 text-lg font-medium">{name}</p>
    </div>
  );
}

export default Home;

import React from 'react';

function About() {
  return (
    <>
      <section className="mt-10 p-8 bg-white rounded-lg shadow-xl transform transition-transform duration-700 ease-in-out hover:scale-105">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-4xl font-bold text-blue-600 mb-6 text-center md:text-left animate-fade-in">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-6 items-center">
            <img
              src="https://avatars.githubusercontent.com/u/101935866?s=400&u=e07b24d5eb299e4cf472c26782d0e4ff00a1b0b7&v=4"
              alt="Chinmay Chaudhari"
              className="w-48 h-48 rounded-full shadow-lg mb-6 md:mb-0 animate-slide-in"
            />
            <div className="text-center md:text-left">
              <p className="text-lg text-gray-700 leading-relaxed mb-4 animate-fade-in text-justify">
                Hello! I'm <span className="font-bold text-blue-600">Chinmay Chaudhari</span>, a passionate Software Engineer with experience in Software Development. My journey in software development began during my college days, where I discovered my love for coding and problem-solving.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 animate-fade-in text-justify">
                Throughout my career, I have had the opportunity to work on a wide range of projects, from building interactive web applications to designing scalable backend systems. I specialize in frontend technologies such as React, Vue.js, and Angular, as well as backend frameworks like Node.js and Django.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 animate-fade-in text-justify">
                I am deeply passionate about creating user-centric and visually appealing applications that deliver seamless experiences. My attention to detail and commitment to quality ensure that every project I work on meets the highest standards.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 animate-fade-in text-justify">
                In addition to my technical skills, I also possess strong communication and collaboration abilities. I thrive in team environments and enjoy working closely with designers, product managers, and fellow developers to bring ideas to life.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed animate-fade-in text-justify">
                My ultimate goal is to continue learning and growing as a software engineer, while also making a positive impact on the world through technology. I am excited about the opportunities that lie ahead and look forward to the challenges that come with them.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

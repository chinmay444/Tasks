import React from 'react';
import { FaGithub } from 'react-icons/fa';

function Projects() {
  const projects = [
    {
      date: 'May 1',
      category: 'Task-1',
      title: 'TODO APP',
      description: 'TODO app with react having usestate used.',
      author: 'Chinmay Chaudhari',
      imageUrl: 'https://avatars.githubusercontent.com/u/101935866?s=96&v=4',
      githubUrl: 'https://github.com/chinmay444/Tasks/tree/main/todoapp',
    },
    {
      date: 'May 7',
      category: 'Task-2',
      title: 'funcolor',
      description: 'funcolor changes color on clicking it with button using usestate hook.',
      author: 'Chinmay Chaudhari',
      imageUrl: 'https://avatars.githubusercontent.com/u/101935866?s=96&v=4',
      githubUrl: 'https://github.com/chinmay444/Tasks/tree/main/funcolor',
    },
    {
      date: 'May 18',
      category: 'Task-3',
      title: 'Expense Tracker',
      description: 'Simple Expense Tracker that tracks expenses and transaction history.',
      author: 'Chinmay Chaudhari',
      imageUrl: 'https://avatars.githubusercontent.com/u/101935866?s=96&v=4',
      githubUrl: 'https://github.com/chinmay444/Tasks/tree/main/expensetracker',
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -my-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="py-8 px-4 lg:w-1/3 transform transition-transform duration-300 hover:scale-105"
            >
              <div className="h-full flex items-start bg-indigo-100 p-6 rounded-lg shadow-md hover:shadow-xl">
                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                  <span className="text-indigo-500 pb-2 mb-2 border-b-2 border-indigo-200">
                    {project.date.split(' ')[0]}
                  </span>
                  <span className="font-medium text-lg text-indigo-800 title-font leading-none">
                    {project.date.split(' ')[1]}
                  </span>
                </div>
                <div className="flex-grow pl-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                    {project.category}
                  </h2>
                  <h1 className="title-font text-xl font-medium text-indigo-900 mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed mb-5">{project.description}</p>
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center text-indigo-500 hover:text-indigo-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size="1.5em" />
                    <span className="ml-2">View on GitHub</span>
                  </a>
                  <div className="inline-flex items-center mt-4">
                    <img
                      alt="author"
                      src={project.imageUrl}
                      className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-3">
                      <span className="title-font font-medium text-indigo-900">
                        {project.author}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

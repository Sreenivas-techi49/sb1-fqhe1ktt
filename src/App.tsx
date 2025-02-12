import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, ChevronDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center relative px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            Sreenivasulu B
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Developer | React Specialist | Problem Solver
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <a href="https://github.com" className="hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:sreenivasulu.b96@gmail.com" className="hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <ChevronDown className="absolute bottom-8 animate-bounce" size={32} />
      </header>

      {/* About Section */}
      <section className="py-20 px-4" id="about">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <User className="text-blue-400" />
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=800"
              alt="Profile"
              className="rounded-lg shadow-xl"
            />
            <div>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a passionate Full Stack Developer with extensive experience building web applications.
                I specialize in React, Node.js, and modern web technologies. When I'm not coding,
                you'll find me contributing to open-source projects or learning new technologies.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I believe in writing clean, maintainable code and creating intuitive user experiences.
                My goal is to build applications that make a positive impact on people's lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Code2 className="text-blue-400" />
            <h2 className="text-3xl font-bold">Skills</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              'React', 'TypeScript', 'Node.js',
              'Next.js', 'TailwindCSS', 'PostgreSQL',
              'GraphQL', 'Docker', 'AWS'
            ].map((skill) => (
              <div key={skill} className="bg-gray-700/50 p-4 rounded-lg">
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Briefcase className="text-blue-400" />
            <h2 className="text-3xl font-bold">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'E-commerce Platform',
                description: 'A full-featured e-commerce platform built with React and Node.js',
                image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800'
              },
              {
                title: 'Task Management App',
                description: 'A collaborative task management application with real-time updates',
                image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800'
              }
            ].map((project) => (
              <div key={project.title} className="bg-gray-800 rounded-lg overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <a href="#" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300">
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-300 mb-6">
            I'm always open to new opportunities and interesting projects.
          </p>
          <a
            href="mailto:sreenivasulu.b96@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Contact Me <Mail size={18} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
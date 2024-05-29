import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';



function ContactMe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
    setSubmitted(true);
  };

  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Reach Out
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Leave a Message for Us.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    type="submit"
                    className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Submit Response
                  </button>
                </div>
                {submitted && (
                  <div className="p-2 w-full text-center">
                    <p className="text-green-500">Your feedback has been submitted!</p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
      {submitted && (
        <section className="text-gray-600 body-font relative mt-12">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Submitted Data
              </h2>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <ul className="list-inside list-disc">
                <li>Name: {name}</li>
                <li>Email: {email}</li>
                <li>Message: {message || 'N/A'}</li>
              </ul>
            </div>
          </div>
        </section>
      )}
      <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
        <a href="mailto:chinmayschaudhari121@gmail.com" className="text-indigo-500">Mail Us</a>
        <p className="leading-normal my-5">
          Adgaon street 3-9,
          <br />
          Panchavati, Nashik 422003
        </p>
      </div>
    
    
      <div className="flex justify-center space-x-8 my-6">
        <a href="mailto:chinmayschaudhari121@gmail.com" className="text-blue-500 hover:text-blue-700">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
          <p className="mt-2">Mail</p>
        </a>
        <a href="tel:+917410776707" className="text-blue-500 hover:text-blue-700">
          <FontAwesomeIcon icon={faPhone} size="2x" />
          <p className="mt-2">Phone</p>
        </a>
        <a href="https://www.linkedin.com/in/chinmay-chaudhari-846828219" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
          <p className="mt-2">LinkedIn</p>
        </a>
        <a href="https://github.com/chinmay444" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
          <p className="mt-2">GitHub</p>
        </a>
      </div>
    </>
  );
}

export default ContactMe;

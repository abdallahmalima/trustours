import React from 'react';

const Form = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-teal-400 to-blue-500 rounded-md shadow-md p-6 md:w-2/5">
          <form className="space-y-4">
            <div className="bg-gradient-to-r from-teal-300 to-blue-400 p-4 rounded-md">
              <h2 className="text-center text-white text-xl font-semibold mb-4">Contact Us</h2>
              <div className="space-y-2">
                <label className="block text-white font-semibold">Title</label>
                <input type="text" className="w-full p-2 rounded-md bg-white" />
              </div>
              <div className="space-y-2 mt-4">
                <label className="block text-white font-semibold">Message</label>
                <textarea className="w-full p-2 rounded-md bg-white h-24"></textarea>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="bg-gradient-to-r from-blue-400 to-teal-500 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-500 hover:to-teal-600 transform hover:scale-105 transition-all duration-300">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;

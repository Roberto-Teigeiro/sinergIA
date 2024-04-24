import { Form } from "@remix-run/react";

function JoinProjectModal() {


  return (
    <Form method="post" action="/api/submitNewProject">
      <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3  sm:mx-auto">
          <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">

          <div className="mb-5">
                        <label
                            htmlFor="description"
                            className="block text-base font-medium text-[#07074D]"
                        >
                            User Description
                        </label>
                        <input
                            type="text"
                            name="description"
                            id="description"
                            placeholder="Describe yourself in a few words"
                            className="w-full rounded-md border border-[#e0e0e0] bg-gray py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="Cknowledge"
                            className="block text-base font-medium text-[#07074D]"
                        >
                            Current Knowledge
                        </label>
                        <input
                            type="text"
                            name="Cknowledge"
                            id="Cknowledge"
                            placeholder="What is your area of expertise? "
                            className="w-full rounded-md border border-[#e0e0e0] bg-gray py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label className="block text-base font-medium text-[#07074D]">
                            Select the level of expertise in your field
                        </label>
                        <div className="flex items-center space-x-6 mt-2">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    name="expertise"
                                    id="begginer"
                                    value="begginer"
                                    className="h-5 w-5 accent-pink-500"
                                />
                                <label
                                    htmlFor="begginer"
                                    className="pl-3 text-base font-medium text-[#07074D]"
                                >
                                    Begginer
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    name="expertise"
                                    id="intermediate"
                                    value="intermediate"
                                    className="h-5 w-5 accent-pink-500"
                                />
                                <label
                                    htmlFor="intermediate"
                                    className="pl-3 text-base font-medium text-[#07074D]"
                                >
                                    Intermediate
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    name="expertise"
                                    id="advanced"
                                    value="advanced"
                                    className="h-5 w-5 accent-pink-500"
                                />
                                <label
                                    htmlFor="advanced"
                                    className="pl-3 text-base font-medium text-[#07074D]"
                                >
                                    Advanced
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                
                                    type="radio"
                                    name="expertise"
                                    id="expert"
                                    value="expert"
                                    className="h-5 w-5 accent-pink-500"
                                />
                                <label
                                    htmlFor="expert"
                                    className="pl-3 text-base font-medium text-[#07074D]"
                                >
                                    Expert
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="Dknowledge"
                            className="block text-base font-medium text-[#07074D]"
                        >
                            Select the areas you wish to develop
                        </label>
                        


    
                        <div className="mt-2 grid grid-cols-2 gap-3 text-gray">
                            <div className="flex items-center">
                                <input type="checkbox" className="h-5 w-5 accent-pink-500 " name="knowledge" value="Music" />
                                <span className="ml-2 text-gray-700">Chemistry</span>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" className="h-5 w-5 accent-pink-500 " name="knowledge" value="Music" />
                                <span className="ml-2 text-gray-700">Music</span>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" className="h-5 w-5 accent-pink-500 " name="knowledge" value="Medicine" />
                                <span className="ml-2 text-gray-700">Medicine</span>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" className="h-5 w-5 accent-pink-500 " name="knowledge" value="Law" />
                                <span className="ml-2 text-gray-700">Law</span>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" className="h-5 w-5 accent-pink-500 " name="knowledge" value="Architecture" />
                                <span className="ml-2 text-gray-700">Archictecture</span>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" className="h-5 w-5 accent-pink-500 " name="knowledge" value="Art" />
                                <span className="ml-2 text-gray-700">Art and design</span>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" className="h-5 w-5 accent-pink-500 " name="knowledge" value="Physics" />
                                <span className="ml-2 text-gray-700">Physics</span>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" className="h-5 w-5 accent-pink-500 " name="knowledge" value="Biology" />
                                <span className="ml-2 text-gray-700">Biology</span>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" className="h-5 w-5 accent-pink-500 " name="knowledge" value="Economics" />
                                <span className="ml-2 text-gray-700">Economics</span>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" className="h-5 w-5 accent-pink-500 " name="knowledge" value="Mathematics" />
                                <span className="ml-2 text-gray-700">Mathematics</span>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" className="h-5 w-5 accent-pink-500 " name="knowledge" value="Compuuter" />
                                <span className="ml-2 text-gray-700">Computer science</span>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" className="h-5 w-5 accent-pink-500 " name="knowledge" value="Robotics" />
                                <span className="ml-2 text-gray-700">Robotics</span>
                            </div>
                        </div>
                       


                    </div>

                    <div>
                        
                <button
                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
                Submit
            </button>
                    </div>

          </div>
          </div>
          </div>
          </Form>
  );
}

export default JoinProjectModal;
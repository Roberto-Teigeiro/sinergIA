import { Form } from "@remix-run/react";

function JoinProjectModal() {


  return (
    <Form method="post" action="/api/assignproject">
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
                            
                        </div>
                        <input
                            type="text"
                            name="Knowledgeareas"
                            id="Knowledgeareas"
                            placeholder="What is your area of expertise? "
                            className="w-full rounded-md border border-[#e0e0e0] bg-gray py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />


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
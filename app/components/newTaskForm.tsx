import { Form } from "@remix-run/react"

const NewTaskForm = () => {
return(
    <Form method="post" action="/api/submitNewTask">
        <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3  sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">

         <div>
            <label
                  htmlFor="TaskTitle"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Task Title
                </label>
                <input
                  name="TaskTitle"
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="sinergIA"
                  required
                />
        </div>
        <div>
        <label   htmlFor="TaskDescription"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Task Description
                </label>
                <textarea
                className="h-40 w-96 bg-gray-50 border border-gray-300 text-gray-900 text-sm resize rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
                name="TaskDescription"
                id="TaskDescription"
                placeholder="Detail your project requirements!"
                required
              ></textarea>
        </div>
        <br/>
        
    
        <button
                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
                Submit
            </button>

        </div>
        </div>
        </div>


    </Form>
)


}

export default NewTaskForm
import {Form} from "@remix-run/react";



export default function NewProjectModal() {
  return (
    <Form method="post" action="/api/submitNewProject">

<div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
  <div className="relative py-3  sm:mx-auto">
    <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
      

    <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">Project Name</label>
            <input name="projectname"type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="sinergIA" required />
        </div>
        <div>
            
       </div>
        <div>
            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900">Actual project status</label>
            <input name="projectstatus" type="projectstatus" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="..." required />
        </div>  
        <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Current Resources</label>
            <input name="currentresources" type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Detail any infrastructure available for use in this project"  required />
        </div>
        <div>
            <label htmlFor="Deparments" className="block mb-2 text-sm font-medium text-gray-900">Required Departments (use commas)</label>
            <input name="requireddepartments" type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Frontend,Backend,UX..." required />
        </div>
        <div>
            <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900">Required users (per department)</label>
            <input name="requireduserdepartment" type="number" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="1" required />
        </div>
    </div>
    <div className="mb-6">
    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Detailed Project Description</label>

    <textarea
        className="h-40 bg-gray-50 border border-gray-300 text-gray-900 text-sm resize rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        name="projectrequirements"
        id="projectrequirements"         
        placeholder="Detail your project requirements!" 
        required
    ></textarea>
    </div>
    <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Project Objectives</label>
        <input  name="objectives" type="objective" id="objective" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="What are the specific goals or outcomes you aim to achieve with this project?" required />
    </div> 
   
    <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
        </div>
        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
    </div>
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

      </div>
      
    </div>
   
  </div>

    
    

    </Form>
  );
}

import { Cataglory } from "../types"

const CardFooter = () => {

  return (
    <div className='p-4 pt-0 ml-3'>
      <button className='before:content-["#"] before:text-blue-500 before:mr-0.5 inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-1 hover:bg-orange-500 hover:text-white hover:before:text-white duration-200'>
        today
      </button>
      <button className='before:content-["#"] before:text-blue-500 before:mr-0.5 inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-1 hover:bg-orange-500 hover:text-white hover:before:text-white duration-200'>
        art
      </button>
      <button className='before:content-["#"] before:text-blue-500 before:mr-0.5 inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-1 hover:bg-orange-500 hover:text-white hover:before:text-white duration-200'>
        dog
      </button>
    </div>
  )
}

export default CardFooter

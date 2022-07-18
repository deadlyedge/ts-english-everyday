import { FC, ReactElement } from "react"
import { Tag } from "../types"

interface IFooter {
  tags: Tag[]
}

const CardFooter: FC<IFooter> = ({ tags }): ReactElement => {
  return (
    <div className='p-4 pt-0 ml-3'>
      {tags.map((tag, index) => (
        <button
          className='before:content-["#"] before:text-blue-500 before:mr-0.5 inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-1 hover:bg-orange-500 hover:text-white hover:before:text-white duration-200'
          style={tag.tagStatus ? { backgroundColor: "orange" } : {}}
          key={index}>
          {tag.tagName}
        </button>
      ))}
    </div>
  )
}

export default CardFooter

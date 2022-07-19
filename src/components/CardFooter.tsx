import { FC, ReactElement, MouseEvent } from "react"
import { Card, Cataglory, Tag, TagModifier } from "../types"

interface IFooter {
  card: Card
  changeTag: (tagModifier: TagModifier) => void
}

const CardFooter: FC<IFooter> = ({ card, changeTag }): ReactElement => {
  const tagsHandler = (event: MouseEvent<HTMLButtonElement>) => {
    changeTag({ id: card.id, tagName: event.currentTarget.name as Cataglory })
  }

  return (
    <div className='p-4 pt-0 ml-3'>
      {card.tags.map((tag: Tag, index: number) => (
        <button
          className='before:content-["#"] before:text-blue-500 before:mr-0.5 inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-1 hover:bg-orange-500 hover:text-white hover:before:text-white duration-200'
          style={tag.tagStatus ? { backgroundColor: "orange" } : {}}
          key={index}
          onClick={tagsHandler}
          name={tag.tagName}>
          {tag.tagName}
        </button>
      ))}
    </div>
  )
}

export default CardFooter

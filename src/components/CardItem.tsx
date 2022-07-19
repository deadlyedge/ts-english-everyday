import { FC, ReactElement } from "react"
import { Card, TagModifier } from "../types"
import CardBody from "./CardBody"
import CardFooter from "./CardFooter"
import CardHeader from "./CardHeader"

interface ICardItem {
  card: Card
  removeCard: (id: string) => void
  updateCard: (card: Card) => void
  changeTag: (tagModifier: TagModifier) => void
}

const CardItem: FC<ICardItem> = ({
  card,
  removeCard,
  updateCard,
  changeTag,
}): ReactElement => {
  return (
    <div className='w-96 m-3 bg-gray-100 rounded-lg border border-gray-300 shadow-md bg-opacity-90'>
      <CardHeader card={card} removeCard={removeCard} />
      <CardBody card={card} updateCard={updateCard} />
      <CardFooter card={card} changeTag={changeTag} />
    </div>
  )
}

export default CardItem

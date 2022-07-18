import { FC, ReactElement } from "react"
import { ICardItem } from "../types"
import CardBody from "./CardBody"
import CardFooter from "./CardFooter"
import CardHeader from "./CardHeader"

const CardItem: FC<ICardItem> = ({
  item,
  removeCard,
  updateCard,
}): ReactElement => {
  return (
    <div className='w-96 m-3 bg-gray-100 rounded-lg border border-gray-300 shadow-md bg-opacity-90'>
      <CardHeader item={item} removeCard={removeCard} />
      <CardBody item={item} updateCard={updateCard} />
      <CardFooter />
    </div>
  )
}

export default CardItem

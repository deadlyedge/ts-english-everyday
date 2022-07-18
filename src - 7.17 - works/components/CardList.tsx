import { useState } from "react"
import { v4 as uuid } from "uuid"
import { useImage, useToday } from "../hooks"
import { CardType } from "../types"
import { getSummary } from "../utils"
import CardAdd from "./CardAdd"
import CardItem from "./CardItem"

const CardList = () => {
  const today = useToday("0")
  const summaryToday: string = getSummary(today)
  const image = useImage(summaryToday)
  const initCard = (): CardType => {
    return { id: uuid(), ask: today, imageUrl: image }
  }
  const [state, setState] = useState<CardType[]>([
    { id: "0", ask: "hello world", imageUrl: "/images/just-art.jpg" },
  ])

  function addNewCard(): void {
    let copy = [...state]
    copy = [...copy, initCard()]
    setState(copy)
  }

  function removeCard(id: string): void {
    let filtered = state.filter((item: CardType) => {
      return item.id !== id
    })
    setState(filtered)
  }

  function updateCard(id: string, data: string): void {
    let mapped = state.map((item: CardType) => {
      if (item.id === id) {
        return { ...item, ask: data }
      }
      return { ...item }
    })
    setState(mapped)
  }

  return (
    <div className='flex flex-wrap items-start justify-center'>
      {state.map((item: CardType) => (
        <CardItem
          key={item.id}
          item={item}
          removeCard={removeCard}
          updateCard={updateCard}
        />
      ))}
      <CardAdd addNewCard={addNewCard} />
    </div>
  )
}

export default CardList

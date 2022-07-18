import { useEffect, useState } from "react"
import { v4 as uuid } from "uuid"
import { Card, Cataglory } from "../types"
import { getToday } from "../utils/getAPIs"
import CardAdd from "./CardAdd"
import CardItem from "./CardItem"

const CardList = () => {
  const [today, setToday] = useState("")
  const [state, setState] = useState<Card[]>([
    {
      id: "0",
      ask: "hello world",
      tags: [
        { tagName: Cataglory.TODAY, tagStatus: false },
        { tagName: Cataglory.CHI_ENG, tagStatus: false },
        { tagName: Cataglory.DOG, tagStatus: false },
        ],
    },
  ])
  const initCard: Card = {
    id: uuid(),
    ask: today,
    tags: [
      { tagName: Cataglory.TODAY, tagStatus: true },
      { tagName: Cataglory.CHI_ENG, tagStatus: false },
      { tagName: Cataglory.DOG, tagStatus: false },
    ],
  }

  function addNewCard(): void {
    let copy = [...state]
    copy = [...copy, initCard]
    setState(copy)
  }

  function removeCard(id: string): void {
    let filtered = state.filter((item: Card) => {
      return item.id !== id
    })
    setState(filtered)
  }

  function updateCard(id: string, data: string): void {
    let mapped = state.map((item: Card) => {
      if (item.id === id) {
        return { ...item, ask: data }
      }
      return { ...item }
    })
    setState(mapped)
  }

  useEffect(() => {
    getToday().then((response) => setToday(response))
  }, [state.length]) // 选择触发 today API 更新 state.length

  return (
    <div className='flex flex-wrap items-start justify-center'>
      {state.map((item: Card) => (
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

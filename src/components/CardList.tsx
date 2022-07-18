import { useCallback, useEffect, useReducer, useState } from "react"
import { v4 as uuid } from "uuid"
import { ACTION_TYPE, Card, Cataglory, IState } from "../types"
import { getToday } from "../utils/getAPIs"
import { cardReducer } from "../utils/reducer"
import CardAdd from "./CardAdd"
import CardItem from "./CardItem"

function init(initCardList: Card[]): IState {
  return { cardList: initCardList }
}

const CardList = () => {
  // const [today, setToday] = useState("")
  // const [state, setState] = useState<Card[]>([
  //   {
  //     id: "0",
  //     ask: "hello world",
  //     tags: [
  //       { tagName: Cataglory.TODAY, tagStatus: false },
  //       { tagName: Cataglory.CHI_ENG, tagStatus: false },
  //       { tagName: Cataglory.DOG, tagStatus: false },
  //       ],
  //   },
  // ])
  // const initCard: Card = {
  //   id: uuid(),
  //   ask: today,
  //   tags: [
  //     { tagName: Cataglory.TODAY, tagStatus: true },
  //     { tagName: Cataglory.CHI_ENG, tagStatus: false },
  //     { tagName: Cataglory.DOG, tagStatus: false },
  //   ],
  // }
  const [state, dispatch] = useReducer(cardReducer, [], init)

  const initCard = async (): Promise<Card> => {
    let card = {
      id: uuid(),
      ask: await getToday(),
      tags: [
        { tagName: Cataglory.TODAY, tagStatus: true },
        { tagName: Cataglory.CHI_ENG, tagStatus: false },
        { tagName: Cataglory.DOG, tagStatus: false },
      ],
    }
    return card
  }
  useEffect(() => {
    initCard().then((card) => {
      const cardList = [card]
      dispatch({
        type: ACTION_TYPE.INIT_CARD,
        payload: cardList,
      })
    })
  }, [])

  const addNewCard = useCallback(() => {
    initCard().then((card: Card) =>
      dispatch({
        type: ACTION_TYPE.ADD_CARD,
        payload: card,
      })
    )
  }, [])

  const removeCard = useCallback((id: string) => {
    dispatch({
      type: ACTION_TYPE.REMOVE_CARD,
      payload: id,
    })
  }, [])

  const updateCard = useCallback((card: Card)=> {
    dispatch({
      type: ACTION_TYPE.UPDATE_CARD,
      payload: card
    })
  },[])

  // useEffect(() => {
  //   getToday().then((response) => setToday(response))
  // }, [state.length]) // 选择触发 today API 更新 state.length

  return (
    <div className='flex flex-wrap items-start justify-center'>
      {state.cardList.map((item: Card) => (
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

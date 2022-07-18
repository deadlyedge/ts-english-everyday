import { useCallback, useEffect, useReducer } from "react"
import { ACTION_TYPE, Card } from "../types"
import { init, initCard } from "../utils/init"
import { cardReducer } from "../utils/reducer"
import CardAdd from "./CardAdd"
import CardItem from "./CardItem"

const CardList = () => {
  const [state, dispatch] = useReducer(cardReducer, [], init)

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

  const updateCard = useCallback((card: Card) => {
    dispatch({
      type: ACTION_TYPE.UPDATE_CARD,
      payload: card,
    })
  }, [])

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

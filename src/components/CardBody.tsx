import React, { FC, ReactElement, useEffect, useState } from "react"
import { Card } from "../types"
import { getDeepLTranslate, getAzureTranslate } from "../utils/getAPIs"

interface ICardItem {
  card: Card
  updateCard: (card: Card) => void
}

const CardBody: FC<ICardItem> = ({ card, updateCard }): ReactElement => {
  const [userInput, setUserInput] = useState<string>(card.ask)
  const [translated, setTranslate] = useState("")
  const [translated2, setTranslate2] = useState("")

  function handleInput(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const askData = event.currentTarget.value
    setUserInput(askData)
  }

  function handleSubmit(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.code == "Enter" && userInput.trim() != "") {
      return updateCard({ ...card, ask: userInput.trim() })
    }
  }

  function handleOnBlur() {
    if (userInput.trim() != "") {
      updateCard({ ...card, ask: userInput.trim() })
    }
  }

  useEffect(() => {
    getDeepLTranslate(card.ask).then((response) => {
      setTranslate2(response)
    })
    getAzureTranslate(card.ask).then((response) => {
      setTranslate(response)
    })
  }, [card.ask])

  return (
    <div className='p-5 pb-0 pt-2'>
      <p className='mb-2 p-2 text-gray-900 rounded-lg shadow bg-yellow-50'>
        azure: {translated} <br />
        deepL: {translated2}
      </p>
      <textarea
        id='message'
        rows={4}
        className='duration-200 block p-2 w-full bg-gray-50 text-gray-800 rounded-lg border outline-0 focus:border-blue-300 focus:ring-4 focus:ring-blue-300'
        defaultValue={userInput}
        onChange={handleInput}
        onKeyUp={handleSubmit}
        onBlur={handleOnBlur}
      />
      <label className='text-gray-400 text-xs ml-3 italic align-top'>
        press 'enter' for translation
      </label>
    </div>
  )
}

export default CardBody

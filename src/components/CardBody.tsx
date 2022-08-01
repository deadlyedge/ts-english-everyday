import React, { FC, ReactElement, useEffect, useRef, useState } from "react"
import { Card } from "../types"
import { getDeepLTranslate, getAzureTranslate } from "../utils/getAPIs"

interface ICardItem {
  card: Card
  updateCard: (card: Card) => void
}

const CardBody: FC<ICardItem> = ({ card, updateCard }): ReactElement => {
  const [userInput, setUserInput] = useState<string>(card.ask)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const [translated, setTranslate] = useState("")
  // const [translated2, setTranslate2] = useState("")

  function handleSubmit(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.code == "Enter" && userInput.trim() != "") {
      updateCard({ ...card, ask: userInput.trim() })
    }
  }

  function handleOnBlur() {
    if (userInput.trim() != "") {
      updateCard({ ...card, ask: userInput.trim() })
    }
  }

  useEffect(() => {
    // getDeepLTranslate(card.ask).then((response) => {
    //   setTranslate2(response)
    // })
    getAzureTranslate(card.ask).then((response) => {
      setTranslate(response)
    })
    setUserInput(card.ask)
  }, [card.ask])

  useEffect(() => {
    inputRef.current!.value = card.ask
  })

  return (
    <div className='p-5 pb-0 pt-2'>
      <p className='mb-2 p-2 text-gray-900 rounded-lg shadow bg-yellow-50'>
        {/* azure: {translated} <br />
        deepL: {translated2} */}
        {translated}
      </p>
      <textarea
        id='message'
        ref={inputRef}
        rows={4}
        className='duration-200 block p-2 w-full bg-gray-50 text-gray-800 rounded-lg border outline-0 focus:border-blue-300 focus:ring-4 focus:ring-blue-300'
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyUp={handleSubmit}
        onBlur={handleOnBlur}
      />
      <label className='text-gray-400 text-xs ml-3 italic align-top'>
        press{" "}
        <kbd className='rounded border border-gray-400 border-b-2 px-0.5'>
          enter
        </kbd>{" "}
        or just tap outside for translation
      </label>
    </div>
  )
}

export default CardBody

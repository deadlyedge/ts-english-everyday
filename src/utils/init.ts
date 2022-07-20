import { v4 as uuid } from "uuid"
import { Card, Cataglory, IState, TagModifier } from "../types"
import { getQuotes, getQuotes2, getToday } from "./getAPIs"

function init(initCardList: Card[]): IState {
  return { cardList: initCardList }
}

async function initCard(): Promise<Card> {
  let card = {
    id: uuid(),
    ask: await getToday(),
    tags: [
      { tagName: Cataglory.TODAY, tagStatus: true },
      { tagName: Cataglory.FAVQS, tagStatus: false },
      { tagName: Cataglory.QUOTES, tagStatus: false },
    ],
  }
  return card
}

async function changeCataglory(tagModifier: TagModifier):Promise<string> {
  const { tagName } = tagModifier
  switch (tagName){
    case Cataglory.TODAY:
      return await getToday()
    case Cataglory.QUOTES:
      return await getQuotes()
    case Cataglory.FAVQS:
      return await getQuotes2()
    default:
      return await getToday()
  }
}

export { init, initCard, changeCataglory }
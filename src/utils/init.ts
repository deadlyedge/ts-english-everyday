import { v4 as uuid } from "uuid"
import { Card, Cataglory, IState, TagModifier } from "../types"
import { getDogFact, getToday } from "./getAPIs"

function init(initCardList: Card[]): IState {
  return { cardList: initCardList }
}

async function initCard(): Promise<Card> {
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

async function changeCataglory(tagModifier: TagModifier):Promise<string> {
  const { tagName } = tagModifier
  switch (tagName){
    case Cataglory.TODAY:
      return await getToday()
    case Cataglory.DOG:
      return await getDogFact()
    default:
      return await getToday()
  }
}

export { init, initCard, changeCataglory }
import { v4 as uuid } from "uuid"
import { Card, Cataglory, IState } from "../types"
import { getToday } from "./getAPIs"

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

export { init, initCard }
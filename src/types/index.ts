export enum Cataglory {
  TODAY = 'today',
  CHI_ENG = 'chi>eng',
  DOG = 'dog',
}

export type Tag = {
  tagName: Cataglory,
  tagStatus: boolean
}

export type Card = {
  id: string,
  ask: string,
  // imageUrl: string,
  tags: Tag[]
}

export interface IState {
  cardList: Card[]
}

export interface IAction {
  type: ACTION_TYPE
  payload: Card | Card[] | string
}

export enum ACTION_TYPE {
  ADD_CARD = 'addCard',
  REMOVE_CARD = 'removeCard',
  CHANGE_TAG = 'changeTag',
  INIT_CARD = 'initCard'
}
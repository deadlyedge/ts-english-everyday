export enum Cataglory {
  TODAY = 'today',
  CHI_ENG = 'chi>eng',
  DOG = 'dog',
  QUOTES = 'quotes',
  FAVQS = 'favqs'
}

export type Tag = {
  tagName: Cataglory,
  tagStatus: boolean
}

export type Card = {
  id: string,
  ask: string,
  tags: Tag[]
}

export interface IState {
  cardList: Card[],
}

export type TagModifier = {
  id: string,
  ask?: string,
  tagName: Cataglory,
}

export interface IAction {
  type: ACTION_TYPE,
  payload: Card | Card[] | string | TagModifier,
}

export enum ACTION_TYPE {
  ADD_CARD = 'addCard',
  REMOVE_CARD = 'removeCard',
  CHANGE_TAG = 'changeTag',
  INIT_CARD = 'initCard',
  UPDATE_CARD = 'updateCard'
}
export enum Cataglory {
  today = 'today',
  art = 'art',
  dog = 'dog',
}

export type CardType = {
  id: string,
  ask: string,
  imageUrl: string,
}

export interface ICardItem {
  item: CardType
  removeCard?: (id: string) => void
  updateCard?: (id: string, data: string) => void
}

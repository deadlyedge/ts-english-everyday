import { ACTION_TYPE, IAction, IState, Card, Tag, TagModifier } from "../types";

function cardReducer(state: IState, action: IAction): IState {
  const { type, payload } = action

  switch (type) {
    case ACTION_TYPE.INIT_CARD:
      return {
        ...state,
        cardList: payload as Card[]
      }
    case ACTION_TYPE.ADD_CARD:
      return {
        ...state,
        cardList: [...state.cardList, payload as Card]
      }
    case ACTION_TYPE.REMOVE_CARD:
      return {
        ...state,
        cardList: state.cardList.filter(item => item.id !== payload as string)
      }
    case ACTION_TYPE.CHANGE_TAG:
      let question = (payload as TagModifier).ask || ''
      return {
        ...state,
        cardList: state.cardList.map((card: Card) =>
          card.id === (payload as TagModifier).id
            ? {
              ...card,
              ask: question,
              tags: card.tags.map((tag: Tag) =>
                (tag.tagName === (payload as TagModifier).tagName)
                  ? { ...tag, tagStatus: true }
                  : { ...tag, tagStatus: false }
              )
            }
            : { ...card }
        )
      }
    case ACTION_TYPE.UPDATE_CARD:
      return {
        ...state,
        cardList: state.cardList.map((card: Card) =>
          (card.id === (payload as Card).id)
            ? {
              ...card,
              ask: (payload as Card).ask
            }
            : { ...card }
        )
      }
    default:
      return state
  }
}

export { cardReducer }
import { FC, ReactElement } from "react"

interface IAddCard {
  addNewCard: () => void
}

const CardAdd: FC<IAddCard> = ({ addNewCard }): ReactElement => {
  return (
    <div
      className='w-40 h-40 my-auto m-3 bg-gray-100 rounded-2xl shadow-md bg-opacity-30 cursor-pointer group hover:bg-opacity-90 duration-200'
      onClick={addNewCard}>
      <svg
        className='w-15 h-20 mx-auto mt-10 rotate-45 text-blue-500 group-hover:rotate-[135deg] group-hover:text-lime-500 duration-200'
        fill='currentColor'
        viewBox='7 2 10 20'
        xmlns='http://www.w3.org/2000/svg'>
        <path d='M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z'></path>
      </svg>
    </div>
  )
}

export default CardAdd

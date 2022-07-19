import { FC, ReactElement, useEffect, useState } from "react"
import { Card } from "../types"
import { getImage } from "../utils/getAPIs"
import { getSummary } from "../utils/getSummary"

interface ICardItem {
  card: Card
  removeCard: (id: string) => void
}

const CardHeader: FC<ICardItem> = ({ card, removeCard }): ReactElement => {
  const [image, setImage] = useState("")
  useEffect(() => {
    getImage(getSummary(card.ask)).then((response) => setImage(response))
  }, [card.ask])
  return (
    <div
      className='bg-cover bg-center rounded-t-lg h-40 relative'
      style={{
        backgroundImage: `url('${image}')`,
      }}>
      <div className='float-right justify-end px-2 pt-4'>
        <button
          type='button'
          className='bg-white bg-opacity-20 text-red-600 border-2 border-red-600 hover:bg-red-500 hover:text-white hover:rotate-90 hover:scale-125 rounded-full p-2 mr-2 duration-500'
          onClick={() => removeCard(card.id)}>
          <svg
            className='w-4 h-4'
            fill='currentColor'
            viewBox='7 2 10 20'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z'></path>
          </svg>
        </button>
      </div>
      <div className=''>
        <img
          className='absolute bottom-1 right-2'
          src='/images/pixabay_logo.svg'
          width={60}
          alt='pixabay.com'
        />
      </div>
      <div>
        <div className='text-gray-900 bg-gray-100 bg-opacity-80 p-1 pl-6 pr-3 mt-10 text-xl float-left flex rounded-r-sm'>
          <img
            src='/images/idea-svgrepo-com.svg'
            width={24}
            alt=''
            style={{ position: "relative", top: "-2px" }}
          />
          <span className='font-bold'> English Everyday </span>
        </div>
      </div>
    </div>
  )
}

export default CardHeader

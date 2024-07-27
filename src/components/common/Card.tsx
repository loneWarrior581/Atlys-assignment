import React from 'react'

interface CardProps {
  children: React.ReactNode
  cardClasses?: string
}

const Card: React.FC<CardProps> = ({ children, cardClasses }) => {
  return (
    <div
      className={`flex flex-col w-1/2 mx-auto mt-10 px-6 py-10 bg-gray-bg text-white rounded-lg ${cardClasses}`}
    >
      {children}
    </div>
  )
}

export default Card

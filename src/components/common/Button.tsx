import React from 'react'

interface ButtonProps {
  label: string
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='bg-blue-primary text-white text-base py-2 px-4 rounded hover:bg-blue-secondary'
    >
      {label}
    </button>
  )
}

export default Button

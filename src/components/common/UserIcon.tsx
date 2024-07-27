import React from 'react'
interface UserIconProps {
  name: string
  imageUrl: string
  dimension: number
}
const UserIcon: React.FC<UserIconProps> = ({ name, imageUrl, dimension }) => {
  return (
    <img
      className='object-cover object-center rounded-full'
      style={{
        height: `${dimension}px`,
        width: `${dimension}px`,
      }}
      src={imageUrl}
      alt={name}
    />
  )
}

export default UserIcon

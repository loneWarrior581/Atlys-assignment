import React from 'react'
interface UserIconProps {
  name: string
  imageUrl: string
  dimension: number
  classes?: string
}
const UserIcon: React.FC<UserIconProps> = ({
  name,
  imageUrl,
  dimension,
  classes,
}) => {
  return (
    <img
      className={`object-cover object-center rounded-full ${classes}`}
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

import React from 'react'

interface PostTextProps {
  icon?: string
  children: React.ReactNode
}

const PostText: React.FC<PostTextProps> = ({ icon, children }) => {
  return (
    <div className='flex gap-3 bg-black-bg p-4 my-4 rounded-lg'>
      <div className='flex items-center justify-center w-12 h-12 bg-gray-bg rounded-full'>
        <span className='text-lg'>{icon}</span>
      </div>
      {children}
    </div>
  )
}

export default PostText

import React from 'react'
import CreatePost from '../components/Post/CreatePost'
import ViewPost from '../components/Post/ViewPost'
import { PostData } from '../constants/data'

const Home: React.FC = () => {
  return (
    <div className='p-6 flex flex-col items-center'>
      <div className='flex flex-col gap-3'>
        <h1 className='text-2xl text-gray-primary'>Hello Jane</h1>
        <p className='text-gray-secondary'>
          How are you doing today? Would you like to share something with the
          community? 🤗
        </p>
      </div>
      <CreatePost />
      {PostData.map((post, index) => {
        return (
          <ViewPost
            key={index}
            profileImage={post.profileImage}
            name={post.name}
            emojiData={post.emojiData}
            textData={post.textData}
            comments={post.comments}
            lastEdited={post.lastEdited}
          />
        )
      })}
    </div>
  )
}

export default Home

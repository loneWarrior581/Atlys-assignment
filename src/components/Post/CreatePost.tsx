import React from 'react'
import Card from '../common/Card'
import Button from '../common/Button'
import PostText from '../common/PostText'
import { useModal } from '../../hooks/useModal'
import LoginForm from '../Auth/LoginForm'

const CreatePost: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { modal, openModal } = useModal({
    children: <LoginForm />,
  })

  const handlePost = () => {
    // handle logic for handling post
    openModal()
  }
  return (
    <>
      {modal}
      <Card cardClasses='border-2 border-gray-border'>
        <h3 className='text-lg text-gray-primary'>Create Post</h3>
        <PostText icon='💬'>
          <input
            type='text'
            placeholder={'How are you feeling today ?'}
            className='bg-transparent border-none text-gray-secondary w-full focus:outline-none'
          />
        </PostText>
        <div className='flex justify-end'>
          <Button label='Post' onClick={handlePost} />
        </div>
      </Card>
    </>
  )
}

export default CreatePost

import React from 'react'
import Card from '../common/Card'
import PostText from '../common/PostText'
import { Ellipsis, MessageSquare } from 'lucide-react'
import UserIcon from '../common/UserIcon'
import { PostDataInterface } from '../../constants/data'

interface ViewPostProps extends PostDataInterface {
  children?: React.ReactNode
}

const ViewPost: React.FC<ViewPostProps> = ({
  profileImage,
  name,
  emojiData,
  textData,
  comments,
  lastEdited,
}) => {
  return (
    <Card cardClasses='border-2 border-gray-border'>
      <div className='flex justify-between'>
        <div className='flex'>
          <UserIcon name={name} imageUrl={profileImage} dimension={44} />
          <div className='flex flex-col text-sm mx-4 gap-1'>
            <span className='text-gray-primary'>{name}</span>
            {lastEdited && (
              <span className='text-gray-secondary'>
                {lastEdited} &middot; Edited
              </span>
            )}
          </div>
        </div>
        <Ellipsis className='cursor-pointer' />
      </div>
      <PostText icon={emojiData}>
        <p className='w-full text-gray-secondary'>{textData}</p>
      </PostText>
      <div className='flex text-sm text-gray-secondary font-normal gap-1'>
        <MessageSquare
          strokeWidth={1}
          width={20}
          className='text-gray-primary border-spacing-1'
        />
        <span>{comments.length}</span>
      </div>
    </Card>
  )
}

export default ViewPost

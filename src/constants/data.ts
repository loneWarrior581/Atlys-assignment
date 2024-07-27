interface Comment {
  data: string
  name: string
  date: string
}

export interface PostDataInterface {
  profileImage: string
  name: string
  emojiData: string
  textData: string
  comments: Comment[]
  lastEdited: string | null
  createdAt?: string
}

export const PostData: PostDataInterface[] = [
  {
    profileImage: 'https://images.pexels.com/photos/20787/pexels-photo.jpg',
    name: 'Uttkarsh',
    emojiData: '👋',
    textData:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    comments: [
      {
        name: 'Samay',
        data: 'Awesome work',
        date: '2023-10-23T10:31:38.000+00:00',
      },
    ],
    lastEdited: '9 mins ago',
  },
  {
    profileImage: 'https://images.pexels.com/photos/20789/pexels-photo.jpg',
    name: 'Saurabh',
    emojiData: '😔',
    textData:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    comments: [
      {
        name: 'Samay',
        data: 'Awesome work',
        date: '2023-10-23T10:31:38.000+00:00',
      },
      {
        name: 'Aman',
        data: 'Great work !!',
        date: '2023-10-23T10:31:38.000+00:00',
      },
    ],
    lastEdited: '5 mins ago',
  },
]

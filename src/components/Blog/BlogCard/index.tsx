import React from 'react'
import Image from 'next/image'

interface Post {
  id: number
  source: string
  title: string
  description: string
}

interface PostProps {
  post: Post
}

const BlogCard: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="max-w-7xl mx-auto rounded-lg">
      <div className="flex-col">
        <div className="flex justify-center">
          <Image
            src={post.source}
            alt={post.title}
            width={384}
            height={256}
            quality={100}
          />
        </div>
        <h2 className="font-black h-12 text-gray-100 text-center mt-3">
          {post.title}
        </h2>
        <p className="font-light h-12 text-sm mt-1 text-gray-500 text-center">
          {post.description}
        </p>
        <button className="flex mx-auto mt-4 p-3 w-full max-w-sm bg-purple-600 hover:bg-purple-800 rounded-md font-bold text-gray-100">
          <p className="mx-auto">LEIA MAIS</p>
        </button>
      </div>
    </div>
  )
}

export default BlogCard

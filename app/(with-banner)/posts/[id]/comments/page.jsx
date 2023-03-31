import Image from 'next/image'

const fetchComments = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 3000))
  // throw new Error('Error comments')
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60
    }
  }).then(res => res.json())
}

export default async function Post ({ params }) {
  const { id } = params
  const comments = await fetchComments(id)
  return (
    <ul style={{ background: '#eee', fontSize: '10px' }}>
      {
        comments.map(comment => (
          <li key={comment.id}>
            <Image width={50} height={50} src={`https://api.dicebear.com/6.x/pixel-art/svg?seed=${comment.email}`} alt={comment.name} />
            <h4>{comment.name}</h4>
            <small>{comment.body}</small>
          </li>
        ))
      }
    </ul>
  )
}

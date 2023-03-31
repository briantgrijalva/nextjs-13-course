// import { Counter } from './Counter'

export default function PostsLayout ({ children }) {
  return (
    <div>
      {/* <h1>This is the post layout</h1> */}
      {/* <Counter /> */}
      <small>Home &bull; Posts</small>
      {children}
    </div>
  )
}

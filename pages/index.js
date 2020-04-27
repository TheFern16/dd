import P from '../components/paragraph'
import Post from '../components/post'

export default () => (
  <div className="main">
    <Post title="My first blog post">
      <P>Hello there</P>
      <P>This is an example of a componentized blog post</P>
    </Post>
  </div>
)

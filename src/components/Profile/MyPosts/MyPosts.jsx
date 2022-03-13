import s from './MyPosts.module.css';
import Post from './Post/Post';

let postData = [
    {message:'It\'s my first post', count:'44'},
    {message:'Hi, how are you?', count:'77'},
]

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea />
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={postData[0].message} count={[postData[0].count]} />
                <Post message={postData[1].message} count={[postData[1].count]} />
            </div>

        </div>
    )
}
export default MyPosts
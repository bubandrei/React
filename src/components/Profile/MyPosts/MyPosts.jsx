import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = () => {
    let posts = [
        { id: '1', message: 'It\'s my first post!!!', count: 44 },
        { id: '2', message: 'Hi, how are you?', count: 77 },
    ]
    let postsElements = posts.map(el => {
        return <Post key={el.id} message={el.message} count={el.count} />
    })

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
                {postsElements}
            </div>

        </div>
    )
}
export default MyPosts
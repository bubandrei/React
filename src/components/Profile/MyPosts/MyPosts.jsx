import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {

    let postsElements = props.posts.map((el, index) => {
        return <Post key={index} message={el.message} count={el.count} id={el.id}/>
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
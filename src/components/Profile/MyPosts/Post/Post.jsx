import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png" alt="" />
            {props.message}
            <div>
                <span>like</span> {props.count}
            </div>
        </div>
    )
}
export default Post
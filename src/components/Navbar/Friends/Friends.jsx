import s from './Friends.module.css'

const Friends = (props) => {
    const nameFriend = props.state.map((name) => {
        return (
        <div>
            <div className={s.circle}></div>
            <div className={s.nameFriend}>{name.name}</div>
        </div> )
    })
    return (
        <div className={s.wrappFriends}>
            <h2>Friends</h2>
            <div className={s.bigFlex}>
                    <div className={s.flex}>{nameFriend}</div> 
            </div>
        </div >
    )
}
export default Friends
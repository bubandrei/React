import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import React from 'react';


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (  
        <div className={s.dialog + ' ' + s.active}>
            <img className={s.imgAva} src='https://thumbs.dreamstime.com/z/%D0%B7%D0%BD%D0%B0%D0%BA-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D1%8B-%D0%B2-%D0%BA%D0%BE%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%BC-%D1%81%D1%82%D0%B8%D0%BB%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-159694934.jpg'></img>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem

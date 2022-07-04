import React from 'react'
import preloader from '../../../assets/images/spinner.svg';

const Preloader = (props) =>{
    return(
        <div>
            <img src={preloader}/>
        </div>
    )
}
export default Preloader
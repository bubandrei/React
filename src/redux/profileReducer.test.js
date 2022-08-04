import React from "react";
import profileReducer, {addPostActionCreate} from '../redux/profileReducer';

it('new post should be added',()=>{
    let action = addPostActionCreate();
    let newState = profileReducer({},{})

})
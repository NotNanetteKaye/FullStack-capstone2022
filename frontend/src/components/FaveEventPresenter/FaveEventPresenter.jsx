import React, { useImperativeHandle } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

const FaveEventPresenter = (props) => {
    const [user, token] = useAuth('')

    return ( 
    <div>
        {props.name}
    </div> );
}
 
export default FaveEventPresenter;
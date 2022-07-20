import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getProducts} from '../../redux/actions';
import Cards from '../atoms/Cards';


export default function Home () {
    const dispatch = useDispatch();
    const infoData = useSelector(state => state.data);

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])

    return (
        <div>            
            <h1>Hello Word!</h1>            
            <div>
                <Cards infoData = {infoData}/>                
            </div>           
        </div>
    )
    
}
import React from 'react';
import {Products} from '../Pages/Products';
import { Details } from '../Pages/Details';
import {Route} from 'react-router-dom';
import {Cart} from '../Pages/Cart'
import {Payment} from '../Pages/Payment'

export const Section = () => {
    return (
        <section>
            <Route path='/' component={Products} exact/>
            <Route path='/product' component={Products} exact/>
            <Route path='/product/:id' component={Details}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/payment' component={Payment} />

        </section>
    )
}
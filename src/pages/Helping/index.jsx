import React from 'react';

import './styles.css';
import Header from '../../components/header';
import MenuGrid from '../../components/MenuGrid';

function Helping(){
    return(
        <div id="page-helping"> 
            <Header to="/" className=""/>
            <div id="page-helping-content">
                <MenuGrid active="" to="/helping" />
            </div>
        </div>
    )
}

export default Helping;
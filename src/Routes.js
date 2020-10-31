import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Chat from './pages/Chat';
import Helping from './pages/Helping/index';
import Help from './pages/Help/index';
import Landing from './pages/Landing/index';
import VideoChat from './pages/VideoChat';


function Routes(){
    return(
    <BrowserRouter>
        <Route path="/" exact component= {Landing}/>
        <Route path="/helping" exact component= {Helping}/>
        <Route path="/chat" exact component= {Chat}/>
        <Route path="/videochat" exact component= {VideoChat}/>
        <Route path="/help" exact component= {Help}/>
    </BrowserRouter>);
}


export default Routes;
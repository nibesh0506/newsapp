import React, {Component} from 'react';
import NavBar from "./Component/NavBar";
import News from "./Component/News";
import {BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

class App extends Component {

    render() {
        return (<div>
            <Router>
                <NavBar/>
                <Routes>
                    <Route exact path='/' element={<News key='general' category='general' pageSize={6}/>}></Route>
                    <Route exact path='/business' element={<News key='business' category='business' pageSize={6}/>}></Route>
                    <Route exact path='/entertainment'
                           element={<News key='entertainment' category='entertainment' pageSize={6}/>}></Route>
                    <Route exact path='/general' element={<News key='general' category='general' pageSize={6}/>}></Route>
                    <Route exact path='/health' element={<News key='health' category='health' pageSize={6}/>}></Route>
                    <Route exact path='/sports' element={<News key='sports' category='sports' pageSize={6}/>}></Route>
                    <Route exact path='/technology' element={<News key='technology' category='technology' pageSize={6}/>}></Route>
                </Routes>
            </Router>
        </div>);
    }
}

export default App;

//import react and react dom library
import React from 'react';
import ReactDOM from 'react-dom';

//create react component

function getButtonText(){
    return 'Click on me!';
}
const App = () => {

    return (
        <div>
        <label htmlFor="name" className="label">Enter name:</label>
        <input id="name" type="text"></input>
        <button style={{backgroundColor: 'blue', color: 'white'}}>
            {getButtonText()}
        </button>
        </div>
    );
};

//take react component and show it on the screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);
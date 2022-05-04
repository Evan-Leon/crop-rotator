import React, {useState, useReducer} from 'react';
import './start_grid.css'
// const initialGridSize = {num: 0};

// function gridReducer(state, action) {
//     switch (action.type) {
//         case 'increase' :
//             return {num: state.num + action.payload}
//         default :
//             throw new Error();
//     }
// }
export default function StartGrid (){
    const [numGrids, setNumGrids] = useState(0);
    if (numGrids === 0){
    return (
        <div>
            <h1>Choose your Grid</h1>
            <form action="">
                <label> Choose Number of Plots:
                    <input type="number"  onChange={e => setNumGrids(numGrids + e.target.value)}></input>
                </label>
                <br/>
                <button> Start Planting </button>
            </form>
        </div>
    )} else {
        const gridArray = (num) => {
            const finArr = [];
            for (let i =1; i <= num; i +=1){
                finArr.push(i);
            }
            return finArr;
        }
        return (
        <div>
            <div>
                    <h1>Number of Plots: {Number(numGrids)}</h1>
            </div>
            <div>
                {console.log(Number(numGrids))}
                {gridArray(numGrids).map(function(num){
                    return <div className='grids' key={num}>{num}</div>
                })}
            </div>
        </div>
        )
    }
}
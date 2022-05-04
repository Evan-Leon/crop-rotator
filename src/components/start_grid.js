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
            
                <label> Choose Number of Plots:
                    <input type="number"  onChange={e => setNumGrids(numGrids + e.target.value)}></input>
                </label>
                <br/>
                
            
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
                    <button onClick={()=>{
                        return (
                            <label> Choose Number of Plots:
                                <input type="number" onChange={e => setNumGrids(numGrids + e.target.value)}></input>
                            </label>
                        )
                    }}>Change Plot Number</button>
            </div>
            <div>
                {console.log(Number(numGrids))}
                {gridArray(numGrids).map(function(num){
                    return <div className='grids' key={num}>
                        <form action="">
                            <label > Choose a Crop
                                <select name="crops" >
                                    <option value="wheat">Wheat</option>
                                    <option value="corn">Corn</option>
                                    <option value="beans">Beans</option>
                                    <option value="rye">Rye</option>
                                    <option value="brocoli">Brocoli</option>
                                </select>
                            </label>
                        </form>
                    </div>
                })}
            </div>
        </div>
        )
    }
}
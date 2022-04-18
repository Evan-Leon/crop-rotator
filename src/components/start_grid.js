import React, {useState} from 'react';
export default function StartGrid (){
    const [numGrids, setNumGrids] = useState(0);
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
    )
}
import './Header.css';
import run from './svg-icons/run.svg';

export default function Second(){
    return(
        <div>
        <h2 className="headingsecond">Why Should you choose AntEagle</h2>
            <div className="about">
                <div className="one">
                    <p>Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.</p>
                </div>
                <div className="runs">
                    <img src={run}/>
                </div>
            </div>
        <button className="btnss">Learn More</button>

        </div>
    )
}
import './Header.css';
import run from './svg-icons/run2.png';

export default function SecondMobile(){
    return(
        <div>
        <h2 className="headingsecondm">Why Should you choose AntEagle</h2>
            <div className="aboutm">
                <div className="onem">
                    <p>Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.</p>
                </div>
                <div className="runsm">
                    <img src={run}/>
                </div>
            </div>
        <button className="btnssm">Learn More</button>

        </div>
    )
}
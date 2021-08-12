import './Header.css';
import upcoming from './svg-icons/upcoming.svg';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import crypto from './svg-icons/crypto.svg';
import btc from './svg-icons/btc.svg';
import eagle from './svg-icons/eagle.svg';
import eaglet from './svg-icons/eaglet.svg';
import roadmap from './roadmap.gif';
import roadmapcontent from './svg-icons/roadmapcontent.svg';
import echange from './svg-icons/echange.svg';
import exchangecontent from './svg-icons/exchangecontent.svg';
import investsmart from './svg-icons/invest-smart.svg';
import detailedstats from './svg-icons/detailed-stats.svg';
import growprofit from './svg-icons/grow-profit.svg';
import start from './svg-icons/start-project.svg';
import footer from './svg-icons/footer.svg';
export default function OurCrypto(){
    return(
        <div>
            <br/><br/>
            <Row>
            <div style={{top:20}}>
            <Col>
            <img src={crypto}/>
            </Col>
            
            </div>
            </Row>
            <br/><br/>
            <Row>
            <Col style={{top:'5px'}}>
           
            <img src={btc}/>
            </Col>
            <Col style={{top:'5px'}}>
            <img src={eagle}/>
            </Col>
            <Col style={{top:'5px'}}>
           <img src={eaglet}/>
            </Col>
            </Row>
            <br/><br/>
            <img src={upcoming}/>
            <br/><br/>
            <Row>
            
            <Col>
                <img src={roadmap}/>
            </Col>
            <Col>
            <h1 className="road">Road-Map</h1>
            <h5 className="roadcontent">A path way of steady and continous progress for an endeavour of success</h5>
            </Col>
            </Row>
            <Row>
                <img src={roadmapcontent}/>
            </Row>
            
            <div className="exchangetrade">
            <br/><br/>
            <img src={echange}/>
            <br/><br/>
            <img src={exchangecontent}/>
            
            <br/><br/><br/>
            <button className="btntrade">Start Trade</button>
            <br/><br/>
            <img src={investsmart}/>
            <br/><br/> <br/><br/>
            <img src={detailedstats}/>
            <img src={growprofit}/>
            <img src={start}/>
            <img src={footer}/>
            </div>
            <div className="footer">
            <button className="btnjoin">Join Now</button>
            <br/><br/><br/><br/>
            <h3 style={{fontFamily:'Montserrat',color:'white',fontSize:'16px',marginLeft:'10px',fontWeight:'bold'}}>Created and Published by Opulentia Cresco Private Limited</h3>
           <br/><br/>           
            </div>
        </div>
    )
}
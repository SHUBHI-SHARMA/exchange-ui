import './Header.css';
import upcomingm from './svg-icons/upcomingm.svg';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import cryptom from './svg-icons/cryptom.svg';
import btc from './svg-icons/btc.svg';
import eagle from './svg-icons/eagle.svg';
import eaglet from './svg-icons/eaglet.svg';
import roadmap from './roadmap.gif';
import roadmapcontentm from './svg-icons/roadmapcontentm.svg';
import exchangem from './svg-icons/exchangem.svg';
import exchangecontentm from './svg-icons/exchangecontentm.svg';
import investsmartm from './svg-icons/invest-smartm.svg';
import detailedstatsm from './svg-icons/detailed-statsm.svg';
import growprofitm from './svg-icons/grow-profitm.svg';
import start from './svg-icons/start-project.svg';
import footerm from './svg-icons/footerm.svg';
export default function OurCryptoMobile(){
    return(
        <div>
            <br/><br/>
            <Row>
            <div style={{top:20}}>
            <Col>
            <img src={cryptom}/>
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
            <img src={upcomingm}/>
            <br/><br/>
            <Row>
            
            <Col>
                <img src={roadmap} height="400" width="400"/>
            </Col>
            <Col>
            <h1 className="roadm">Road-Map</h1>
            <h5 className="roadcontent">A path way of steady and continous progress for an endeavour of success</h5>
            </Col>
            </Row>
            <Row>
                <img src={roadmapcontentm}/>
            </Row>
            
            <div className="exchangetrade">
            <br/><br/>
            <img src={exchangem}/>
            <br/><br/>
            <img src={exchangecontentm}/>
            
            <br/><br/><br/>
            <button className="btntrade">Start Trade</button>
            <br/><br/><br/><br/>
            <img src={investsmartm}/>
            <br/><br/> <br/><br/>
            <img src={detailedstatsm}/>
            <img src={growprofitm}/>
            <br/><br/>
            <img src={footerm}/>
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
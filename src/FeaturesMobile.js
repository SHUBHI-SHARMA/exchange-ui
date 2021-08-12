import './Features.css';
import featuress from './featuress.gif';
import finance from './finance.gif';
import decenter from './decenter.gif';
import cross from './cross.gif';
import encrypt from './encrypt.gif';
import secure from './secure.gif';
import help from './help.gif';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
export default function FeaturesMobile(){
    return(
        <div className="features">
<h1 className="titlem">Features</h1>

<div className="section1-1m">
<img src={featuress} width="400" height="400"/>

</div>

<div className="section1-2m">
<p className="param">AntEagle promises to expand the horizon of human endeavour and 
bring a lot of new features with advanced innovation and leading-edge 
technology.</p>
</div>
<br/><br/>

    <div className="section2-1m">
    <h3 className="headingsm">Decentralised Finance</h3>
    <img src={decenter}/>

    </div>
    <div className="section2-2m">
    <p className="param">A new way of providing a Decentralized Finance Solution that is scalable and sustainable making your experience up to the mark.</p>

    </div>
    <br/><br/>

    <div className="section3-1m">
        <h3 className="headingssm">CryptoCurrency Insurance</h3>
        <img src={finance}  width="430"/>

    </div>
    <div className="section3-2m">
        <p className="param">Our crypto network has proposed a new way where you can invest your money and be worry-free from cybercrime and theft.</p>

    </div>

<br/><br/>
<div className="section2-1m">
<h3 className="headingsm">Cross-Chain Support</h3>

<img src={cross}  width="430"/>
</div>
<div className="section2-2m">
    <p className="param">AntEagle offers you a scalable and sustainable blockchain solution with Multiple blockchain support.</p>
</div>
<br/><br/>
    <div className="section3-1m">
        <h3 className="headingssm">Post-Quantam Encryption</h3>
        <img src={encrypt}  width="430"/>

    </div>
    <div className="section3-2m">
        <p className="param">AntEagle will offer you an ultimate Encryption method integrated with our blockchain network which can never be affected by Quantum Computers.</p>

    </div>
<br/><br/>
<div className="section2-1m">
<h3 className="headingsm">Fast and Secure Network</h3>

<img src={secure} height="300" width="430"/>
</div>
<div className="section2-2m">
    <p className="param">We provide a secure and prominent system where you can complete transactions without any worry and enjoy profit with complete security.</p>
</div>
<br/><br/>
    <div className="section3-1m">
        <h3 className="headingssm">Help & Support</h3>
        <img src={help} width="430"/>

    </div>
    <div className="section3-2m">
    <p className="param">You will have a 24/7 support system for all your troubleshooting and queries so that you have a better and responsive user experience.</p>

    </div>
        </div>
    )
}
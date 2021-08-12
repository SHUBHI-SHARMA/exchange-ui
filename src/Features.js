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
export default function Features(){
    return(
        <div className="features">
<h1 className="title">Features</h1>

<div className="section1-1">
<p className="para">AntEagle promises to expand the horizon of human endeavour and 
bring a lot of new features with advanced innovation and leading-edge 
technology.</p>
</div>

<div className="section1-2">
<img src={featuress}/>
</div>


    <div className="section2-1">
<img src={decenter}/>
    </div>
    <div className="section2-2">
    <h3 className="headings">Decentralised Finance</h3>
        <p className="para">A new way of providing a Decentralized Finance Solution that is scalable and sustainable making your experience up to the mark.</p>
    </div>

    <div className="section3-1">
        <h3 className="headingss">CryptoCurrency Insurance</h3>
        <p className="para">Our crypto network has proposed a new way where you can invest your money and be worry-free from cybercrime and theft.</p>
    </div>
    <div className="section3-2">
        <img src={finance}/>
    </div>


<div className="section2-1">
<img src={cross}/>
</div>
<div className="section2-2">
<h3 className="headings">Cross-Chain Support</h3>
    <p className="para">AntEagle offers you a scalable and sustainable blockchain solution with Multiple blockchain support.</p>
</div>

    <div className="section3-1">
        <h3 className="headingss">Post-Quantam Encryption</h3>
        <p className="para">AntEagle will offer you an ultimate Encryption method integrated with our blockchain network which can never be affected by Quantum Computers.</p>
    </div>
    <div className="section3-2">
        <img src={encrypt}/>
    </div>

<div className="section2-1">
<img src={secure}/>
</div>
<div className="section2-2">
<h3 className="headings">Fast and Secure Network</h3>
    <p className="para">We provide a secure and prominent system where you can complete transactions without any worry and enjoy profit with complete security.</p>
</div>

    <div className="section3-1">
        <h3 className="headingss">Help & Support</h3>
        <p className="para">You will have a 24/7 support system for all your troubleshooting and queries so that you have a better and responsive user experience.</p>
    </div>
    <div className="section3-2">
        <img src={help}/>
    </div>
        </div>
    )
}
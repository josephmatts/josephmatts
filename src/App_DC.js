import './App_DC.css'
import './fonts.css'
import bgImg from './assets/bg_img.png';
import dcLogo from './assets/dc_logo.svg';
import arrow from './assets/arrow.svg';

function AppDc() {
    const displayText = "Cultivating A Design Culture For Learners, Thinkers, Creators & Investors."
    return (
        <div className="scaffold">
            <div className="AppDC">
                <header className="App-header">
                    <img className='BgImg' src={bgImg} alt="" />
                    <img src={dcLogo} alt="" className="dc-logo" />
                    <div className="text-column">
                        <p className="overlay-text">{displayText}</p>
                        <p className="find-us">Find Us</p>
                    </div>
                    <div className="container">
                        <img src={arrow} alt="" />
                    </div>
                </header>
            </div>
        </div>
    )
}

export default AppDc
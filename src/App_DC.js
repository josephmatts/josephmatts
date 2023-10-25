import './App_DC.css'
import './fonts.css'
import bgImg from './assets/bg_img.png';
import dcLogo from './assets/dc_logo.svg';
import arrow from './assets/arrow.svg';

function AppDc() {
    const displayText = "Cultivating A Design Culture For Learners, Thinkers, Creators & Investors."

    const handleScrollDown = () => {

        window.scrollTo({
            top: window.innerHeight + 150, // Adjust this value to the desired position
            behavior: 'smooth', // Optional: Smooth scrolling animation
        });
    };

    return (
        <div className="scaffold">
            <div className="AppDC">
                <header className="App-header">
                    <div className="bg-img-container">
                        <img className='BgImg' src={bgImg} alt="" />
                    </div>
                    <img src={dcLogo} alt="" className="dc-logo" />
                    <div className="text-column">
                        <p className="overlay-text">{displayText}</p>
                        <p className="find-us">Find Us</p>
                    </div>
                    <div className="container" onClick={handleScrollDown}>
                        <img src={arrow} alt="arrow" className='arrow' />
                    </div>
                </header>
            </div>
        </div>
    )
}

export default AppDc
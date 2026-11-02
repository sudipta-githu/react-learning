import profilePic from './assets/hero.png';

function Card(){
    return(
        <div className="card">
            <img src={profilePic} alt="Profile"/>
            <h2>Bro code</h2>
            <p>I make yotube and play video games</p>
        </div>
    )
}

export default Card;
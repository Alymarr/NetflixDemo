import yellowProfile from '../Assets/NetflixProfileYellow.png'
import blueProfile from '../Assets/NetflixProfileBlue.png'
import orangeProfile from '../Assets/NetflixProfileOrange.png'
import redProfile from '../Assets/NetflixProfileRed.png'
// import classes from './Users.module.css'
function Profile(props) {
  return (
    <div className='flex justify-evenly'>
      <div>
        <img alt="Profile Pic" src={yellowProfile} className='hover:border-white rounded-[20px]' onClick={props.onLoginHandler}></img>
        <div>
          <h1>Damion</h1>
        </div>
      </div>
      <div>
        <img alt="Profile Pic" src={orangeProfile} onClick={props.onLoginHandler}></img>
        <div>
          <h1>Simmon</h1>
        </div>
      </div>
      <div>
        <img alt="Profile Pic" src={redProfile} onClick={props.onLoginHandler}></img>
        <div>
          <h1>Lewis</h1>
        </div>
      </div>
      <div>
        <img alt="Profile Pic" src={blueProfile} onClick={props.onLoginHandler}></img>
        <div>
          <h1>George</h1>
        </div>
      </div>
    </div>
  );
}

export default Profile;

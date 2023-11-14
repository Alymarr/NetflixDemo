import yellowProfile from '../Assets/NetflixProfileYellow.png'
import blueProfile from '../Assets/NetflixProfileBlue.png'
import orangeProfile from '../Assets/NetflixProfileOrange.png'
import redProfile from '../Assets/NetflixProfileRed.png'
// import classes from './Users.module.css'
function Profile() {
  return (
    <div className='flex'>
      <div>
        <img alt="Profile Pic" src={yellowProfile} className=''></img>
        <div>
          <h1>Damion</h1>
        </div>
      </div>
      <div>
        <img alt="Profile Pic" src={orangeProfile}></img>
        <div>
          <h1>Simmon</h1>
        </div>
      </div>
      <div>
        <img alt="Profile Pic" src={redProfile}></img>
        <div>
          <h1>Lewis</h1>
        </div>
      </div>
      <div>
        <img alt="Profile Pic" src={blueProfile}></img>
        <div>
          <h1>George</h1>
        </div>
      </div>
    </div>
  );
}

export default Profile;

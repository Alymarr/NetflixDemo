import Profile from "../Components/Users";
import classes from './SignIn.module.css'
function SignIn() {
  return (
    <div className={classes.signIn}>
      <h1 className={classes.title}>Who's Watching?</h1>
      <Profile />
    </div>
  );
}

export default SignIn;

import Profile from "../Components/Users";
function SignIn(props) {
  const onLoginHandler = () => {
    props.setSignedIn(true)
  }
  return (
    <div className='bg-[#121212] h-[100vh] text-white text-center flex-col '>
      <h1 >Who's Watching?</h1>
      <Profile onLoginHandler={onLoginHandler} />
    </div>
  );
}

export default SignIn;

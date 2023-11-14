import SignIn from "./SignIn"
import classes from './Home.module.css'
import { useState } from "react"
function Home() {
    const [signedIn, setSignedIn] = useState(false)
    return (
        <>
            {signedIn && <h1>Browse All Titles</h1>}
            {!signedIn && <SignIn />}
        </>
    )
}

export default Home
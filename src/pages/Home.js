import SignIn from "./SignIn"
import { useState } from "react"
// eslint-disable-next-line
import navBar from "../Components/Navbar"
function Home() {
    const [signedIn, setSignedIn] = useState(false)
    let content

    if (signedIn) {
        content =
            <div className="bg-[#121212] h-[100vh]">
                <h1 className="text-white" >Browse All Titles</h1>
            </div>
    } else {
        content = <SignIn setSignedIn={setSignedIn} />
    }
    return (
        <>
            <navBar></navBar>
            {content}
        </>
    )
}

export default Home
import * as React from "react"
import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <Layout pageTitle={"About my own self!"}>
            <p>This is to indulge in all my frealties and everything is for me!</p>
        </Layout>
    )
}
export const Head = ()=> {return <title>About Me!</title>}
export default AboutPage
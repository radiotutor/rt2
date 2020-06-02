import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
        
    <h1>Support Us</h1><br></br>

    <h4>Thank you for considoring supporting RadioTutor</h4><br></br>

    <p>RadioTutor relies on regular donations to keep running, and to help the administrators provide regular updates to the site and question bank. 
    All of our donations are securely processed through GoCardless. See our <a href="/privacy" target="_blank">privacy policy</a> for more details. 
    If you are interested in becoming a sponsor, or advertising on RadioTutor, please <a href="/contact" target="_blank">contact us</a>.</p><br></br>
  </Layout>
)

export default SecondPage

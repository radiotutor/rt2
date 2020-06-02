import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Foundation Course" />
    <h1>Hi from the second page</h1>
    <p>These resources will help you to work towards getting your Foundation licence, and your first call-sign!</p>
    <p>We are working on our own Foundation course here at RadioTutor, so watch this space!</p>
    <a href="https://www.essexham.co.uk/train/foundation-slides/">Essex Ham</a>
    <a href="http://www.g0mwt.org.uk/training/courses/foundation.htm">Chelmsford Amateur Radio Society</a>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

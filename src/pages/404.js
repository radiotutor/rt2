import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const browser = typeof window !== "undefined" && window;

const NotFoundPage = () => {
  return (
    browser && (
      <Layout>
        <SEO title="404: Not found" />
        <h1>404m Band: NOT FOUND</h1>
        <p>It doesn't look like there's anyone active on the 404m band.</p>
      </Layout>
    )
  )
}

export default NotFoundPage

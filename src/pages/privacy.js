import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Privacy Policy" />
    
        <h2>Who we are</h2>
        <p>Our website address is: <a href="https://radiotutor.uk">https://radiotutor.uk</a>. The administrators for this website
        are Peter Barnes, MØSWN and Ben Chalmers, MØNBA. Peter can be contacted at <a href="mailto:peter@m0swn.uk">peter@m0swn.uk</a></p>
        <br></br>

        <h2>What personal data we collect and why we collect it</h2>

        <h3>Session Data</h3>
        <p>When you use our site, you are allocated a session ID number. This allows you to leave the site partway through a test,
        and return later to continue the test. No personal information is kept as part of session data.</p>

        <h3>Embedded content from other websites</h3>
        <p>This site may include embedded content (e.g. videos, images, articles, etc.).
        Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.</p>
        <p>These websites may collect data about you, use cookies, embed additional third-party tracking,
        and monitor your interaction with that embedded content, including tracking your interaction with the embedded content 
        if you have an account and are logged in to that website.</p>
        <br></br>

        <h2>Who we share your data with</h2>
        <h3>Analytics</h3>
        <p>We don't share any personal data from this site with any other party. We do use Google Analytics to help us monitor the usage
        of this site, but this does not involve the sharing of any identifiable data.</p>

        <h3>User Accounts</h3>
        <p>For users that register on our website (not currently available), we store the personal information they provide when 
        registering their account. This includes an email address and password. This data is kept for as long as the user's account
        is open</p>
        <br></br>

        <h2>What rights you have over your data</h2>
        <p>If you have an account on this site, you can request to receive an exported file of the personal data we hold about you, 
        including any data you have provided to us. You can also request that we erase any personal data we hold about you. 
        This does not include any data we are obliged to keep for administrative, legal, or security purposes.</p>
        <br></br>

        <h2>Where we send your data</h2>
        <p>Your personal data is not sent to any 3rd party</p>
        <br></br>

        <h2>Additional information</h2>
        <h3>How we protect your data</h3>
        <p>The only people with access to your data are the administrators of this website. 
        Currently, this is limited only to Peter Barnes, MØSWN and Ben Chalmers, MØNBA. This access does not extend to passwords, 
        which are only ever stored in an encrypted format and thus are never readable to the site administrators.</p>

        <h3>What data breach procedures we have in place</h3>
        <p>In the unlikely event of a breach of this site, our first cause of action would be to automatically lock out all users of the site, 
        and then force every user to create a new password. This action would provide a good line of defence against an intruder 
        who were to deliberately breach one of the accounts of this site. We would send out an email to every user of the site, 
        warning them of the breach and that they will need to change their passwords on their next login. 
        If required, we would take the site offline while we find out the cause of the breach, and leave it offline until we are happy
        that the security of the site has been reestablished.</p>

        <h3>What third parties we receive data from</h3>
        <p>We don't recieve any data about you from 3rd parties</p>

        <h3>Industry regulatory disclosure requirements</h3>
        <p>As a website operating in the United Kingdom, we are subject to the GDPR regulations.
        This means that when you create an account on this website, you must agree to our privacy policy before doing so.
        We are also required by law to notify every user of this site if a data breach were to occur, within 72 hours. 
        As mentioned earlier in this document, users to this site are entitled to know what we do with their personal data,
        and to request a copy of their personal data. We have a system in place for this an aim to answer such a request within 48 hours.
        Users also have a 'right to be forgotten', by which they can request to have all of their personal data deleted from this site. 
        We would aim to answer such a request within 48 hours.</p>

        <br></br><br></br>

        <p>If you have any questions about this document or would like to submit a GDPR request please contact the administrators
        though the <a href="https://radiotutor.uk/contact/" target="blank">Contact Us</a> page</p>

        <br></br><br></br>
  </Layout>
)

export default SecondPage

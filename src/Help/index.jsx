import React from 'react'
import { Link } from 'react-router-dom'

export default function Help() {
  return (
      <div style={{ padding: '24px', boxSizing: 'border-box', width: '100%' }}>
        <p>
              Welcome to our FAQ page, where we aim to address common questions and provide you with helpful information about our services and platform. If you don't find the answers you're looking for here, please don't hesitate to contact our support team for further assistance.
        </p>
          <h1> Frequently asked Questions </h1>


         

          <h3> How do I get started?</h3>
          To get started, you need to  <Link to={'/auth'}>create an account</Link>, provide basic information, and verify your email address, then log into the ginyverse.

        



          <h3>   How do I post an errand or task?</h3>

          Posting an errand is simple. After logging in, click on the plus icon and fill out the details of your task, including the description, location, and the  amount, or you can share private errands through the messaging platform.

         
          <h3>  How do I find and accept errands to complete?
</h3>

          You can browse available errands in your area in the feeds, When you find a task you'd like to complete, click on it, review the details, and click "Help", or you can click see more to negotiate 

         

          <h3>  How does the escrow system work?</h3>

          The escrow system holds the agreed-upon amount for an errand until both the User and the Helper confirm that the errand is complete. Once confirmed, the funds are released to the Helper, minus a 5% service fee.
          

          <h3>What is the 5% service fee for?</h3>

          The 5% service fee covers the cost of maintaining and operating our platform, ensuring a secure and seamless experience for all users.
        
          <h3>   How do I resolve a dispute with another user?
</h3>

          If a dispute arises, please  contact our support team, provide relevant information, and await resolution.

          
          <h3>  Is my personal information safe and secure?</h3>

          We take user privacy seriously. Please review our <Link to={'/tandc'}>Privacy Policy</Link>  to learn more about how we protect your personal information.

        

          <h3>   Can I trust other users on the platform?</h3>

          While we make efforts to foster a trustworthy community, it's essential to exercise caution and good judgment when interacting with other users. We will add   reviews, ratings, for users , we recommend communicating with users before accepting or assigning errands,
          all users are verified.
          

          

          <h3> How can I contact Ginyverse for further assistance?</h3>

          You can reach out to our support team by mail @ info@ginyverse.com, or by calling +2348105685600. We are here to assist you with any questions or concerns you may have.

        <p>
              We hope this FAQ page has addressed your questions. If you need further assistance or have specific inquiries, don't hesitate to get in touch with our support team. We're here to help!
          </p>


      </div>
  )
}

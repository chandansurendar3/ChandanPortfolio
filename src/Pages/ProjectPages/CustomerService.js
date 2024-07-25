import React from 'react'
import login from '../../assets/CustLogin.jpeg'
import addEmp from '../../assets/CustAddEmp.jpeg'
import home from '../../assets/CustHome.jpeg'
import support from '../../assets/CustSupport.jpeg'
import ticket from '../../assets/CustTicket.jpeg'
import viewEmp from '../../assets/CustViewEmp.jpeg'
import viewRep from '../../assets/CustViewRep.jpeg'
import repdash from '../../assets/RepDash.jpeg'
import repticket from '../../assets/RepTicket.jpeg'
import ScrollToTopButton from '../../components/ScrollToTopButton'
import Footer2 from '../../components/Footer2'



import { Container } from 'react-bootstrap'

const CustomerService = () => {
  return (
    <>
    <div style={{ display: 'flex', gap: '20px', padding:20, fontSize: '30px' }}>
<div style={{ display: 'flex', flexDirection: 'column', maxWidth: 300, paddingTop:50, paddingLeft:50 }} className='stack'>
         <b> Tech Stack </b>
          <ul style={{ display: 'flex', flexDirection: 'column', listStyleType: 'none', padding: 0, margin: 0 }}>
            <li>React.js</li>
            <li>SpringBoot</li>
            <li>Bootstrap</li>
            <li>Java</li>
            <li>MySQL</li>
            <li>CSS</li>
            <li>Junit</li>
          </ul>
        </div>

    <Container>
      <div className='header' style={{textAlign:'center'}}>
        Interactive Customer Dashboard
      </div>
      <br />
      <div className='Cust'>
        <p>
        This is the login page where the user has to enter the credentials inorder to login.
        Has three persona i.e, administrator,customer, and representative. Everybody logs in 
        through the same page but based on their roles will be redirected to respective pages.
        </p> <br />
        <img src={login} alt='login' /> <br />
        <p>Home page of a customer. Displays several dashboards</p> <br />
        <img src={home} alt='home' /> <br />
        <p>Support page : A customer can raise queries if there are any.</p> <br />
        <img src={support} alt='support' /> <br />
        <p> Ticket history page :   </p> <br />
        <img src={ticket} alt='ticket' /> <br />
        <p> Representative home page : </p> <br />
        <img src={repdash} alt='repdash' /> <br />
        <p> Representative ticket page : </p> <br />
        <img src={repticket} alt='repticket' /> <br />
        <p> Coming to the admin persona</p>
        <p> Admin can add or update employee details </p> <br />
        <img src={addEmp} alt='addEmp' /> <br />
        <p> Admin can view list of employees and the representatives and their details as well as remove them. </p> <br />
        <img src={viewEmp} alt='viewEmp' /> <br />
        <img src={viewRep} alt='viewRep' /> <br />

        <ScrollToTopButton />
      </div>
    </Container>
    <br />
    </ div>
    <Footer2 />
    </>
  )
}

export default CustomerService
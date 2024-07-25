import React from 'react'
import landing from '../../assets/landing.jpeg'
import rename from '../../assets/rename.jpeg'
import dashboard from '../../assets/dashboard.jpeg'
import acctran from '../../assets/acctran.jpeg'
import addArtist from '../../assets/addArtist.jpeg'
import addManArt from '../../assets/addManArt.jpeg'
import addsong from '../../assets/addsong.jpeg'
import contract from '../../assets/contract.jpeg'
import Profile from '../../assets/Profile.jpeg'
import terms from '../../assets/terms .jpeg'
import transaction from '../../assets/transaction.jpeg'
import './ProjectPages.css'
import { Container,Card } from 'react-bootstrap'
import ScrollToTopButton from '../../components/ScrollToTopButton'
import Footer2 from '../../components/Footer2'

// const Rms = () => {
//   return (
//     <>
//     {/* <div style={{display:'inline',maxWidth:50,}} className='stack'>
//       Tech Stack used:
//       <li>React.js</li>
//       <li>SpringBoot</li>
//       <li>Bootstrap</li>
//       <li>Java</li>
//       <li>MySQL</li>
//     </div> */}
//    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 50 }} className='stack'>
//   Tech Stack used:
//   <ul style={{ display: 'flex', flexDirection: 'column', listStyleType: 'none', padding: 0, margin: 0 }}>
//     <li>React.js</li>
//     <li>SpringBoot</li>
//     <li>Bootstrap</li>
//     <li>Java</li>
//     <li>MySQL</li>
//   </ul>
// </div>


    {/* <Container>
      <div className='header' style={{textAlign:'center'}}>Royalty Management System</div><br />
      <div>
        <p>This is the login page where the user has to enter the credentials inorder to login.
        Has three persona i.e, administrator,artist, and manager. Everybody logs in through the 
        same page but based on their roles will be redirected to respective pages.
        </p>
        <br />
        <img src={landing} alt='landing' /> <br />
        <img src={rename} alt='login' /> <br />
        <img src={dashboard} alt='dashboard' /> <br />
        <p>This is the dashboard view of the revenue being generated and also the number of streams achieved.</p> <br />
        <img src={acctran} alt='acctran' /> <br />
        <p>Here the user[artist] can see his/her top performing songs and also respective streams and revenue generated. If the artist wants to view his/her profile he/she can click on the account button .
           The artist can see their transaction history by clicking on the transaction button.</p> <br />
        <img src={Profile} alt='profile' /> <br />
        <p>Below the transaction history has been displayed of the last six months. 
          The user can toggle the filter button in order to see his/her lifetime transactions as well.</p> <br />
        <img src={transaction} alt='transaction' /> <br />
        <p>Only the admin can add an artist or a manager</p> <br />
        <img src={addManArt} alt='addManager' /> <br />
        <p>All the details are entered by the admin. The user can later change his/her details in the profile along with the password. 
          When the user is logging in for the first time, he/she will be directly redirected to the change password page.</p> <br />
        <img src={addArtist} alt='addArtist' /> <br />
        <p>An artist can add song using the add song button </p> <br />
        <img src={addsong} alt='addArtist' /> <br />
        <p>Also can make collaborations with other artists and also declare the royalty share while adding the song itself. </p> <br />
        <p> A manager can team up with an artist and manage his artist. Can create and share a contract to the artist 
          which can be accepted or rejected by the artist. Vice versa is also possible.
         </p> 
         <p>The user can set the manager share percentage and the duration of the contract. 
          Both should agree the terms and conditions.</p>
         <img src={contract} alt='contract' /> <br />
         <img src={terms} alt='terms' /> <br />

          <ScrollToTopButton />
      </div>
      
    </Container>
    <br />
    <Footer2 />
</>
  )
}

export default Rms */}

const Rms = () => {
  return (
    <>
<div style={{ display: 'flex', gap: '20px', padding:20, fontSize: '30px' }}>
<div style={{ display: 'flex', flexDirection: 'column', maxWidth: 300, paddingTop:50, paddingLeft:50 }} className='stack'>
   <Card>
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
          </Card>
        </div>

        <Container>
          <div className='header' style={{ textAlign: 'center' }}>Royalty Management System</div>
          <br />
          <div>
            <p>This is the login page where the user has to enter the credentials in order to login.
              Has three persona i.e, administrator, artist, and manager. Everybody logs in through the
              same page but based on their roles will be redirected to respective pages.
            </p>
            <br />
            <img src={landing} alt='landing' />
            <br />
            <img src={rename} alt='login' />
            <br />
            <img src={dashboard} alt='dashboard' />
            <br />
            <p>This is the dashboard view of the revenue being generated and also the number of streams achieved.</p>
            <br />
            <img src={acctran} alt='acctran' />
            <br />
            <p>Here the user [artist] can see his/her top performing songs and also respective streams and revenue generated. If the artist wants to view his/her profile he/she can click on the account button.
              The artist can see their transaction history by clicking on the transaction button.</p>
            <br />
            <img src={Profile} alt='profile' />
            <br />
            <p>Below the transaction history has been displayed of the last six months.
              The user can toggle the filter button in order to see his/her lifetime transactions as well.</p>
            <br />
            <img src={transaction} alt='transaction' />
            <br />
            <p>Only the admin can add an artist or a manager</p>
            <br />
            <img src={addManArt} alt='addManager' />
            <br />
            <p>All the details are entered by the admin. The user can later change his/her details in the profile along with the password.
              When the user is logging in for the first time, he/she will be directly redirected to the change password page.</p>
            <br />
            <img src={addArtist} alt='addArtist' />
            <br />
            <p>An artist can add song using the add song button </p>
            <br />
            <img src={addsong} alt='addArtist' />
            <br />
            <p>Also can make collaborations with other artists and also declare the royalty share while adding the song itself. </p>
            <br />
            <p>A manager can team up with an artist and manage his artist. Can create and share a contract with the artist
              which can be accepted or rejected by the artist. Vice versa is also possible.</p>
            <p>The user can set the manager share percentage and the duration of the contract.
              Both should agree to the terms and conditions.</p>
            <img src={contract} alt='contract' />
            <br />
            <img src={terms} alt='terms' />
            <br />
            <ScrollToTopButton />
          </div>
        </Container>
      </div>
      <br />
      <Footer2 />
    </>
  );
}

export default Rms;

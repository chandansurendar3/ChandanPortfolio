// // src/components/Contact.js
// import React from 'react';

// const Contact = () => {
//   return (
//     <section id="contact" className="py-20 bg-gray-100">
//       <div className="container mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
//         <p className="text-lg mb-8">Feel free to reach out for collaborations or just a friendly hello!</p>
//         <div className="max-w-lg mx-auto text-left">
//           <div className="mb-4">
//             <h3 className="text-2xl font-bold">Email</h3>
//             <p className="text-lg">chandansurendar3@gmail.com</p>
//           </div>
//           <div className="mb-4">
//             <h3 className="text-2xl font-bold">Phone</h3>
//             <p className="text-lg">+91 7337886423</p>
//           </div>
//           <div className="mb-4">
//             <h3 className="text-2xl font-bold">LinkedIn</h3>
//             <p className="text-lg">
//               <a href="https://www.linkedin.com/in/chandan-g-s-ba2087220" className="text-blue-500">my linkedin</a>
//             </p>
//           </div>
//           <div className="mb-4">
//             <h3 className="text-2xl font-bold">GitHub</h3>
//             <p className="text-lg">
//               <a href="https://github.com/yourusername" className="text-blue-500">github.com/yourusername</a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;

// import React, { useState } from "react";
// import * as emailjs from "emailjs-com";
// import "./Footer.css";
// import { Helmet, HelmetProvider } from "react-helmet-async";
// //import { meta } from "../../content_option";
// import { Container, Row, Col, Alert } from "react-bootstrap";
// import { contactConfig } from "../content_option.js";

// export const Footer = () => {
//   const [formData, setFormdata] = useState({
//     email: "",
//     name: "",
//     message: "",
//     loading: false,
//     show: false,
//     alertmessage: "",
//     variant: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormdata({ loading: true });

//     const templateParams = {
//       from_name: formData.email,
//       user_name: formData.name,
//       to_name: contactConfig.YOUR_EMAIL,
//       message: formData.message,
//     };

//     emailjs
//       .send(
//         contactConfig.YOUR_SERVICE_ID,
//         contactConfig.YOUR_TEMPLATE_ID,
//         templateParams,
//         contactConfig.YOUR_USER_ID
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           setFormdata({
//             loading: false,
//             alertmessage: "SUCCESS! ,Thankyou for your messege",
//             variant: "success",
//             show: true,
//           });
//         },
//         (error) => {
//           console.log(error.text);
//           setFormdata({
//             alertmessage: `Faild to send!,${error.text}`,
//             variant: "danger",
//             show: true,
//           });
//           document.getElementsByClassName("co_alert")[0].scrollIntoView();
//         }
//       );
//   };

//   const handleChange = (e) => {
//     setFormdata({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <HelmetProvider>
//       <Container>
//         <Helmet>
//           <meta charSet="utf-8" />
//           <title>Chandan | Contact</title>
//           <meta name="description" content="Full-stack dev" />
//         </Helmet>
//         <Row className="mb-5 mt-3 pt-md-3">
//           <Col lg="8">
//             <h1 className="display-4 mb-4">Contact Me</h1>
//             <hr className="t_border my-4 ml-0 text-left" />
//           </Col>
//         </Row>
//         <Row className="sec_sp d-flex">
//           <Col lg="12">
//             <Alert
//               //show={formData.show}
//               variant={formData.variant}
//               className={`rounded-0 co_alert ${
//                 formData.show ? "d-block" : "d-none"
//               }`}
//               onClose={() => setFormdata({ show: false })}
//               dismissible
//             >
//               <p className="my-0">{formData.alertmessage}</p>
//             </Alert>
//           </Col>
//           <Col lg="5" className="mb-5">
//             <h3 className="color_sec py-4">Get in touch</h3>
//             <address>
//               <strong>Email:</strong>{" "}
//               <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
//                 {contactConfig.YOUR_EMAIL}
//               </a>
//               <br />
//               <br />
//               {contactConfig.hasOwnProperty("YOUR_FONE") ? (
//                 <p>
//                   <strong>Phone:</strong> {contactConfig.YOUR_FONE}
//                 </p>
//               ) : (
//                 ""
//               )}
//             </address>
//             <p>{contactConfig.description}</p>
//           </Col>
//           <Col lg="7" className="d-flex align-items-center">
//             <form onSubmit={handleSubmit} className="contact__form w-100">
//               <Row>
//                 <Col lg="6" className="form-group">
//                   <input
//                     className="form-control"
//                     id="name"
//                     name="name"
//                     placeholder="Name"
//                     value={formData.name || ""}
//                     type="text"
//                     required
//                     onChange={handleChange}
//                   />
//                 </Col>
//                 <Col lg="6" className="form-group">
//                   <input
//                     className="form-control rounded-0"
//                     id="email"
//                     name="email"
//                     placeholder="Email"
//                     type="email"
//                     value={formData.email || ""}
//                     required
//                     onChange={handleChange}
//                   />
//                 </Col>
//               </Row>
//               <textarea
//                 className="form-control rounded-0"
//                 id="message"
//                 name="message"
//                 placeholder="Message"
//                 rows="5"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//               ></textarea>
//               <br />
//               <Row>
//                 <Col lg="12" className="form-group">
//                   <button className="btn ac_btn" type="submit">
//                     {formData.loading ? "Sending..." : "Send"}
//                   </button>
//                 </Col>
//               </Row>
//             </form>
//           </Col>
//         </Row>
//       </Container>
//       <div className={formData.loading ? "loading-bar" : "d-none"}></div>
//     </HelmetProvider>
//   );
// };
// export default Footer;

// import React, { useState } from "react";
// import * as emailjs from "emailjs-com";
// import "./Footer.css";
// import { Helmet, HelmetProvider } from "react-helmet-async";
// import { Container, Row, Col, Alert } from "react-bootstrap";
// import { contactConfig } from "../content_option.js";

// export const Footer = () => {
//   const [formData, setFormdata] = useState({
//     email: "",
//     name: "",
//     message: "",
//     loading: false,
//     show: false,
//     alertmessage: "",
//     variant: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormdata({ loading: true });

//     const templateParams = {
//       from_name: formData.email,
//       user_name: formData.name,
//       to_name: contactConfig.YOUR_EMAIL,
//       message: formData.message,
//     };

//     emailjs
//       .send(
//         contactConfig.YOUR_SERVICE_ID,
//         contactConfig.YOUR_TEMPLATE_ID,
//         templateParams,
//         contactConfig.YOUR_USER_ID
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           setFormdata({
//             loading: false,
//             alertmessage: "SUCCESS! ,Thank you for your message",
//             variant: "success",
//             show: true,
//           });
//         },
//         (error) => {
//           console.log(error.text);
//           setFormdata({
//             alertmessage: `Failed to send!,${error.text}`,
//             variant: "danger",
//             show: true,
//           });
//           document.getElementsByClassName("co_alert")[0].scrollIntoView();
//         }
//       );
//   };

//   const handleChange = (e) => {
//     setFormdata({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <HelmetProvider>
//       <Container>
//         <Helmet>
//           <meta charSet="utf-8" />
//           <title>Chandan | Contact</title>
//           <meta name="description" content="Full-stack dev" />
//         </Helmet>
//         <Row className="mb-5 mt-3 pt-md-3">
//           <Col lg="8">
//             <h1 className="display-4 mb-4">Contact Me</h1>
//             <hr className="t_border my-4 ml-0 text-left" />
//           </Col>
//         </Row>
//         <Row className="sec_sp d-flex justify-content-start">
//           <Col lg="5" className="mb-5">
//             <h3 className="color_sec py-4">Get in touch</h3>
//             <address>
//               <strong>Email:</strong>{" "}
//               <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
//                 {contactConfig.YOUR_EMAIL}
//               </a>
//               <br />
//               <br />
//               {contactConfig.hasOwnProperty("YOUR_FONE") ? (
//                 <p>
//                   <strong>Phone:</strong> {contactConfig.YOUR_FONE}
//                 </p>
//               ) : (
//                 ""
//               )}
//             </address>
//             <p>{contactConfig.description}</p>
//           </Col>
//           <Col lg="7" className="align-items-center">
//             <form onSubmit={handleSubmit} className="contact__form w-100">
//               <Row>
//                 <Col lg="6" className="form-group">
//                   <input
//                     className="form-control"
//                     id="name"
//                     name="name"
//                     placeholder="Name"
//                     value={formData.name || ""}
//                     type="text"
//                     required
//                     onChange={handleChange}
//                   />
//                 </Col>
//                 <Col lg="6" className="form-group">
//                   <input
//                     className="form-control rounded-0"
//                     id="email"
//                     name="email"
//                     placeholder="Email"
//                     type="email"
//                     value={formData.email || ""}
//                     required
//                     onChange={handleChange}
//                   />
//                 </Col>
//               </Row>
//               <textarea
//                 className="form-control rounded-0"
//                 id="message"
//                 name="message"
//                 placeholder="Message"
//                 rows="5"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//               ></textarea>
//               <br />
//               <Row>
//                 <Col lg="12" className="form-group">
//                   <button className="btn ac_btn" type="submit">
//                     {formData.loading ? "Sending..." : "Send"}
//                   </button>
//                 </Col>
//               </Row>
//             </form>
//           </Col>
//         </Row>
//       </Container>
//       <div className={formData.loading ? "loading-bar" : "d-none"}></div>
//     </HelmetProvider>
//   );
// };
// export default Footer;


import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { contactConfig } from "../content_option.js";
import "./Footer.css";

export const Footer = () => {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata({ loading: true });

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormdata({
            loading: false,
            alertmessage: "SUCCESS! Thank you for your message",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          console.log(error.text);
          setFormdata({
            alertmessage: `Failed to send! ${error.text}`,
            variant: "danger",
            show: true,
          });
          document.getElementsByClassName("co_alert")[0].scrollIntoView();
        }
      );
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <HelmetProvider>
      <div className="bg-gray-800 text-white p-4" style={{height:432}}>
      <Container id="footer" >
        <Helmet>
          <meta charSet="utf-8" />
          <title>Chandan | Contact</title>
          <meta name="description" content="Full-stack dev" />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp d-flex justify-content-start">
          <Col lg="5" className="mb-5 col-cust2">
            <h3 className="py-4" style={{fontSize:'1.3rem'}}>Get in touch</h3>
            <address>
              <strong style={{fontSize:'1.3rem'}}>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`} style={{fontSize:'1.3rem'}}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                <p style={{fontSize:'1.3rem'}}>
                  <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                </p>
              ) : (
                ""
              )}
            </address>
             {/* <p>{contactConfig.description}</p>  */}
          </Col>
          <Col lg="7" className="col-cust1">
            <form onSubmit={handleSubmit} className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group col-cust1">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formData.name || ""}
                    type="text"
                    required
                    onChange={handleChange}
                    style={{ borderColor: 'white', border: "1px solid" }}
                  />
                </Col>
                <Col lg="6" className="form-group col-cust1">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={formData.email || ""}
                    required
                    onChange={handleChange}
                    style={{ borderColor: 'white', border: "1px solid" }}
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                style={{ borderColor: 'white', border: "1px solid" }}
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group .col-cust1">
                  <button className="btn ac_btn" type="submit">
                    {formData.loading ? "Sending..." : "Send"}
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
      </div>
      <div className={formData.loading ? "loading-bar" : "d-none"}></div>
    </HelmetProvider>
  );
};

export default Footer;

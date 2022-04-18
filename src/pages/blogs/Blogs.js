import React from 'react';
import './Blogs.css'
import { Col, Container, Row } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='my-5'>
            <Container>
                <div className='titles'>
                    <p className='section-sub-title'>THINKING POSITIVE</p>
                    <h1 className='section-title'>SOME DOCUMENTATION</h1>
                </div >
                <Row xs={1} md={1} lg={2} className="gy-5">
                    <Col>
                        <div className="blog">
                            
                                <h3>Authentication</h3>
                                <p>Authentication is the act of validating that users are whom they claim to be. Authentication determines whether the person is user or not. It needs usually user’s login details. In process, the identity of users are checked for providing the access to the system. In this system users  are verified and It is done before the authorization process.</p>
                            
                        </div>
                    </Col>
                    <Col>
                        <div className="blog">
                            <h3>Authorization</h3>
                            <p>Authorization in system security is the process of giving the user permission to access a specific resource or function. it determines What permission do user have? Mainly  in this process, users authorities are checked for accessing the resources. This process is done after the authentication process. in this process needs users security levels.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="blog">
                            
                                <h3>Firebase</h3>
                                <p>Basically, I Use firebase for the user authentication system and recently I am used it for  hosting my website. Firebase helps me develop high-quality apps with user Authentication system. and as a user of Firebse I call tell that Each feature works independently, and they work even better together.</p>
                            <strong>There are many other options have to implement authentication</strong>    
                            <p>Microsoft Azure Active Directory,
                                Google Cloud Identity and Access Management (Cloud IAM),
                                IBM IAM,
                                OneLogin,
                                Okta,
                                Oracle Identity Management,
                                Ping Identity,
                                SailPoint IdentityIQ
                            </p>
                            
                        </div>
                    </Col>
                    <Col>
                        <div className="blog">
                            <h3>Firebase Uses</h3>
                            <strong>There are many services which Firebase provides, Most useful of them are:</strong>
                            <p>Cloud Firestore,
                                Cloud Functions,
                                Authentication,
                                Hosting,
                                Cloud Storage,
                                Google Analytics,
                                Predictions,
                                Cloud Messaging,
                                Dynamic Links,
                                Remote Config,
                            </p>
                        </div>
                    </Col>
                </Row>
           </Container>
        </div>
    );
};

export default Blogs;
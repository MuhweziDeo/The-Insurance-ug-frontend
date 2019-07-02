import React from 'react';
import NavigationBarComponent from '../shared/navbar/navbar';
import './landingPage.css';
import { Box, Container, Typography, Button, Grid, List, Divider, ListItem, ListItemText } from
'@material-ui/core';
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';
import Footer from '../shared/footer/footer';

const landingPage: React.FC = () => {
return (
<Box overflow="hidden">
    <div className="header__container" style={{ background: '#7ed56f' }}>
        <NavigationBarComponent />
        <div className="intro">
            <h1 color="#1B1859">Simple transparent Pricing</h1>
            <h1 className="intro-white">Always Know what you will Pay</h1>
        </div>
    </div>
    <Container>
        <Box className="header_images" display="flex" flexDirection="row">
            <Box height="450px" width="600px" textAlign="center" display="flex" flexDirection="column"
                justifyItems="center" bgcolor="white" boxShadow={3} m={2}>
                <Box p={2}>
                    <Typography style={{color:'#7ed56f'}} variant="h5" component="h5">
                        Pay As You Go
                    </Typography>
                </Box>
                <Divider />

                <Box textAlign="center" flexGrow={1} p={2}>
                    <Typography align="center" component="img"> 
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText primary="Products" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="United States" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="English" />
                        </ListItem>
                    </List>

                </Box>

                <Box bgcolor="aliceblue" p={2} textAlign="center">
                    <Button size="large" variant="contained" color="primary">
                        Get started
                    </Button>
                </Box>
            </Box>
            <Box  display="block" width="500px" p={2} height="350px" marginTop="70px" marginLeft="-15px" color="white" bgcolor="#1B1859"
                boxShadow={3} m={2}>
                    <img src="https://images.pexels.com/photos/1266005/pexels-photo-1266005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
               
            </Box>
        </Box>
    </Container>

    <Box boxShadow={2} bgcolor="#7ed56f" display="flex" flexDirection="row" p={10} className="highlight__section_1">
        <Box>
            <Typography component="p">
                <svg color="blue" xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24">
                    <path
                        d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
                    </svg>
            </Typography>
        </Box>
        <Box textAlign="center" flexGrow={1}>
            <Typography component="p">
                Giving your the insurance you need to worry about other things
            </Typography>
            <Typography component="p">
                Once you sign up we can immediately start looking after all the things you value,
                And can opt out easily like a thanos snap
            </Typography>
        </Box>
    </Box>
    <Box p={10} className="services">
        <Container style={{marginTop: '10px'}}>
            <Grid container spacing={7} className="highlight__section_2">
                <Grid item>
                    <Typography variant="h6">
                        Payments
                    </Typography>

                </Grid>

                <Grid item>
                    <Typography variant="h6">
                        A complete plan to help easily get started. Learn more <svg xmlns="http://www.w3.org/2000/svg"
                            width="18" height="18" viewBox="0 0 18 18">
                            <path d="M9 3L7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z" />
                        </svg>
                    </Typography>

                </Grid>

            </Grid>
            <Grid container spacing={7} className="highlight__section_2">
                <Grid item>
                    <Typography variant="h6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24">
                            <path
                                d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                        </svg>
                    </Typography>

                </Grid>

                <Grid item>
                    <Typography variant="h6">
                        Credit cards & Debit Cards

                    </Typography>
                    <Typography component="p">
                        We charge a small Fee everytime you accept a credit
                    </Typography>
                    <Typography component="p">
                        Or Debit Card payment. The price is the same for all major cards
                    </Typography>
                    <Typography component="p">
                        And no additional fees regardless of which country you come from
                    </Typography>

                </Grid>

            </Grid>
            <Grid container spacing={7} className="highlight__section_3">
                <Grid item>
                    <Typography className="bold" variant="h6" component="h1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24">
                            <path
                                d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                            </svg>
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography variant="h6" component="h1">
                        More Payment methods

                    </Typography>
                    <Typography component="p">
                        We support most popular mehods
                    </Typography>
                    <Typography component="p">
                        We support mobile money, PEP and other payment methods
                    </Typography>
                    <Typography component="p">
                        Paper can be used to build surface or other
                        Paper can be used to build surface or other
                    </Typography>
                </Grid>

                <Grid item alignItems="center">
                    <Typography className="bold" variant="h6" component="h1">
                        Payments
                    </Typography>
                </Grid>

            </Grid>
        </Container>
    </Box>

    <Box m={5} boxShadow={2} bgcolor="#7ed56f" display="flex" flexDirection="row" p={10}
        className="highlight__section_1">
        <Box>
            <Typography component="p">
                <ThreeDRotationIcon fontSize="large" />
            </Typography>
        </Box>
        <Box textAlign="center" flexGrow={1}>
            <Typography component="p">
                Giving your the insurance you need to worry about other things
            </Typography>
            <Typography component="p">
                Once you sign up we can immediately start looking after all the things you value,
                And can opt out easily like a thanos snap
            </Typography>
        </Box>
    </Box>
    <Grid justify="center" alignItems="center" style={{background :'#1B1859', color: 'white'}} container spacing={7}>
        <Grid item>
            <Typography className="bold" variant="h6" component="h1">
                Transfer
            </Typography>
        </Grid>

        <Grid item>
            <Typography className="bold" variant="h6" component="h1">
                Payments
            </Typography>
            <Typography component="p">
                Paper can be used to build surface or other
                Paper can be used to build surface or other
            </Typography>
            <Typography component="p">
                Paper can be used to build surface or other
                Paper can be used to build surface or other
            </Typography>
            <Typography component="p">
                Paper can be used to build surface or other
                Paper can be used to build surface or other
            </Typography>
            <Typography className="bold" variant="h6" component="h1">
                Payments
            </Typography>

        </Grid>
        <Grid item>
            <Typography className="bold" variant="h6" component="h1">
                Payments
            </Typography>
        </Grid>
    </Grid>
    <Grid justify="center" alignItems="center" style={{background :'#1B1859', color: 'white'}} container spacing={7}>
        <Grid item>
            <Typography className="bold" variant="h6" component="h1">
                Contracts
            </Typography>
        </Grid>

        <Grid item>
            <Typography className="bold" variant="h6" component="h1">
                Payments
            </Typography>
            <Typography component="p">
                Paper can be used to build surface or other
                Paper can be used to build surface or other
            </Typography>
            <Typography component="p">
                Paper can be used to build surface or other
                Paper can be used to build surface or other
            </Typography>
            <Typography component="p">
                Paper can be used to build surface or other
                Paper can be used to build surface or other
            </Typography>
            <Typography className="bold" variant="h6" component="h1">
                Payments
            </Typography>

        </Grid>
        <Grid item>
            <Typography className="bold" variant="h6" component="h1">
                Payments
            </Typography>
        </Grid>
    </Grid>
    <Grid justify="center" alignItems="center" style={{background :'#1B1859', color: 'white'}} container spacing={7}>
        <Grid item>
            <Typography className="bold" variant="h6" component="h1">
                Connect
            </Typography>
        </Grid>

        <Grid item>
            <Typography className="bold" variant="h6" component="h1">
                Payments
            </Typography>
            <Typography component="p">
                Paper can be used to build surface or other
                Paper can be used to build surface or other
            </Typography>
            <Typography component="p">
                Paper can be used to build surface or other
                Paper can be used to build surface or other
            </Typography>
            <Typography component="p">
                Paper can be used to build surface or other
                Paper can be used to build surface or other
            </Typography>
            <Typography className="bold" variant="h6" component="h1">
                Payments
            </Typography>

        </Grid>
        <Grid item>
            <Typography className="bold" variant="h6" component="h1">
                Payments
            </Typography>
        </Grid>
    </Grid>
    <Box className="questions" m={5} p={10}>
        <Container>
            <Grid spacing={4} justify="center" container>
                <Grid item>
                    <Box marginBottom={5}>
                        <Typography color="primary" className="bold" variant="h4" component="h1">
                            Is consultation free ?
                        </Typography>
                        <Typography spellCheck component="p">
                            Yes we offer free consultancy services to all
                        </Typography>
                        <Typography component="p">
                            We have agents in the filed willing to answer
                            All your questions
                        </Typography>
                    </Box>
                    <Box>
                        <Typography color="primary" className="bold" variant="h4" component="h1">
                            Do You support Non Profits ?
                        </Typography>
                        <Typography component="p">
                            Yes we offer support for non profit organizations
                        </Typography>
                        <Typography component="p">
                            We also donate 2% every month to non profit organizations
                        </Typography>
                    </Box>
                </Grid>
                <Grid item>
                    <Box marginTop="10px">
                        <Typography color="primary" className="bold" variant="h4" component="h1">
                            How do Refunds work ?
                        </Typography>
                        <Typography component="p">
                            You can issue a partial or full refund through the dashboard
                        </Typography>
                        <Typography component="p">
                            We refund you with a charge and also give you all you paid
                        </Typography>
                        <Typography color="primary" variant="h6" component="p">
                            Learn more
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Box>
    <Box bgcolor="#7ed56f" className="bottom">
        <Container className="bottom__container-1">
            <Grid justify="center" container>
                <Grid item>
                    <Box boxShadow={3} bgcolor="background.paper" m={1} p={5}
                        style={{ width: '30rem', height: '5rem' }}>
                        <Grid container spacing={4}>
                            <Grid item>
                                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24">
                                    <path
                                        d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
                                    </svg>
                            </Grid>
                            <Grid item>
                                <Typography color="primary" className="bold" variant="h6" component="h1">
                                    See our Customers
                                </Typography>
                                Lorem, ipsum dolor sit amet coaaasasasasasasas
                            </Grid>

                        </Grid>
                    </Box>
                </Grid>
                <Grid item>
                    <Box boxShadow={3} bgcolor="background.paper" m={1} p={5}
                        style={{ width: '30rem', height: '5rem' }}>
                        <Grid container spacing={4}>
                            <Grid item>
                                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24">
                                    <path
                                        d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
                                    </svg>
                            </Grid>
                            <Grid item>
                                <Typography color="primary" className="bold" variant="h6" component="h1">
                                    Read more about us
                                </Typography>
                                Lorem, ipsum dolor sit amet coaaasasasasasasas
                            </Grid>

                        </Grid>
                    </Box>

                </Grid>
            </Grid>
        </Container>
        <Container>
            <Grid container>
                <Grid item>
                    <Box m={1} p={5} style={{ width: '30rem', height: '5rem' }}>
                        <Grid container spacing={4}>
                            <Grid item>
                                <Typography style={{marginBottom: '10px'}} className="bold" variant="h4" component="h1">
                                    Ready to get started
                                </Typography>
                                <Typography style={{marginBottom: '10px'}} className="bold" variant="h5" component="h1">
                                    Get in touch, or create an account ?
                                </Typography>

                            </Grid>

                        </Grid>
                    </Box>
                </Grid>
                <Grid item>
                    <Box m={1} p={5} style={{ width: '30rem', height: '5rem' }}>
                        <Grid container spacing={4}>
                            <Grid item>
                                <Button style={{margin: '10px'}} size="large" variant="contained" color="primary">
                                    Create a stripe Account
                                </Button>
                                <Button size="large" variant="contained">
                                    Contact Sales
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>

                </Grid>

            </Grid>
        </Container>

        <Divider />
        <Footer/>
    </Box>




</Box>
)
}

export default landingPage;

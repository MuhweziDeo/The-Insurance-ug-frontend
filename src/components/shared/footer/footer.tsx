import React from 'react';
import { Box, Container, Grid, List, ListItem, ListItemText } from '@material-ui/core';

const footer = () => {
    return(
        <Box p={10} display="flex" flexDirection="row">
        <Container>
            <Grid container spacing={10} justify="space-evenly">
                <Grid item>
                    <List>
                        <ListItem>
                            <ListItemText primary="United States" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="English" />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item>
                    <List>
                        <ListItem>
                            <ListItemText primary="PRODUCTS" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Education Package" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Life Insurance" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Accidents" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Business" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Marriage" />
                        </ListItem>
                    </List>
                </Grid>

                <Grid item>
                    <List>
                        <ListItem>
                            <ListItemText primary="GETTING STARTED" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Support" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Privacy" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Terms" />
                        </ListItem>
                    </List>
                </Grid>

                <Grid item>
                    <List>
                        <ListItem>
                            <ListItemText primary="COMPANY" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="About" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Customers" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Jobs" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Blogs" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Press" />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Container>
    </Box>
    )
}

export default footer;
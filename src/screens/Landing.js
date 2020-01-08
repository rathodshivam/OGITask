import React, { Component } from "react";
// import "../App.css";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header.js";
import Footer from "components/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "@material-ui/core/Button";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "../views/LandingPage/Sections/ProductSection.js";
import TeamSection from "../views/LandingPage/Sections/TeamSection.js";
import WorkSection from "../views/LandingPage/Sections/WorkSection.js";
import TextField from '@material-ui/core/TextField';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CenterFocusStrongOutlined } from "@material-ui/icons";
import CardHeader from "components/Card/CardHeader.js";



const dashboardRoutes = [];


const useStyles = makeStyles(styles);



export default function LandingPage(props) {
    const classes = useStyles();
    const { ...rest } = props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div>
            <Header
                color="transparent"
                routes={dashboardRoutes}
                brand="OGITasks"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
                {...rest} />
            <Parallax filter image={require("assets/img/landing-bg.jpg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={6} sm={6} md={6}>
                            <GridContainer>
                                <GridItem xs={3} sm={3} md={6}>
                                    <h1 className={classes.title}><strong>Overwhelmed?</strong> We can help</h1>
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={3} sm={3} md={6}>
                                    <h4>
                                        OGItask offers a simpler way to stay organized. If you have a crazy job or an ambitious project, we will be your trusty sidekick.
                            </h4>
                                </GridItem>
                            </GridContainer>
                        </GridItem>
                        <GridItem xs={6} sm={6} md={6}>
                            <Card className={classes.card} style={{ marginTop: 100, paddingTop: 20 }}>
                                <CardContent>
                                    <GridContainer>
                                        <GridItem xs={9} sm={9} md={9}>
                                            <TextField
                                                required
                                                size="small"
                                                id="required"
                                                label="Email"
                                                placeholder="Enter Your Email"
                                                style={{ display: "flex" }}

                                            />
                                        </GridItem>
                                        <GridItem xs={3} sm={3} md={3}>
                                            <Button size="medium" color="danger">
                                                Sign Up
                                            </Button>
                                        </GridItem>
                                    </GridContainer>
                                    <h4 style={{ textAlign: "center", fontSize: 15 }}>
                                        Already have an account? &nbsp; &nbsp;
                                    <Button href="/login" size="small" >
                                            Login
                                            </Button>
                                    </h4>
                                </CardContent>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <ProductSection />
                    {/* <TeamSection />
                    <WorkSection /> */}
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );

}
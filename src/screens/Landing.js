import React, { Component, useState } from "react";
//import "../App.css";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header.js";
//import Footer from "components/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "@material-ui/core/Button";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

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
import Footer from "components/Footer/Footer.js";
import API from '../apis/user';

const dashboardRoutes = [];
const useStyles = makeStyles(styles);

export default class LandingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSendCode: false
        }
    }

    render() {
        const Home = (props) => {
            const classes = useStyles();
            const { ...rest } = props;
            let [isSendCode, setSendCode] = useState(false);
            let [email, setEmail] = useState('');
            let [code, setCode] = useState('');

            const login = () => {
                isSendCode = true;
                console.log(email);
                console.log(code);
                console.log(isSendCode);
                API.login({ "username": email, 'password': code, 'grant_type': 'password' }).then(
                    res => {
                        console.log(res);
                    }).catch(
                        error => {
                            console.log(error);
                        });
            }

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
                                <GridItem xs={12} sm={12} md={12}>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={12}>
                                            <h1 className={classes.title}><strong>Overwhelmed?</strong> We can help</h1>
                                        </GridItem>
                                    </GridContainer>
                                    <GridContainer>
                                        <GridItem xs={6} sm={6} md={6}>
                                            <h4>
                                                OGItask offers a simpler way to stay organized. If you have a crazy job or an ambitious project, we will be your trusty sidekick.
                            </h4>
                                        </GridItem>
                                        <GridItem xs={6} sm={6} md={6}>
                                            <Card className={classes.card}>
                                                <CardContent>
                                                    <TextField
                                                        required
                                                        size="small"
                                                        id="required"
                                                        label="Email"
                                                        placeholder="Enter Your Email"
                                                        style={{ display: "flex" }}
                                                        onChange={(e) => { setEmail(e.target.value); setSendCode(false); }}
                                                    />
                                                    <Button size="medium" color="danger"
                                                        onClick={() => { console.log("ravi"); login(); setSendCode(true) }} style={{ 'margin-top': '15px' }} >
                                                        Sign Up
                                                </Button>
                                                    {
                                                        isSendCode ?
                                                            <div style={{ textAlign: 'center' }} >
                                                                <div>
                                                                    <p>We sent a one-time verification code to your email. Please type or paste the code below.</p>
                                                                    <TextField
                                                                        required
                                                                        size="small"
                                                                        id="required"
                                                                        label="Code"
                                                                        variant="outlined"
                                                                        placeholder="Code"
                                                                        style={{ display: "flex" }}
                                                                        style={{ width: '30%', textAlign: 'center' }}
                                                                        onChange={(e) => { setCode(e.target.value); }}

                                                                    />
                                                                </div>
                                                            </div> : <div></div>
                                                    }

                                                    <h4 style={{ textAlign: "center", fontSize: 15 }}>
                                                        Already have an account? &nbsp; &nbsp;
                                                        <Link to="/login">
                                                            <Button size="small" >Login</Button>
                                                        </Link>
                                                    </h4>
                                                </CardContent>
                                            </Card>
                                        </GridItem>
                                    </GridContainer>
                                </GridItem>
                            </GridContainer>
                        </div>
                    </Parallax>
                    <div className={classNames(classes.main, classes.mainRaised)}>
                        <div className={classes.container}>
                            <ProductSection />
                            {/* <TeamSection /
                    <WorkSection /> > */}
                        </div>
                    </div>
                    <Footer />
                </div>
            );

        }

        return (
            <Home />
        )
    }

}
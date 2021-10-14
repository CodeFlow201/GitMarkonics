import React from "react";
import "./nav-head.css";
import "./Navbar.css";
import { GrContact, GrHome, GrLogin } from "react-icons/gr";
import { Button, Spacer, Flex, Stack, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import logo from "../assets/GitMarkonics_white.png";

function NavHeader() {
    return ( <
        Box className = "nav_header"
        p = { 1 } >
        <
        Flex direction = "row " >
        <
        img src = { logo }
        alt = "heading"
        width = "100px"
        className = "logo" / >
        <
        Spacer / >
        <
        Stack direction = "row"
        spacing = { 2 } >
        <
        Link to = "/" >
        <
        Button leftIcon = { < GrHome / > }
        colorScheme = "yellow"
        variant = "solid"
        className = "home" >
        Home <
        /Button> < /
        Link > <
        Link to = "/register" >
        <
        Button leftIcon = { < GrLogin / > }
        colorScheme = "red"
        variant = "solid"
        className = "register" >
        Register <
        /Button> < /
        Link > <
        Link to = "/contactus" >
        <
        Button leftIcon = { < GrContact / > }
        colorScheme = "green"
        variant = "solid"
        className = "contactus" >
        ContactUs <
        /Button> < /
        Link > <
        /Stack> < /
        Flex > <
        /Box>
    );
}

export default NavHeader;
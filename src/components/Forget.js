import React from 'react';
import "./Login.css";
import Navbar from "./Navbar";
import {
    Button,
    Heading,
    HStack,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    VStack,
} from "@chakra-ui/react";
import { RiAccountPinBoxFill } from "react-icons/ri";
import { RiLockPasswordFill } from "react-icons/ri";


export default function Forget() {
    return ( <
        >
        <
        Navbar / >
        <
        div className = "login" >
        <
        div className = "login__container" >
        <
        div className = "login__containerTop" >
        <
        div className = "login__img" > < /div> <
        p > Add a crisp to your bulky documents!! < /p> <
        h4 > Welcome to the website < /h4> < /
        div > <
        div className = "login__containerBottom" >
        <
        VStack className = "input__container"
        w = "65%"
        m = "auto" >
        <
        Heading fontSize = "1.2rem"
        color = "blue.500"
        fontWeight = "semibold"
        py = { 3 } >
        FORGET PASSWORD <
        /Heading> <
        InputGroup w = "95%"
        borderRadius = "full"
        bgColor = "gray.200" >
        <
        InputLeftElement margin = "0 20px"
        pointerEvents = "none"
        children = { <
            RiAccountPinBoxFill color = "#C6C6E8"
            fontSize = "2.1rem" / >
        }
        /> <
        Input required borderRadius = "full"
        type = "tel"
        placeholder = "Email Address"
        paddingLeft = "60px" /
        >
        <
        /InputGroup> <
        InputGroup className = "login__input"
        w = "95%"
        borderRadius = "full"
        bgColor = "gray.200" >
        <
        InputLeftElement margin = "0 20px"
        pointerEvents = "none"
        children = { <
            RiLockPasswordFill color = "#C6C6E8"
            fontSize = "2.1rem" / >
        }
        /> <
        Input type = "tel"
        required borderRadius = "full"
        placeholder = "Password"
        paddingLeft = "60px" /
        >
        <
        /InputGroup> <
        HStack className = "login__btn"
        alignSelf = "flex-end" >
        <
        Button colorScheme = "pink"
        px = "6"
        size = "sm"
        fontWeight = "bold"
        className = "loginBtn" >
        SUBMIT <
        /Button> <
        Link fontSize = "sm"
        textDecoration = "underline"
        color = "blue" >
        <
        a href = "/login" > Remember ? < /a> < /
        Link > <
        /HStack> < /
        VStack > <
        /div> < /
        div > <
        /div> < /
        >
    )
}
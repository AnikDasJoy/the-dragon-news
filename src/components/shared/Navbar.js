"use client"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';
import logo from "@/assets/logo.png"
import { IconButton, Stack } from '@mui/material';

// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';
import Header from './Header';


const navItems = [
    {
        route: "Home",
        pathname: "/",
    },
    {
        route: "Page",
        pathname: "/page",
    },
    {
        route: "Category",
        pathname: "/category",
    },
    {
        route: "About",
        pathname: "/about",
    },
    {
        route: "News",
        pathname: "/news",
    },
    {
        route: "Contact",
        pathname: "/contact",
    }
];

function Navbar() {
    return (
        <>
            <Header></Header>
            <AppBar position="static" className='bg-black'>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Image src={logo} width={100} height={100} alt="logo"></Image>
                        <Box className="w-full text-center">
                            {navItems.map((item) => (
                                <Link key={item} href={item.pathname}>
                                    <Button className="text-white">{item.route} </Button>
                                </Link>
                            ))}
                        </Box>

                        <Box>
                            <Stack direction="row" sx={{
                                "& svg": {
                                    color: "white"
                                }
                            }}>
                                <IconButton>
                                    <FacebookIcon></FacebookIcon>
                                </IconButton>
                                <IconButton>
                                    <FacebookIcon></FacebookIcon>
                                </IconButton>
                                <IconButton>
                                    <FacebookIcon></FacebookIcon>
                                </IconButton>
                                <IconButton>
                                    <FacebookIcon></FacebookIcon>
                                </IconButton>
                            </Stack>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar></>
    );
}
export default Navbar;

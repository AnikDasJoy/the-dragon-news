import { Box, Button, Container, IconButton, Stack, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from "next/link";


const Footer = () => {
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
    return (
        <Box className="bg-black px-2 py-10">
            <Container>
                <Box className="w-full text-center" sx={{
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
                </Box>
                <Box className="w-full text-center">
                    {navItems.map((item) => (
                        <Link key={item} href={item.pathname}>
                            <Button className="text-white">{item.route} </Button>
                        </Link>
                    ))}
                </Box>

                <Typography color="gray" variant="body2" textAlign="center">
                    @02024 The Dragon News. Design by Anik Das.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
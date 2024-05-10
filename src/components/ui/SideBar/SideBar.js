import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import sideBarNews from "@/assets/side-top-news.png";

const SideBar = () => {
    return (
        <Box className="my-5">
            <Card>
                <CardMedia>
                    <Image src={sideBarNews} width={800} alt="top news" />
                </CardMedia>

                <CardContent>
                    <p className='w-[100px] bg-red-600 text-white px-2 my-5 rounded'>Technology</p>
                    <Typography gutterBottom variant="h5" component="div">
                        Bitcoin climbs as Elon Musk Says Tesls Likely to Accept it Again
                    </Typography>
                    <Typography gutterBottom className='my-3'>By Anik Das - May 08 2024</Typography>

                    <Typography variant="body2" color="text.secondary">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default SideBar;
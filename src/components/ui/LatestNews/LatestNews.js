import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import topNews from "@/assets/top-news.png"
import topNews2 from "@/assets/top-news2.png"
import Image from 'next/image';

const LatestNews = () => {
    return (
        <Box className="my-5">
            <Card>
                <CardMedia>
                    <Image src={topNews} width={800} alt="top news" />
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

            <Grid className='mt-5' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Card>
                        <CardMedia>
                            <Image src={topNews2} width={800} alt="top news" />
                        </CardMedia>

                        <CardContent>
                            <p className='w-[100px] bg-red-600 text-white px-2 my-5 rounded'>Technology</p>
                            <Typography gutterBottom >
                                Bitcoin climbs as Elon Musk Says Tesls Likely to Accept it Again
                            </Typography>
                            <Typography gutterBottom className='my-3'>By Anik Das - May 08 2024</Typography>

                            <Typography variant="body2" color="text.secondary">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardMedia>
                            <Image src={topNews2} width={800} alt="top news" />
                        </CardMedia>

                        <CardContent>
                            <p className='w-[100px] bg-red-600 text-white px-2 my-5 rounded'>Technology</p>
                            <Typography gutterBottom >
                                Bitcoin climbs as Elon Musk Says Tesls Likely to Accept it Again
                            </Typography>
                            <Typography gutterBottom className='my-3'>By Anik Das - May 08 2024</Typography>

                            <Typography variant="body2" color="text.secondary">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardMedia>
                            <Image src={topNews2} width={800} alt="top news" />
                        </CardMedia>

                        <CardContent>
                            <p className='w-[100px] bg-red-600 text-white px-2 my-5 rounded'>Technology</p>
                            <Typography gutterBottom >
                                Bitcoin climbs as Elon Musk Says Tesls Likely to Accept it Again
                            </Typography>
                            <Typography gutterBottom className='my-3'>By Anik Das - May 08 2024</Typography>

                            <Typography variant="body2" color="text.secondary">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardMedia>
                            <Image src={topNews2} width={800} alt="top news" />
                        </CardMedia>

                        <CardContent>
                            <p className='w-[100px] bg-red-600 text-white px-2 my-5 rounded'>Technology</p>
                            <Typography gutterBottom >
                                Bitcoin climbs as Elon Musk Says Tesls Likely to Accept it Again
                            </Typography>
                            <Typography gutterBottom className='my-3'>By Anik Das - May 08 2024</Typography>

                            <Typography variant="body2" color="text.secondary">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default LatestNews;
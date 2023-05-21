import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import {
    Box,
    Heading,
    Text,
    Stack,
    Flex,
    Grid,
    GridItem,
    Button,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TripCard from "@/components/TripCard";
import Logo from "/public/images/logo.png";
import Nugget from "/public/images/nugget.png";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Itinerary({
    dbItinerary,
    error,
}: {
    dbItinerary: any;
    error: any;
}) {
    const [itinerary] = useState(dbItinerary);
    const [loading, setLoading] = useState(true);

    const router = useRouter();
    const itineraryId = router.query.itinerary;

    useEffect(() => {
        console.log(itinerary);

        setLoading(false);
    }, [loading]);

    return (
        <>
            <Head>
                <title>Smart Travel Buddy</title>
                <meta name="description" content="Smart Travel Buddy" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Flex className={styles.header} justifyContent="space-between">
                <Flex className={styles.headerleft}>
                    <Image className={styles.logo} src={Logo} alt="logo" />
                </Flex>
                <Flex className={styles.headerright}>
                    <Image className={styles.logo} src={Nugget} alt="nugget" />
                </Flex>
            </Flex>

            <Box>
                <Box>
                    <Text>Back</Text>
                </Box>
                <Box display="flex" flexDirection="column">
                    <Text>Your itinerary for</Text>
                    <Box display="flex" justifyContent="space-between">
                        <Text>{itinerary.date}</Text>
                        <Button>Share Itinerary</Button>
                    </Box>
                </Box>
                {/* {itinerary.map((activity: any) => (
                    <Box>
                        <Text>{activity.estimatedStartTime}</Text>
                        <Box>
                            <Box>
                                <Image
                                    src={activity.photo}
                                    alt="photo of activity"
                                />
                            </Box>
                            <Box>
                                <Text>{activity.name}</Text>
                                <Text>{activity.description}</Text>
                                <Box>
                                    <Button>Learn more</Button>
                                    <Button>Suggest a new activity</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                ))} */}
            </Box>
        </>
    );
}

export async function getServerSideProps(context: any) {
    const { itinerary } = context.params;

    try {
        const response = await fetch(
            `http://localhost:3001/trips/${itinerary}`
        );
        const data = await response.json();

        return {
            props: {
                dbItinerary: data,
            },
        };
    } catch (err) {
        console.log(err);

        return {
            props: {
                error: true,
            },
        };
    }
}

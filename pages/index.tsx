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
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TripCard from "@/components/TripCard";
import Logo from "../images/cmd-f.png";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ dbUser, error }: { dbUser: any; error: any }) {
    const [user] = useState(dbUser);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
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
                    <Image className={styles.logo} src={Logo} alt="cmd-f" />
                </Flex>
                <Flex className={styles.headerright}>
                    <Image className={styles.logo} src={Logo} alt="cmd-f" />
                </Flex>
            </Flex>

            <Box
                backgroundImage="url('/images/Background image.png')"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
            ></Box>

            <main className={`${styles.main} ${inter.className}`}>
                <div className={styles.grid}>
                    <Flex direction="column" minWidth="max-content">
                        <Heading as="h1" size="4xl" noOfLines={1}>
                            Hello, {user.firstName}!
                        </Heading>
                        <Tabs
                            className={styles.tabs}
                            variant="soft-rounded"
                            colorScheme="blue"
                        >
                            <TabList>
                                <Tab>Upcoming Plans</Tab>
                                <Tab>Past Plans</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <TripCard></TripCard>
                                </TabPanel>
                                <TabPanel>
                                    <p>add other component here</p>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </Flex>
                </div>
            </main>
        </>
    );
}

export async function getServerSideProps(context: any) {
    // const { itinerary } = context.params;
    const userId = "AzX1vIPNZ3k21wXtfRQD";

    try {
        const response = await fetch(`http://localhost:3001/${userId}`);
        const data = await response.json();

        return {
            props: {
                dbUser: data,
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

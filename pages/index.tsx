import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { Heading, Text, Stack, Flex, Grid, GridItem } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TripCard from "@/components/TripCard";
import Logo from "../images/cmd-f.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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

			<main className={`${styles.main} ${inter.className}`}>
				<div className={styles.grid}>
					<Flex direction="column" minWidth="max-content">
						<Heading as="h1" size="4xl" noOfLines={1}>
							Hello, Name!
						</Heading>
						<Tabs variant="soft-rounded" colorScheme="blue">
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

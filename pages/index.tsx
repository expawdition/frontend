import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Heading, Text, Stack, Flex, Image } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TripCard from "@/components/TripCard";
import Logo from "frontend/images/cmd-f.png";

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
			<div className={styles.header}>
				<Image src="frontend/images/cmd-f" alt="cmd-f" />
			</div>
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

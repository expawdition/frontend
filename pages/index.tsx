import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Text, Stack, Flex } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

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
			<main className={`${styles.main} ${inter.className}`}>
				<div className={styles.grid}>
					<Flex direction="column" minWidth="max-content">
						<Text fontSize="6xl">Hello, Name!</Text>
						<Tabs variant="soft-rounded" colorScheme="blue">
							<TabList>
								<Tab>Upcoming Plans</Tab>
								<Tab>Past Plans</Tab>
							</TabList>
							<TabPanels>
								<TabPanel>
									<p>add component here</p>
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

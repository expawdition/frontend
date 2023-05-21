import Head from "next/head";
import { Inter, Ultra } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import {
	Box,
	Button,
	Center,
	Heading,
	Text,
	Stack,
	Flex,
	Grid,
	GridItem,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TripCard from "@/components/TripCard";
import TicketCard from "@/components/TicketCard";
import Logo from "/public/images/logo.png";
import Raccoon from "../public/images/home-raccoon.png";

const inter = Inter({ subsets: ["latin"] });
// const ultra = Ultra({ subsets: ["latin"] });

export default function Home() {
	const handleClickNew = () => {
		window.location.href = "http://localhost:3000/planner";
	};

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
					<Image src={Logo} alt="logo" />
				</Flex>
				<Flex
					className={styles.headerright}
					borderRadius="100px"
					// borderWidth="1px"
					borderColor="#1a365d"
					backgroundColor="white"
				>
					<Image
						src={Logo}
						alt="profile picture"
						width={34}
						height={34}
					/>
				</Flex>
			</Flex>

			<Center
				backgroundImage="url('/images/Background.png')"
				backgroundSize="cover"
				backgroundPosition="center"
				height="95vh"
			>
				<Flex
					direction="row"
					width="1080px"
					justifyContent="space-between"
				>
					<Box paddingTop="100px">
						<Text
							fontSize="3xl"
							lineHeight="9"
							fontWeight="bold"
							color="blue.900"
							marginBottom="16px"
						>
							{" "}
							Hello, Alex!
						</Text>
						<Text
							fontSize="5xl"
							lineHeight="1"
							fontWeight="extrabold"
							color="blue.900"
							marginBottom="16px"
						>
							{" "}
							Your next adventure awaits!
						</Text>
						<Button colorScheme="blue" onClick={handleClickNew}>
							Plan a new trip
						</Button>
						<Image src={Raccoon} alt="raccoon mascot" />
					</Box>

					<TicketCard></TicketCard>
				</Flex>
			</Center>

			<main className={`${styles.main} ${inter.className}`}>
				<div className={styles.grid}>
					<Flex direction="column" minWidth="max-content">
						<Tabs
							className={styles.tabs}
							variant="soft-rounded"
							colorScheme="blue"
							marginBottom="24px"
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

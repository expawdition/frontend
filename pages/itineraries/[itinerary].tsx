import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { LinkIcon } from "@chakra-ui/icons";
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

function EventCard(props: any) {
	return (
		<Flex direction="column" marginBottom="40px">
			<Flex direction="row">
				<Image
					src={props.photo}
					alt={props.name}
					width={238}
					height={144}
				></Image>
				<Flex direction="column" marginLeft="20px">
					<Text fontSize="2xl" lineHeight="8" fontWeight="bold">
						{props.name}
					</Text>
					<Text fontSize="lg" lineHeight="7" fontWeight="normal">
						{props.description}
					</Text>
					<Flex direction="row">
						<Button
							className={styles.stepnextbutton}
							colorScheme="blue"
						>
							Learn more
						</Button>
						<Button>Suggest a new activity</Button>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
}

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
	}, [itinerary, loading]);

	return (
		<>
			<Flex
				direction="column"
				backgroundImage="url('/images/Background.png')"
				backgroundSize="cover"
			>
				<Flex className={styles.header} justifyContent="space-between">
					<Flex className={styles.headerleft}>
						<Image className={styles.logo} src={Logo} alt="logo" />
					</Flex>
					<Flex className={styles.headerright}>
						<Image className={styles.logo} src={Logo} alt="logo" />
					</Flex>
				</Flex>
				<main className={`${styles.itin} ${inter.className}`}>
					<Flex
						// className={styles.largeticketcard}
						width={1080}
						direction="column"
						backgroundImage="url('/images/large-ticket.png')"
						paddingTop={"70px"}
						px={"32px"}
					>
						{/* <Flex direction="row"> */}
						<Flex direction="column" marginRight="400px">
							<Text
								fontSize="md"
								lineHeight="6"
								fontWeight="normal"
							>
								Your itinerary for
							</Text>
							<Text
								fontSize="4xl"
								lineHeight="10"
								fontWeight="bold"
							>
								{itinerary.date}
							</Text>
							<Button
								variant="outline"
								leftIcon={<LinkIcon />}
								marginTop="5px"
								marginBottom="10px"
								width="200px"
							>
								{" "}
								Share Itinerary
							</Button>
						</Flex>

            <Flex className={styles.header} justifyContent="space-between">
                <Flex className={styles.headerleft}>
                    <Image className={styles.logo} src={Logo} alt="logo" />
                </Flex>
                <Flex className={styles.headerright}>
                    <Image className={styles.logo} src={Nugget} alt="nugget" />
                </Flex>
            </Flex>

						<Flex
							direction="column"
							backgroundColor="white"
							marginTop="100px"
						>
							{itinerary.itineraryEvents.map(
								(activity: any, index: any) => (
									<EventCard
										key={index}
										photo={activity.photo}
										name={activity.name}
										description={activity.description}
									/>
								)
							)}
						</Flex>
					</Flex>
				</main>
			</Flex>
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

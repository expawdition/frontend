import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { Heading, Text, Stack, Flex, Button, Box } from "@chakra-ui/react";
import Logo from "../images/cmd-f.png";
import { theme } from "../pages/_app";

function Activity(props: any) {
	return (
		<>
			<Flex className={styles.activitycard} direction="column">
				<Image
					className={styles.activityimage}
					src={props.pictureURL}
					alt={props.place}
					width={238}
					height={144}
				/>
				<Text fontSize="sm" lineHeight="5" fontWeight="bold">
					{props.place}
				</Text>
				<Text fontSize="xs" lineHeight="4" fontWeight="normal">
					{props.description}
				</Text>
			</Flex>
		</>
	);
}

export default function TripCard() {
	return (
		<>
			<Flex className={styles.tripcard} direction="column">
				<Flex
					className={styles.tripcardheader}
					direction="row"
					justifyContent="space-between"
				>
					<Flex className={styles.tripcardwhen} direction="column">
						<Text fontSize="2xl" lineHeight="8" fontWeight="bold">
							May 20, 2023
						</Text>
						<Text fontSize="md" lineHeight="6" fontWeight="medium">
							9:00 AM - 6:00 PM
						</Text>
					</Flex>
					<Flex float="right">
						<Button
							className={styles.shareitenarybutton}
							colorScheme="#ffffff"
							color="#1a365d"
						>
							Share Itinerary
						</Button>
						<Button
							className={styles.seedetailsbutton}
							colorScheme="seeDetailsButtonColor"
							color="#ffffff"
						>
							See Details
						</Button>
					</Flex>
				</Flex>
				<Flex direction="row">
					<Activity
						// pictureURL="https://images.unsplash.com/photo-1627328778996-e8582968a0f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
						place="Vancouver Aquarium"
						description="Small description of the place in question. These
					descriptions will be pulled from Google."
					></Activity>
					<Activity
						// pictureURL="https://loremflickr.com/640/360"
						place="Vancouver Aquarium"
						description="Small description of the place in question. These
					descriptions will be pulled from Google."
					></Activity>
					<Activity
						// pictureURL="https://loremflickr.com/640/360"
						place="Vancouver Aquarium"
						description="Small description of the place in question. These
					descriptions will be pulled from Google."
					></Activity>
					<Activity
						// pictureURL="https://loremflickr.com/640/360"
						place="Vancouver Aquarium"
						description="Small description of the place in question. These
					descriptions will be pulled from Google."
					></Activity>
				</Flex>
			</Flex>
		</>
	);
}

import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { Heading, Text, Stack, Flex, Button, Box } from "@chakra-ui/react";
import Logo from "../images/cmd-f.png";

function Activity(props: any) {
	return (
		<>
			<Flex className={styles.activitycard} direction="column">
				<Image
					className={styles.activityimage}
					src={props.pictureURL}
					alt={props.place}
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
				<Flex className={styles.tripcardheader} direction="row">
					<Flex className={styles.tripcardwhen} direction="column">
						<Text fontSize="2xl" lineHeight="8" fontWeight="bold">
							May 20, 2023
						</Text>
						<Text fontSize="md" lineHeight="6" fontWeight="medium">
							9:00 AM - 6:00 PM
						</Text>
					</Flex>
					<Button>share link</Button>
					<Button>see details</Button>
				</Flex>
				<Flex direction="row">
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

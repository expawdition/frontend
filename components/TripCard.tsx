import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import { Heading, Text, Stack, Flex, Button, Box } from '@chakra-ui/react';
import { theme } from '../pages/_app';
import { ItineraryEvent } from '@/pages';
import { useRouter } from 'next/router';

function Activity(props: any) {
	return (
		<>
			<Flex className={styles.activitycard} direction='column'>
				<Image className={styles.activityimage} src={props.pictureURL} alt={props.place} width={238} height={144} />
				<Text fontSize='sm' lineHeight='5' fontWeight='bold' mt='12px'>
					{props.place}
				</Text>
				<Text fontSize='xs' lineHeight='4' fontWeight='normal'>
					{props.description}
				</Text>
			</Flex>
		</>
	);
}

export default function TripCard({
	date,
	itineraryEvents,
	id,
}: {
	date: string;
	itineraryEvents: ItineraryEvent[];
	id: string;
}) {
	const router = useRouter();

	return (
		<>
			<Flex className={styles.tripcard} direction='column' mt='30px'>
				<Flex className={styles.tripcardheader} direction='row' justifyContent='space-between'>
					<Flex className={styles.tripcardwhen} direction='column'>
						<Text fontSize='2xl' lineHeight='8' fontWeight='bold'>
							{date}
						</Text>
						<Text fontSize='md' lineHeight='6' fontWeight='medium'>
							{itineraryEvents[0].estimatedStartTime}
						</Text>
					</Flex>
					<Flex float='right'>
						<Button className={styles.shareitenarybutton} colorScheme='#ffffff' color='#1a365d'>
							Share Itinerary
						</Button>
						<Button
							className={styles.seedetailsbutton}
							colorScheme='seeDetailsButtonColor'
							color='#ffffff'
							id={`event-${id}`}
							onClick={(e) => {
								let idStr = e.currentTarget.id;
								let id = idStr.slice(6);
								router.push(`/itineraries/${id}`);
							}}
						>
							See Details
						</Button>
					</Flex>
				</Flex>
				<Flex direction='row'>
					{itineraryEvents.map((activity, index) => (
						<Activity
							key={index}
							pictureURL={activity.photo}
							place={activity.name}
							description={activity.description}
						/>
					))}
					{/* <Activity
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
					></Activity> */}
				</Flex>
			</Flex>
		</>
	);
}

import { useState } from 'react';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import { Heading, Text, Stack, Flex, Button, Box } from '@chakra-ui/react';
import { theme } from '../pages/_app';
import { ItineraryEvent } from '@/pages';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

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
	const [isCopied, setIsCopied] = useState(false);
	const router = useRouter();

	const handleShareClick = async () => {
		try {
			await navigator.clipboard.writeText(`https://expawdition.vercel.app/itineraries/${id}`);
			setIsCopied(true);
			setTimeout(() => setIsCopied(false), 2000);
		} catch (err) {
			console.error('Failed to copy: ', err);
		}
	};

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
						<Button
							className={styles.shareitinerarybutton}
							colorScheme='#ffffff'
							color='#1a365d'
							onClick={handleShareClick}
						>
							Share Itinerary
						</Button>

						{isCopied && (
							<MotionBox
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 50 }}
								transition={{ duration: 0.5 }}
								position='fixed'
								bottom='0'
								right='0'
								m='16px'
								p='16px'
								fontSize='lg'
								bg='green.500'
								color='white'
								borderRadius='md'
							>
								URL copied to clipboard!
							</MotionBox>
						)}

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
				</Flex>
			</Flex>
		</>
	);
}

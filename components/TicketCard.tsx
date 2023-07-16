import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import { Heading, Text, Stack, Flex, Button, Box } from '@chakra-ui/react';
import { theme } from '../pages/_app';
import { LinkIcon } from '@chakra-ui/icons';
import { ItineraryEvent } from '@/pages';
import { useRouter } from 'next/router';

export default function TicketCard({
	date,
	itineraryEvent,
	id,
}: {
	date: string;
	itineraryEvent: ItineraryEvent;
	id: string;
}) {
	console.log(date);
	console.log(itineraryEvent);

	const router = useRouter();

	return (
		<>
			<Flex
				className={styles.ticketcard}
				direction='column'
				backgroundImage="url('/images/Ticket.svg')"
				paddingTop={'32px'}
				px={'32px'}
			>
				<Text fontSize='md' lineHeight='6' fontWeight='normal'>
					Coming up next
				</Text>
				<Text fontSize='4xl' lineHeight='10' fontWeight='bold'>
					{date}
				</Text>
				<Text fontSize='2xl' lineHeight='8' fontWeight='normal' marginBottom='64px'>
					{itineraryEvent.estimatedStartTime}
				</Text>

				<Box display='flex' justifyContent='center' alignItems='center'>
					<Image
						// src=""
						src={itineraryEvent.photo}
						width={350}
						height={200}
						alt='picture should go here'
					></Image>
				</Box>
				<Text fontSize='2xl' lineHeight='8' fontWeight='bold' mt='12px'>
					{itineraryEvent.name}
				</Text>
				<Text fontSize='md' lineHeight='6' fontWeight='medium' mt='12px' mb='20px'>
					{itineraryEvent.description}
				</Text>
				<Stack direction='row' spacing='16px'>
					<Button
						colorScheme='blue'
						id={`first-event-${id}`}
						onClick={(e) => {
							let idStr = e.currentTarget.id;
							let id = idStr.slice(12);
							router.push(`/itineraries/${id}`);
						}}
					>
						See Details
					</Button>
					<Button variant='outline' leftIcon={<LinkIcon />}>
						{' '}
						Share Itinerary
					</Button>
				</Stack>
			</Flex>
		</>
	);
}

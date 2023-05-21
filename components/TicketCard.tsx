import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { Heading, Text, Stack, Flex, Button, Box } from "@chakra-ui/react";
import { theme } from "../pages/_app";
import { LinkIcon } from "@chakra-ui/icons";

export default function TicketCard() {
    return (
        <>
        <Flex className={styles.ticketcard} direction="column" backgroundImage="url('/images/Ticket.svg')" paddingTop={"32px"} px={"32px"}> 
            <Text fontSize="md" lineHeight="6" fontWeight="normal">
                    Coming up next
                </Text>
            <Text fontSize="4xl" lineHeight="10" fontWeight="bold">
                date placeholder
            </Text>
            <Text fontSize="2xl" lineHeight="8" fontWeight="normal" marginBottom="64px">
                    time placeholder 
                </Text>

            <Image src="" width={430} height={246} alt="picture should go here"></Image>
            <Text fontSize="2xl" lineHeight="8" fontWeight="bold">
                    activity name placeholder
                </Text>
            <Text fontSize="md" lineHeight="6" fontWeight="medium" marginBottom="32px">
                activity description placeholder
            </Text>
            <Stack direction="row" spacing="16px">
                    <Button colorScheme="blue">See Details</Button>
                    <Button variant="outline" leftIcon={<LinkIcon/>}> Share Itinerary</Button>
            </Stack>
        </Flex>
        </>
    )
}
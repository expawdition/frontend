import styles from "@/styles/Home.module.css";
import {
	Text,
	Select,
	Flex,
	Button,
	AspectRatio,
	Input,
	InputGroup,
	InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import StepCardLabel from "./StepCardLabel";

export default function StepFour() {
	return (
		<>
			<Flex className={styles.steponecard} direction="row">
				<Flex className={styles.steponecardfields} direction="column">
					<Text
						className={styles.stepcardtitle}
						fontSize="xl"
						lineHeight="7"
						fontWeight="bold"
					>
						4. Must-Do Activity
					</Text>
					<StepCardLabel text="Name an activity, place, or restaurant that you’d like to include in your itinerary." />
                    <StepCardLabel text = "If you don’t have anything in mind, move on to the next step."></StepCardLabel>
					<Input
						placeholder="Name a place, restaurant, or establishment"
						size="sm"
						marginBottom="24px"
					/>
					
					<Flex direction="row">
						<Button className={styles.stepnextbutton}>Next</Button>
						<Button>Cancel</Button>
					</Flex>
				</Flex>
			</Flex>
		</>
	);
}

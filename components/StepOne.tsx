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

export default function StepOne() {
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
						1. When and Where
					</Text>
					<StepCardLabel text="When are you planning to have your outing?" />
					<Input
						placeholder="Select Date"
						size="sm"
						type="date"
						marginBottom="24px"
					/>
					<Flex
						className={styles.steponetimediv}
						direction="row"
						marginBottom="24px"
					>
						<Flex direction="column" marginRight="16px">
							<StepCardLabel text="Start time" />
							<Input
								placeholder="Select Start Time"
								size="sm"
								width="141px"
								type="time"
							/>
						</Flex>
						<Flex direction="column">
							<StepCardLabel text="End time" />
							<Input
								placeholder="Select End Time"
								size="sm"
								width="141px"
								type="time"
							/>
						</Flex>
					</Flex>
					<StepCardLabel text="How are you getting around?" />
					<Select
						placeholder="Select a mode of transportation"
						marginBottom="24px"
						size="sm"
					>
						<option value="car">Car</option>
						<option value="transit">Transit</option>
						<option value="walk">Walk</option>
						<option value="bike">Bike</option>
					</Select>
					<StepCardLabel text="Where do you want to explore?" />
					<InputGroup marginBottom="24px">
						<InputLeftElement pointerEvents="none">
							<SearchIcon color="gray.300" />
						</InputLeftElement>
						<Input
							size="sm"
							placeholder="Search for a neighbourhood or city"
						/>
					</InputGroup>
					<Flex direction="row">
						<Button className={styles.stepnextbutton}>Next</Button>
						<Button>Cancel</Button>
					</Flex>
				</Flex>
				<AspectRatio ratio={16 / 9} flex="1 1 auto">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng" />
				</AspectRatio>
			</Flex>
		</>
	);
}

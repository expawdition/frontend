import styles from "@/styles/Home.module.css";
import {
	Text,
	Flex,
	Button,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
	Radio,
	RadioGroup,
	Stack,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import StepCardLabel from "./StepCardLabel";

interface StepTwoProps {
	form: {
		numberOfPeople: number;
		groupType: string;
	};
	onFormChange: (updatedForm: {
		numberOfPeople: number;
		groupType: string;
	}) => void;
}

const StepTwo: React.FC<StepTwoProps> = ({ form, onFormChange }) => {
	const handleInputChange = (
		fieldName: keyof typeof form,
		value: string
	): void => {
		const updatedForm = {
			...form,
			[fieldName]: value,
		};
		onFormChange(updatedForm);
	};

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
						{"2. Who's Going"}
					</Text>
					<StepCardLabel text="How many people are in your group?" />
					<NumberInput
						step={1}
						defaultValue={1}
						min={1}
						max={30}
						size="sm"
						value={form.numberOfPeople}
						onChange={(value) =>
							handleInputChange("numberOfPeople", value)
						}
					>
						<NumberInputField />
						<NumberInputStepper>
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
					<StepCardLabel text="What type of group are you going with?" />
					<RadioGroup
						defaultValue="1"
						marginBottom="24px"
						value={form.groupType}
						onChange={(value) =>
							handleInputChange("groupType", value)
						}
					>
						<Stack spacing={0} direction="column">
							<Radio size="md" value="friends">
								{"Friends"}
							</Radio>
							<Radio size="md" value="family">
								{"Family"}
							</Radio>
							<Radio size="md" value="date">
								{"Significant Other"}
							</Radio>
							<Radio size="md" value="coworker">
								{"Coworkers"}
							</Radio>
							<Radio size="md" value="solo adventure">
								{"I'm going on a solo adventure!"}
							</Radio>
						</Stack>
					</RadioGroup>
					<Flex direction="row">
						<Button className={styles.stepnextbutton}>Next</Button>
						<Button>Cancel</Button>
					</Flex>
				</Flex>
			</Flex>
		</>
	);
};

export default StepTwo;

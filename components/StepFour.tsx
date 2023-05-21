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
import StepCardLabel from "./StepCardLabel";

interface StepFourProps {
	form: {
		mustDo: string;
	};
	onFormChange: (updatedForm: { mustDo: string }) => void;
	onNextStep: () => void;
	onPreviousStep: () => void;
}

const StepFour: React.FC<StepFourProps> = ({
	form,
	onFormChange,
	onNextStep,
	onPreviousStep,
}) => {
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
	const handleNext = () => {
		onNextStep();
	};

	const handleBack = () => {
		onPreviousStep();
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
						4. Must-Do Activity
					</Text>
					<StepCardLabel text="Name an activity, place, or restaurant that you’d like to include in your itinerary." />
					<StepCardLabel text="If you don’t have anything in mind, move on to the next step."></StepCardLabel>
					<Input
						placeholder="Name a place, restaurant, or establishment"
						size="sm"
						marginBottom="24px"
						value={form.mustDo}
						onChange={(e) =>
							handleInputChange("mustDo", e.target.value)
						}
					/>

					<Flex direction="row">
						<Button
							className={styles.stepnextbutton}
							onClick={onNextStep}
						>
							Next
						</Button>
						<Button onClick={onPreviousStep}>Back</Button>
					</Flex>
				</Flex>
			</Flex>
		</>
	);
};

export default StepFour;

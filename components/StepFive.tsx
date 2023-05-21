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

function CardFiveSubtitle(props: any) {
	return (
		<>
			<Text
				className={styles.stepfivecardsubtitle}
				fontSize="md"
				lineHeight="6"
				fontWeight="bold"
			>
				{props.text}
			</Text>
		</>
	);
}

function FieldText(props: any) {
	return (
		<>
			<Text
				className={styles.stepfivecardsubtitle}
				fontSize="sm"
				lineHeight="5"
				fontWeight="medium"
				textAlign="right"
				marginRight="16px"
				marginBottom="4px"
			>
				{props.text}
			</Text>
		</>
	);
}

function ValueText(props: any) {
	return (
		<>
			<Text
				className={styles.stepfivecardsubtitle}
				fontSize="sm"
				lineHeight="5"
				fontWeight="medium"
				marginBottom="4px"
			>
				{props.text}
			</Text>
		</>
	);
}

interface StepFiveProps {
	form: {
		date: string;
		startTime: string;
		endTime: string;
		transportationMethod: string;
		location: string;
		numberOfPeople: number;
		groupType: string;
		budget: string;
		wheelChairFriendly: boolean;
		mustDo: string;
	};
	onFormChange: (updatedForm: {
		date: string;
		startTime: string;
		endTime: string;
		transportationMethod: string;
		location: string;
		numberOfPeople: number;
		groupType: string;
		budget: string;
		wheelChairFriendly: boolean;
		mustDo: string;
	}) => void;
	onPreviousStep: () => void;
}

const StepFive: React.FC<StepFiveProps> = ({
	form,
	onFormChange,
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
						{"5. Review Your Preferences"}
					</Text>
					<Flex direction="row">
						<Flex direction="column" width="466px">
							<CardFiveSubtitle text="When and Where"></CardFiveSubtitle>
							<Flex direction="row" marginBottom="40px">
								<Flex direction="column">
									<FieldText text="Date:"></FieldText>
									<FieldText text="Time:"></FieldText>
									<FieldText text="Transportation:"></FieldText>
									<FieldText text="Destination:"></FieldText>
								</Flex>
								<Flex direction="column">
									<ValueText text={form.date}></ValueText>
									<ValueText
										text={`${form.startTime} - ${form.endTime}`}
									></ValueText>
									<ValueText
										text={form.transportationMethod}
									></ValueText>
									<ValueText text={form.location}></ValueText>
								</Flex>
							</Flex>
							<CardFiveSubtitle text="Preferences"></CardFiveSubtitle>
							<Flex direction="row" marginBottom="40px">
								<Flex direction="column">
									<FieldText text="Budget:"></FieldText>
									<FieldText text="Accessibility:"></FieldText>
									<FieldText text="Dietary:"></FieldText>
								</Flex>
								<Flex direction="column">
									<ValueText text={form.budget}></ValueText>
									<ValueText
										text={
											form.wheelChairFriendly
												? "Wheelchair-friendly"
												: ""
										}
									/>
									<ValueText text="None"></ValueText>
								</Flex>
							</Flex>
						</Flex>
						<Flex direction="column">
							<CardFiveSubtitle text="Who's Going"></CardFiveSubtitle>
							<Flex direction="row" marginBottom="40px">
								<Flex direction="column">
									<FieldText text="Group Size:"></FieldText>
									<FieldText text="Group Type:"></FieldText>
								</Flex>
								<Flex direction="column" height="92px">
									<ValueText
										text={form.numberOfPeople}
									></ValueText>
									<ValueText
										text={form.groupType}
									></ValueText>
								</Flex>
							</Flex>
							<CardFiveSubtitle text="Must-Do Activity"></CardFiveSubtitle>
							<Flex direction="row" marginBottom="40px">
								<Flex direction="column">
									<FieldText text="Activity:"></FieldText>
								</Flex>
								<Flex direction="column">
									<ValueText text={form.mustDo}></ValueText>
								</Flex>
							</Flex>
						</Flex>

						<Flex direction="column"></Flex>
					</Flex>
					<Flex direction="row">
						<Button
							className={styles.stepnextbutton}
							// onClick={onNextStep}
						>
							Submit
						</Button>
						<Button onClick={onPreviousStep}>Back</Button>
					</Flex>
				</Flex>
			</Flex>
		</>
	);
};

export default StepFive;

import styles from "@/styles/Home.module.css";
import { Heading, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import StepOne from "@/components/StepOne";
import StepTwo from "@/components/StepTwo";
import StepThree from "@/components/StepThree";
import StepFour from "@/components/StepFour";
import StepFive from "@/components/StepFive";
import Raccoon from "../public/images/planning-raccoon.png";

const inter = Inter({ subsets: ["latin"] });

function WizardLine() {
	return <Text className={styles.wizardtext}>{"————"}</Text>;
}

function WizardTextOn(props: any) {
	return (
		<Text
			fontSize="md"
			lineHeight="6"
			fontWeight="semibold"
			textColor="#3182ce"
			className={styles.wizardtext}
		>
			{props.text}
		</Text>
	);
}

function WizardTextOff(props: any) {
	return (
		<Text
			fontSize="md"
			lineHeight="6"
			fontWeight="semibold"
			textColor="#000000"
			className={styles.wizardtext}
		>
			{props.text}
		</Text>
	);
}

function CircleOn(props: any) {
	return (
		<div className={styles.circleon}>
			<Text
				fontSize="md"
				lineHeight="6"
				fontWeight="semibold"
				className={styles.circletext}
			>
				{props.num}
			</Text>
		</div>
	);
}

function CircleOff(props: any) {
	return (
		<div className={styles.circleoff}>
			<Text
				fontSize="md"
				lineHeight="6"
				fontWeight="semibold"
				className={styles.circletext}
			>
				{props.num}
			</Text>
		</div>
	);
}

export default function Planner() {
	const [stepState, setStepState] = useState(1);

	const [form, setForm] = useState({
		date: "",
		startTime: "",
		endTime: "",
		numberOfPeople: 1,
		groupType: "",
		budget: "",
		transportationMethod: "",
		location: "",
		mustDo: "",
		wheelChairFriendly: false,
	});

	const handleFormChange = (updatedForm: any) => {
		setForm(updatedForm);
	};

	const handleNextStep = () => {
		setStepState(stepState + 1);
	};

	const handlePreviousStep = () => {
		setStepState(stepState - 1);
	};

	let stepComponent;
	let wizardComponent;
	switch (stepState) {
		case 1:
			stepComponent = (
				<StepOne
					form={form}
					onFormChange={handleFormChange}
					onNextStep={handleNextStep}
				/>
			);
			wizardComponent = (
				<Flex direction="row" className={styles.wizard}>
					<CircleOn num="1"></CircleOn>
					<WizardTextOn text="When and Where" />
					<WizardLine></WizardLine>
					<CircleOff num="2"></CircleOff>
					<WizardTextOff text="Who's Going" />
					<WizardLine></WizardLine>
					<CircleOff num="3"></CircleOff>
					<WizardTextOff text="Preferences" />
					<WizardLine></WizardLine>
					<CircleOff num="4"></CircleOff>
					<WizardTextOff text="Must-Do Activity" />
					<WizardLine></WizardLine>
					<CircleOff num="5"></CircleOff>
					<WizardTextOff text="Review" />
				</Flex>
			);
			break;
		case 2:
			stepComponent = (
				<StepTwo
					form={form}
					onFormChange={handleFormChange}
					onNextStep={handleNextStep}
					onPreviousStep={handlePreviousStep}
				/>
			);
			wizardComponent = (
				<Flex direction="row" className={styles.wizard}>
					<CircleOn num="1"></CircleOn>
					<WizardTextOn text="When and Where" />
					<WizardLine></WizardLine>
					<CircleOn num="2"></CircleOn>
					<WizardTextOn text="Who's Going" />
					<WizardLine></WizardLine>
					<CircleOff num="3"></CircleOff>
					<WizardTextOff text="Preferences" />
					<WizardLine></WizardLine>
					<CircleOff num="4"></CircleOff>
					<WizardTextOff text="Must-Do Activity" />
					<WizardLine></WizardLine>
					<CircleOff num="5"></CircleOff>
					<WizardTextOff text="Review" />
				</Flex>
			);
			break;
		case 3:
			stepComponent = (
				<StepThree
					form={form}
					onFormChange={handleFormChange}
					onNextStep={handleNextStep}
					onPreviousStep={handlePreviousStep}
				/>
			);
			wizardComponent = (
				<Flex direction="row" className={styles.wizard}>
					<CircleOn num="1"></CircleOn>
					<WizardTextOn text="When and Where" />
					<WizardLine></WizardLine>
					<CircleOn num="2"></CircleOn>
					<WizardTextOn text="Who's Going" />
					<WizardLine></WizardLine>
					<CircleOn num="3"></CircleOn>
					<WizardTextOn text="Preferences" />
					<WizardLine></WizardLine>
					<CircleOff num="4"></CircleOff>
					<WizardTextOff text="Must-Do Activity" />
					<WizardLine></WizardLine>
					<CircleOff num="5"></CircleOff>
					<WizardTextOff text="Review" />
				</Flex>
			);
			break;
		case 4:
			stepComponent = (
				<StepFour
					form={form}
					onFormChange={handleFormChange}
					onNextStep={handleNextStep}
					onPreviousStep={handlePreviousStep}
				/>
			);
			wizardComponent = (
				<Flex direction="row" className={styles.wizard}>
					<CircleOn num="1"></CircleOn>
					<WizardTextOn text="When and Where" />
					<WizardLine></WizardLine>
					<CircleOn num="2"></CircleOn>
					<WizardTextOn text="Who's Going" />
					<WizardLine></WizardLine>
					<CircleOn num="3"></CircleOn>
					<WizardTextOn text="Preferences" />
					<WizardLine></WizardLine>
					<CircleOn num="4"></CircleOn>
					<WizardTextOn text="Must-Do Activity" />
					<WizardLine></WizardLine>
					<CircleOff num="5"></CircleOff>
					<WizardTextOff text="Review" />
				</Flex>
			);
			break;
		case 5:
			stepComponent = (
				<StepFive
					form={form}
					onFormChange={handleFormChange}
					onPreviousStep={handlePreviousStep}
					// TODO: add onSubmit
				/>
			);
			wizardComponent = (
				<Flex direction="row" className={styles.wizard}>
					<CircleOn num="1"></CircleOn>
					<WizardTextOn text="When and Where" />
					<WizardLine></WizardLine>
					<CircleOn num="2"></CircleOn>
					<WizardTextOn text="Who's Going" />
					<WizardLine></WizardLine>
					<CircleOn num="3"></CircleOn>
					<WizardTextOn text="Preferences" />
					<WizardLine></WizardLine>
					<CircleOn num="4"></CircleOn>
					<WizardTextOn text="Must-Do Activity" />
					<WizardLine></WizardLine>
					<CircleOn num="5"></CircleOn>
					<WizardTextOn text="Review" />
				</Flex>
			);
			break;
		default:
			stepComponent = null;
	}

	console.log(form);
	return (
		<>
			<main className={`${styles.main} ${inter.className}`}>
				<Flex direction="column">
					<Text
						fontSize="4xl"
						lineHeight="10"
						fontWeight="extrabold"
						marginBottom="32px"
						textAlign="center"
					>
						Plan your trip
					</Text>
					{wizardComponent}
				</Flex>
				{stepComponent}

				<Image
					className={styles.planningraccoon}
					src={Raccoon}
					alt="raccoon mascot"
				/>
			</main>
		</>
	);
}

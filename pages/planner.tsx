import styles from "@/styles/Home.module.css";
import { Heading, Text, Flex, Box, Spinner } from "@chakra-ui/react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import { stringify } from "querystring";
import StepOne from "@/components/StepOne";
import StepTwo from "@/components/StepTwo";
import StepThree from "@/components/StepThree";
import StepFour from "@/components/StepFour";
import StepFive from "@/components/StepFive";
import Raccoon from "../public/images/planning-raccoon.png";
import { useRouter } from "next/router";
import { css, keyframes } from "@emotion/react";

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
	const [loading, setLoading] = useState(false);

	const router = useRouter();

	const handleFormChange = (updatedForm: any) => {
		setForm(updatedForm);
	};
	const handleNextStep = () => {
		setStepState(stepState + 1);
	};

	const handlePreviousStep = () => {
		setStepState(stepState - 1);
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const data = {
			destination: form.location,
			date: form.date,
			startTime: form.startTime,
			endTime: form.endTime,
			numberOfPeople: form.numberOfPeople,
			groupType: form.groupType,
			budget: form.budget,
			transportationMethod: form.transportationMethod,
			mustDo: form.mustDo,
			wheelChairFriendly: form.wheelChairFriendly,
		};

		console.log(data);

		try {
			setLoading(true);
			console.log("hello");

			const response = await fetch(
				"http://localhost:3001/trips/create-trip",
				{
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			const itineraryId = await response.json();

			console.log(itineraryId);

			// get id

			router.push(`/itineraries/${itineraryId}`);
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
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
					onClick={handleSubmit}
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

    const spin = keyframes`
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    `;
	if (loading) {
        return (
            <Box
                textAlign="center"
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection={"column"}
                w="100%"
                h="100vh"
                backgroundColor="blue.50"
                opacity={1}
            >
                <Box css={css`animation: ${spin} 3s linear infinite;`}>
                    <Image src="/images/loading-raccoon.svg" alt="Loading..." width={400} height={300} />
                </Box>
                <Text mt={20} fontSize="5xl" color="blue.900" fontWeight="extrabold">Generating itinerary...</Text>
            </Box>
        );
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

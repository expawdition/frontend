import styles from "@/styles/Home.module.css";
import { Heading, Text, Flex, Button, Spinner, Box } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import { stringify } from "querystring";
import { useEffect, useState } from "react";
import StepOne from "@/components/StepOne";
import StepTwo from "@/components/StepTwo";
import StepThree from "@/components/StepThree";
import StepFour from "@/components/StepFour";
import { useRouter } from "next/router";

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

function CirleOn(props: any) {
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

function CirleOff(props: any) {
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

    const handleFormChange = (updatedForm: any) => {
        setForm(updatedForm);
    };

    if (loading) {
        return (
            <Box
                textAlign="center"
                display="flex"
                justifyContent="center"
                alignItems="center"
                w="100%"
                h="100vh"
                color="blue.50"
            >
                <Spinner />
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
                    <Flex direction="row" className={styles.wizard}>
                        <CirleOn num="1"></CirleOn>
                        <WizardTextOn text="When and Where" />
                        <WizardLine></WizardLine>
                        <CirleOff num="2"></CirleOff>
                        <WizardTextOff text="Who's Going" />
                        <WizardLine></WizardLine>
                        <CirleOff num="3"></CirleOff>
                        <WizardTextOff text="Preferences" />
                        <WizardLine></WizardLine>
                        <CirleOff num="4"></CirleOff>
                        <WizardTextOff text="Must-Do Activity" />
                        <WizardLine></WizardLine>
                        <CirleOff num="5"></CirleOff>
                        <WizardTextOff text="Review" />
                    </Flex>
                </Flex>
                <StepOne form={form} onFormChange={handleFormChange}></StepOne>
                <StepTwo form={form} onFormChange={handleFormChange}></StepTwo>
                <StepThree
                    form={form}
                    onFormChange={handleFormChange}
                ></StepThree>
                <StepFour
                    form={form}
                    onFormChange={handleFormChange}
                ></StepFour>
                <Button onClick={handleSubmit}>Submit</Button>
            </main>
        </>
    );
}

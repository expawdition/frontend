import styles from "@/styles/Home.module.css";
import {
	Text,
	Flex,
	Button,
    Select,
    Checkbox,
    CheckboxGroup,
    Stack
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import StepCardLabel from "./StepCardLabel";

export default function StepThree() {
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
						3. Preferences
					</Text>
					<StepCardLabel text="What's your budget?" />
					<Select
						placeholder="Select a budget"
						marginBottom="24px"
						size="sm"
					>
						<option value="$">Budget-friendly ($)</option>
						<option value="$$">Moderately priced ($$)</option>
						<option value="$$$">High end ($$$)</option>
						<option value="$$$$">Luxury ($$$$)</option>
					</Select>

                    <StepCardLabel text="Any accessibility considerations?" />
                    <CheckboxGroup colorScheme='blue'>
                        <Stack spacing={[1, 2]} direction={['column', 'column']}>
                            <Checkbox value='true'>Wheelchair-friendly</Checkbox>
                            <Checkbox value='x'>Vision-impaired</Checkbox>
                            <Checkbox value='y'>Hearing-impaired</Checkbox>
                        </Stack>
                        </CheckboxGroup>

                    <StepCardLabel text="Any dietary restrictions?" />
                    <CheckboxGroup colorScheme='blue'>
                        <Stack spacing={[1, 2]} direction={['column', 'column']}>
                            <Checkbox value='a'>Vegan/Vegetarian</Checkbox>
                            <Checkbox value='b'>Gluten-free</Checkbox>
                            <Checkbox value='c'>Halal</Checkbox>
                        </Stack>
                        </CheckboxGroup>
					
					<Flex direction="row">
						<Button className={styles.stepnextbutton}>Next</Button>
						<Button>Cancel</Button>
					</Flex>
				</Flex>
			</Flex>
		</>
	);
}

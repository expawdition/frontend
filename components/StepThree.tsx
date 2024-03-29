import styles from '@/styles/Home.module.css';
import { Text, Flex, Button, Select, Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import StepCardLabel from './StepCardLabel';

interface StepThreeProps {
	form: {
		budget: string;
		wheelChairFriendly: boolean;
	};
	onFormChange: (updatedForm: { budget: string; wheelChairFriendly: boolean }) => void;
	onNextStep: () => void;
	onPreviousStep: () => void;
}

const StepThree: React.FC<StepThreeProps> = ({ form, onFormChange, onNextStep, onPreviousStep }) => {
	const handleInputChange = (fieldName: keyof typeof form, value: string | boolean): void => {
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
			<Flex className={styles.stepfivecard} direction='row'>
				<Flex className={styles.steponecardfields} direction='column'>
					<Text className={styles.stepcardtitle} fontSize='xl' lineHeight='7' fontWeight='bold'>
						3. Preferences
					</Text>
					<StepCardLabel text="What's your budget?" />
					<Select
						placeholder='Select a budget'
						marginBottom='24px'
						size='sm'
						value={form.budget}
						onChange={(e) => handleInputChange('budget', e.target.value)}
					>
						<option value='$'>Budget-friendly ($)</option>
						<option value='$$'>Moderately priced ($$)</option>
						<option value='$$$'>High-end ($$$)</option>
						<option value='$$$$'>Luxury ($$$$)</option>
					</Select>

					<StepCardLabel text='Any accessibility considerations?' />
					<CheckboxGroup colorScheme='blue'>
						<Stack spacing={[1, 2]} direction={['column', 'column']} marginBottom='20px'>
							<Checkbox
								isChecked={form.wheelChairFriendly}
								onChange={(e) => handleInputChange('wheelChairFriendly', e.target.checked)}
							>
								Wheelchair-friendly
							</Checkbox>
							<Checkbox>Vision-impaired</Checkbox>
							<Checkbox>Hearing-impaired</Checkbox>
						</Stack>
					</CheckboxGroup>

					<StepCardLabel text='Any dietary restrictions?' />
					<CheckboxGroup colorScheme='blue'>
						<Stack spacing={[1, 2]} direction={['column', 'column']} marginBottom='32px'>
							<Checkbox value='a'>Vegan/Vegetarian</Checkbox>
							<Checkbox value='b'>Gluten-free</Checkbox>
							<Checkbox value='c'>Halal</Checkbox>
						</Stack>
					</CheckboxGroup>

					<Flex direction='row'>
						<Button className={styles.stepnextbutton} onClick={onNextStep} colorScheme='blue'>
							Next
						</Button>
						<Button onClick={onPreviousStep}>Back</Button>
					</Flex>
				</Flex>
			</Flex>
		</>
	);
};

export default StepThree;

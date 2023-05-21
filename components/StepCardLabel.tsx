import styles from "@/styles/Home.module.css";
import { Text } from "@chakra-ui/react";

export default function StepCardLabel(props: any) {
	return (
		<Text
			className={styles.stepcardlabel}
			fontSize="sm"
			lineHeight="5"
			fontWeight="medium"
		>
			{props.text}
		</Text>
	);
}

'use client';
import Image from "next/image";
import styles from "./page.module.css";

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react';

export default function Home() {
	return (
		<ChakraProvider>
			<h1>Hello World</h1>
		</ChakraProvider>
	);
}

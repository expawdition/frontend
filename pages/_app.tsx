import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
	colors: {
		seeDetailsButtonColor: {
			500: '#1A365D',
		},
		nextButtonColor: {
			500: '#3182CE',
		},
	},
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

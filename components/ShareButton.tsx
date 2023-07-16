import { useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons';
import { AnimatePresence, motion } from 'framer-motion';

const MotionBox = motion(Box);

export default function ShareButton({url} : {url: string}) {
    const [isCopied, setIsCopied] = useState(false);

    const handleShareClick = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    return (
        <>
            <Button
                variant='outline'
                leftIcon={<LinkIcon />}
                marginTop='5px'
                marginBottom='10px'
                width='200px'
                onClick={handleShareClick}
            >
                Share Itinerary
            </Button>
            <AnimatePresence>
                {isCopied && (
                    <MotionBox
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5 }}
                        position='fixed'
                        bottom='0'
                        right='0'
                        m='16px'
                        p='16px'
                        fontSize='lg'
                        bg='green.500'
                        color='white'
                        borderRadius='md'
                    >
                        URL copied to clipboard!
                    </MotionBox>
                )}
            </AnimatePresence>
        </>
    );
};

import { Box, Flex, SimpleGrid, Text, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import Image from 'next/image';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedImageUrl, setSelectedImageUrl] = useState('null');

  function handleViewImage(url: string): void {
    setSelectedImageUrl(url);
    onOpen();
  }

  return (
    <>
      <SimpleGrid
        maxW={1120}
        mx="auto"
        px={20}
        py={6}
        minChildWidth={260}
        spacing="40px"
      >
        <Flex
          direction="column"
          bg="pGray.800"
          maxWidth={260}
          borderRadius={5}
          overflow="hidden"
          cursor="pointer"
          border="2px"
          borderColor="transparent"
          transition=".2s"
          _hover={{
            transform: 'translateY(-5px)',
            borderColor: 'orange.500',
          }}
          onClick={() =>
            handleViewImage(
              'https://images.unsplash.com/photo-1638913658828-afb88c3d4d11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            )
          }
        >
          <Box position="relative" width="100%" height="150px">
            <Image
              src="https://images.unsplash.com/photo-1638913658828-afb88c3d4d11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="image"
              layout="fill"
              objectFit="cover"
            />
          </Box>
          <Flex direction="column" p={5}>
            <Text fontWeight="bold" pb={1}>
              Doge
            </Text>
            <Text fontSize={14}>The best doge</Text>
          </Flex>
        </Flex>
      </SimpleGrid>

      <ModalViewImage
        isOpen={isOpen}
        onClose={onClose}
        imgUrl={selectedImageUrl}
      />
    </>
  );
}

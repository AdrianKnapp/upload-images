import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Image,
  Link,
  Flex,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="pGray.800">
          <ModalBody p={0}>
            <Image
              src={imgUrl}
              alt="image"
              width="100%"
              height="100%"
              maxWidth={900}
              maxHeight={600}
            />
            <Flex p={3}>
              <Link href={imgUrl} target="_blank">
                Abrir original
              </Link>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

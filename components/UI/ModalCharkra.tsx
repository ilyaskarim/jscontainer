import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ModalProps,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

export default function (props: {
  isOpen: boolean;
  onClose: () => void;
  footer?: boolean;
  title?: string;
  children: React.ReactNode;
  size?: ModalProps["size"];
  isCentered?: ModalProps["isCentered"];
}) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} size={props.size}>
      <ModalOverlay />
      <ModalContent>
        {props.title && <ModalHeader>{props.title}</ModalHeader>}
        <ModalCloseButton />
        <ModalBody>{props.children}</ModalBody>
        {props.footer && (
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={props.onClose}>
              Close
            </Button>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
}

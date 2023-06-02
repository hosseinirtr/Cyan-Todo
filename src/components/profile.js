import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getProfile, updateProfile } from "../redux/actions/profileActions";
import {
  Text,
  Box,
  Input,
  Button,
  Avatar,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  FormHelperText,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

function Profile({ profile, updateProfile }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [isProfileUpdated, setIsProfileUpdated] = useState(false);

  useEffect(() => {
    if (!!profile?.name) {
      onClose();
      setName(profile.name);
    } else {
      onOpen();
    }
  }, [profile, onOpen, onClose]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNameSave = () => {
    updateProfile({ name });
    setIsProfileUpdated(true);
    setTimeout(() => setIsProfileUpdated(false), 3000);
    onClose();
  };

  return (
    <Box maxW="max" mx="auto" mt={8} p={4}>
      {isProfileUpdated && (
        <Box color="green.500" display="flex" alignItems="center" mb={4}>
          <CheckCircleIcon mr={2} />
          Profile updated
        </Box>
      )}

      <HStack spacing={4} alignItems="center" justify="space-between">
        <Avatar size="lg" name={profile?.name} src={profile?.avatar} />
        <VStack align="left" spacing={0}>
          <Text fontSize="lg">{`Dear ${profile?.name || "User"},`}</Text>
          <Text fontSize="sm" color="gray.500">
            Welcome to Cyan Todo!
          </Text>
        </VStack>
        <Button onClick={onOpen} backgroundColor={"#e9ffff"} ml={"48"}>
          Edit Name
        </Button>
      </HStack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Name</ModalHeader>
          <ModalBody>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                value={name}
                onChange={handleNameChange}
                placeholder="Enter your name"
              />
              <FormHelperText>
                Your name will be displayed on your profile.
              </FormHelperText>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleNameSave} mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
});

const mapDispatchToProps = {
  getProfile,
  updateProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

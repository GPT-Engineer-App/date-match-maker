import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Stack, Text, Image, useToast } from "@chakra-ui/react";
import { FaHeart, FaSearch } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleMatchClick = () => {
    toast({
      title: "Match Request Sent!",
      description: "We've sent your match request. Good luck!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" p={4}>
      <Box maxW="md" w="full" p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
        <Stack spacing={4}>
          <Heading as="h1" size="xl" textAlign="center">
            Find Your Match
          </Heading>
          <Text textAlign="center" fontSize="md">
            Enter your details to find your perfect match.
          </Text>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input placeholder="John Doe" />
          </FormControl>
          <FormControl id="interests">
            <FormLabel>Interests</FormLabel>
            <Input placeholder="Hiking, Reading, Gaming" />
          </FormControl>
          <Button leftIcon={<FaSearch />} colorScheme="blue" onClick={handleMatchClick}>
            Search Matches
          </Button>
        </Stack>
      </Box>
      <Flex mt={10} direction="column" align="center">
        <Text fontSize="lg" fontWeight="bold">
          Featured Profiles
        </Text>
        <Flex mt={4}>
          <Box p={4} borderWidth={1} borderRadius="lg" overflow="hidden">
            <Image src="https://images.unsplash.com/photo-1623184663110-89ba5b565eb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwbWFufGVufDB8fHx8MTcxMzkyMjgxNHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Image" boxSize="100px" objectFit="cover" />
            <Text mt={2}>John, 29</Text>
            <Button size="sm" leftIcon={<FaHeart />} colorScheme="pink">
              Like
            </Button>
          </Box>
          <Box p={4} borderWidth={1} borderRadius="lg" overflow="hidden" ml={4}>
            <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHdvbWFufGVufDB8fHx8MTcxMzkyMjgxNXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Image" boxSize="100px" objectFit="cover" />
            <Text mt={2}>Sarah, 25</Text>
            <Button size="sm" leftIcon={<FaHeart />} colorScheme="pink">
              Like
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Index;

import { Container, Text, VStack, Box, Button, Image, Heading, Flex, Link, Icon } from "@chakra-ui/react";
import { FaRobot, FaUserPlus, FaInfoCircle, FaMountain } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="#0A1929" color="gray.50" minH="100vh" display="flex" flexDirection="column">
      <Box as="header" px={4} lg={{ px: 6 }} h={14} display="flex" alignItems="center" borderBottom="1px" borderColor="gray.700">
        <Link href="#" display="flex" alignItems="center" justifyContent="center">
          <Icon as={FaMountain} w={6} h={6} color="#9B5DE5" />
          <Text srOnly>Acme Inc</Text>
        </Link>
        <Box as="nav" ml="auto" display="flex" gap={{ base: 4, sm: 6 }}>
          <Link href="#" fontSize="sm" fontWeight="medium" _hover={{ color: "#00D7FF", textDecoration: "underline" }}>Features</Link>
          <Link href="#" fontSize="sm" fontWeight="medium" _hover={{ color: "#00D7FF", textDecoration: "underline" }}>Pricing</Link>
          <Link href="#" fontSize="sm" fontWeight="medium" _hover={{ color: "#00D7FF", textDecoration: "underline" }}>About</Link>
          <Link href="#" fontSize="sm" fontWeight="medium" _hover={{ color: "#00D7FF", textDecoration: "underline" }}>Contact</Link>
        </Box>
      </Box>
      <Box as="main" flex="1">
        <Box w="full" py={{ base: 12, md: 24, lg: 32, xl: 48 }}>
          <Container maxW="container.lg">
            <Flex direction={{ base: "column", lg: "row-reverse" }} gap={{ base: 6, lg: 12 }}>
              <Image src="/placeholder.svg" alt="Hero" mx="auto" borderRadius="xl" objectFit="cover" w={{ base: "full", lg: "auto" }} h={{ base: "auto", lg: "auto" }} />
              <Box display="flex" flexDirection="column" justifyContent="center" spaceY={4}>
                <Box spaceY={2}>
                  <Heading as="h1" fontSize={{ base: "3xl", sm: "5xl", xl: "6xl" }} fontWeight="bold" color="#00D7FF">The complete platform for building the Web</Heading>
                  <Text maxW="600px" color="gray.300" fontSize={{ base: "md", md: "xl" }}>Give your team the toolkit to stop configuring and start innovating. Securely build, deploy, and scale the best web experiences.</Text>
                </Box>
                <Flex direction={{ base: "column", sm: "row" }} gap={2}>
                  <Button bg="#9B5DE5" color="gray.50" _hover={{ bg: "#9B5DE5", opacity: 0.9 }}>Get Started</Button>
                  <Button borderColor="#00D7FF" bg="#0A1929" color="#00D7FF" _hover={{ bg: "#0A1929", opacity: 0.9 }}>Contact Sales</Button>
                </Flex>
              </Box>
            </Flex>
          </Container>
        </Box>
        <Box w="full" py={{ base: 12, md: 24, lg: 32 }} bg="#0E2240">
          <Container maxW="container.lg">
            <Flex direction="column" alignItems="center" textAlign="center" spaceY={4}>
              <Box spaceY={2}>
                <Box display="inline-block" bg="#0A1929" px={3} py={1} borderRadius="lg" fontSize="sm" color="#00D7FF">New Features</Box>
                <Heading as="h2" fontSize={{ base: "3xl", sm: "5xl" }} fontWeight="bold" color="#00D7FF">Faster iteration. More innovation.</Heading>
                <Text maxW="900px" color="gray.300" fontSize={{ base: "md", md: "xl" }}>The platform for rapid progress. Let your team focus on shipping features instead of managing infrastructure with automated CI/CD, built-in testing, and integrated collaboration.</Text>
              </Box>
            </Flex>
            <Flex direction={{ base: "column", lg: "row" }} gap={{ base: 6, lg: 12 }} py={12}>
              <Image src="/placeholder.svg" alt="Image" mx="auto" borderRadius="xl" objectFit="cover" w={{ base: "full", lg: "auto" }} h={{ base: "auto", lg: "auto" }} />
              <Box display="flex" flexDirection="column" justifyContent="center" spaceY={4}>
                <Box spaceY={6}>
                  <Box>
                    <Heading as="h3" fontSize="xl" fontWeight="bold" color="#00D7FF">Collaboration</Heading>
                    <Text color="gray.300">Make collaboration seamless with built-in code review tools.</Text>
                  </Box>
                  <Box>
                    <Heading as="h3" fontSize="xl" fontWeight="bold" color="#00D7FF">Automation</Heading>
                    <Text color="gray.300">Automate your workflow with continuous integration.</Text>
                  </Box>
                  <Box>
                    <Heading as="h3" fontSize="xl" fontWeight="bold" color="#00D7FF">Scale</Heading>
                    <Text color="gray.300">Deploy to the cloud with a single click and scale with ease.</Text>
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Container>
        </Box>
        <Box w="full" py={{ base: 12, md: 24, lg: 32 }}>
          <Container maxW="container.lg">
            <Flex direction={{ base: "column", lg: "row" }} gap={10}>
              <Box spaceY={2}>
                <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" color="#00D7FF">Experience the workflow the best frontend teams love.</Heading>
                <Text maxW="600px" color="gray.300" fontSize={{ base: "md", md: "xl" }}>Let your team focus on shipping features instead of managing infrastructure with automated CI/CD.</Text>
              </Box>
              <Flex direction={{ base: "column", sm: "row" }} gap={2} justifyContent={{ lg: "flex-end" }}>
                <Button bg="#9B5DE5" color="gray.50" _hover={{ bg: "#9B5DE5", opacity: 0.9 }}>Contact Sales</Button>
                <Button borderColor="#00D7FF" bg="#0A1929" color="#00D7FF" _hover={{ bg: "#0A1929", opacity: 0.9 }}>Learn more</Button>
              </Flex>
            </Flex>
          </Container>
        </Box>
        <Box w="full" py={{ base: 12, md: 24, lg: 32 }} bgGradient="linear(to-b, #0E2240, #0A1929)">
          <Container maxW="container.lg">
            <Flex direction="column" alignItems="center" textAlign="center" spaceY={4}>
              <Box spaceY={2}>
                <Box display="inline-block" bg="#0A1929" px={3} py={1} borderRadius="lg" fontSize="sm" color="#00D7FF">Features Showcase</Box>
                <Heading as="h2" fontSize={{ base: "3xl", sm: "5xl" }} fontWeight="bold" color="#00D7FF">Where Intelligence Takes Form</Heading>
                <Text maxW="900px" color="gray.300" fontSize={{ base: "md", md: "xl" }}>Dynamic, asymmetrical grid showcases core features. Cards have subtle background gradients (navy to blue) for depth and visual interest.</Text>
              </Box>
            </Flex>
            <Flex direction={{ base: "column", lg: "row" }} gap={12} py={12}>
              <Box position="relative" overflow="hidden" borderRadius="xl" bgGradient="linear(to-br, #0E2240, #00D7FF)" p={1} transition="all 0.3s" _hover={{ transform: "scale(1.05)", shadow: "lg" }}>
                <Box display="flex" flexDirection="column" justifyContent="space-between" borderRadius="xl" bg="#0A1929" p={6} transition="all 0.3s" _hover={{ bg: "#0E2240" }}>
                  <Box>
                    <Icon as={FaRobot} w={8} h={8} color="#00D7FF" />
                    <Heading as="h3" mt={4} fontSize="xl" fontWeight="bold" color="#00D7FF">Smart Automation</Heading>
                    <Text mt={2} color="gray.300">Automates customer interactions, freeing human agents.</Text>
                  </Box>
                  <Button bg="#9B5DE5" color="gray.50" _hover={{ bg: "#9B5DE5", opacity: 0.9 }}>Learn More</Button>
                </Box>
              </Box>
              <Box position="relative" overflow="hidden" borderRadius="xl" bgGradient="linear(to-br, #0E2240, #00D7FF)" p={1} transition="all 0.3s" _hover={{ transform: "scale(1.05)", shadow: "lg" }}>
                <Box display="flex" flexDirection="column" justifyContent="space-between" borderRadius="xl" bg="#0A1929" p={6} transition="all 0.3s" _hover={{ bg: "#0E2240" }}>
                  <Box>
                    <Icon as={FaUserPlus} w={8} h={8} color="#00D7FF" />
                    <Heading as="h3" mt={4} fontSize="xl" fontWeight="bold" color="#00D7FF">Personalized Experiences</Heading>
                    <Text mt={2} color="gray.300">Tailors interactions based on customer preferences.</Text>
                  </Box>
                  <Button bg="#9B5DE5" color="gray.50" _hover={{ bg: "#9B5DE5", opacity: 0.9 }}>Learn More</Button>
                </Box>
              </Box>
              <Box position="relative" overflow="hidden" borderRadius="xl" bgGradient="linear(to-br, #0E2240, #00D7FF)" p={1} transition="all 0.3s" _hover={{ transform: "scale(1.05)", shadow: "lg" }}>
                <Box display="flex" flexDirection="column" justifyContent="space-between" borderRadius="xl" bg="#0A1929" p={6} transition="all 0.3s" _hover={{ bg: "#0E2240" }}>
                  <Box>
                    <Icon as={FaInfoCircle} w={8} h={8} color="#00D7FF" />
                    <Heading as="h3" mt={4} fontSize="xl" fontWeight="bold" color="#00D7FF">Data-Driven Insights</Heading>
                    <Text mt={2} color="gray.300">Provides valuable data to optimize strategies.</Text>
                  </Box>
                  <Button bg="#9B5DE5" color="gray.50" _hover={{ bg: "#9B5DE5", opacity: 0.9 }}>Learn More</Button>
                </Box>
              </Box>
              <Box position="relative" overflow="hidden" borderRadius="xl" bgGradient="linear(to-br, #0E2240, #00D7FF)" p={1} transition="all 0.3s" _hover={{ transform: "scale(1.05)", shadow: "lg" }}>
                <Box display="flex" flexDirection="column" justifyContent="space-between" borderRadius="xl" bg="#0A1929" p={6} transition="all 0.3s" _hover={{ bg: "#0E2240" }}>
                  <Box>
                    <Icon as={FaMountain} w={8} h={8} color="#00D7FF" />
                    <Heading as="h3" mt={4} fontSize="xl" fontWeight="bold" color="#00D7FF">Seamless Integrations</Heading>
                    <Text mt={2} color="gray.300">Compatible with leading CRM, marketing, and e-commerce platforms.</Text>
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Container>
        </Box>
        <Box w="full" py={{ base: 12, md: 24, lg: 32 }} bg="#f5f5f5">
          <Container maxW="container.lg">
            <Flex direction="column" alignItems="center" textAlign="center" spaceY={4} />
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
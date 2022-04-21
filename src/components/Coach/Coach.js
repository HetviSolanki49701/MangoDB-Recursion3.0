import React from "react";
import {
  VStack,
  Link,
  Button,
  Heading,
  LinkBox,
  Text,
  LinkOverlay,
  HStack,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Coach = () => {
  const navigate = useNavigate();
  return (
    <>
      <VStack p={25} spacing={5}>
      <Heading m>Our Coaches</Heading>
        <HStack spacing={16}>
          <LinkBox as="article" maxW="md" px="10" py="5" borderWidth="1px" rounded="md">
            <Image w='244px' src="https://media.istockphoto.com/photos/brunette-woman-yoga-instructor-doing-vrikshasana-picture-id1179814993?k=20&m=1179814993&s=612x612&w=0&h=CNjg2A3l4hGhf2XJLE0rUQ3LnPssS-b2f3HFrzmfBaQ=" />
            <Heading textAlign="left" fontSize="25" my="3">
              <LinkOverlay href="/room">Hetvi Solanki</LinkOverlay>
            </Heading>
            <Text mt={1} fontSize='20' >Yoga Instructor</Text>
            <Button mt={2}>Book a meeting</Button>
          </LinkBox>
          <LinkBox as="article" maxW="md" px="10" py="5" borderWidth="1px" rounded="md">
            <Image w='244px' src="https://media.istockphoto.com/photos/low-angle-view-of-handsome-trainer-performing-zumba-with-dancers-in-picture-id1204577442?k=20&m=1204577442&s=612x612&w=0&h=8Fr1IT5OnTkfOByHPURk0CoCpeXlFtw5S6RqpfOJqg0=" />
            <Heading textAlign="left" fontSize="25" my="3">
              <LinkOverlay href="/room">Jainam Shah</LinkOverlay>
            </Heading>
            <Text mt={1} fontSize='20' >Zumba Teacher</Text>
            <Button mt={2}>Book a meeting</Button>
          </LinkBox>
          <LinkBox as="article" maxW="md" px="10" py="5" borderWidth="1px" rounded="md">
            <Image w='244px' src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mh-trainer-2-1533576998.png" />
            <Heading textAlign="left" fontSize="25" my="3">
              <LinkOverlay href="/room">Avish Jain</LinkOverlay>
            </Heading>
            <Text mt={1} fontSize='20' >Gym Trainer</Text>
            <Button mt={2}>Book a meeting</Button>
          </LinkBox>
          <LinkBox as="article" maxW="md" px="10" py="5" borderWidth="1px" rounded="md">
            <Image w='244px' src="https://image.shutterstock.com/image-photo/portrait-male-nutritionist-his-office-260nw-1374066767.jpg" />
            <Heading textAlign="left" fontSize="25" my="3">
              <LinkOverlay href="/room">Jay Jain</LinkOverlay>
            </Heading>
            <Text mt={1} fontSize='20' >Dietician</Text>
            <Button mt={2}>Book a meeting</Button>
          </LinkBox>
        </HStack>
        <HStack spacing={16}>
          <LinkBox as="article" maxW="md" px="10" py="5" borderWidth="1px" rounded="md">
            <Image w='244px' src="https://media.istockphoto.com/photos/brunette-woman-yoga-instructor-doing-vrikshasana-picture-id1179814993?k=20&m=1179814993&s=612x612&w=0&h=CNjg2A3l4hGhf2XJLE0rUQ3LnPssS-b2f3HFrzmfBaQ=" />
            <Heading textAlign="left" fontSize="25" my="3">
              <LinkOverlay href="/room">Hetvi Solanki</LinkOverlay>
            </Heading>
            <Text mt={1} fontSize='20' >Yoga Instructor</Text>
            <Button mt={2}>Book a meeting</Button>
          </LinkBox>
          <LinkBox as="article" maxW="md" px="10" py="5" borderWidth="1px" rounded="md">
            <Image w='244px' src="https://media.istockphoto.com/photos/low-angle-view-of-handsome-trainer-performing-zumba-with-dancers-in-picture-id1204577442?k=20&m=1204577442&s=612x612&w=0&h=8Fr1IT5OnTkfOByHPURk0CoCpeXlFtw5S6RqpfOJqg0=" />
            <Heading textAlign="left" fontSize="25" my="3">
              <LinkOverlay href="/room">Jainam Shah</LinkOverlay>
            </Heading>
            <Text mt={1} fontSize='20' >Zumba Teacher</Text>
            <Button mt={2}>Book a meeting</Button>
          </LinkBox>
          <LinkBox as="article" maxW="md" px="10" py="5" borderWidth="1px" rounded="md">
            <Image w='244px' src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mh-trainer-2-1533576998.png" />
            <Heading textAlign="left" fontSize="25" my="3">
              <LinkOverlay href="/room">Avish Jain</LinkOverlay>
            </Heading>
            <Text mt={1} fontSize='20' >Gym Trainer</Text>
            <Button mt={2}>Book a meeting</Button>
          </LinkBox>
          <LinkBox as="article" maxW="md" px="10" py="5" borderWidth="1px" rounded="md">
            <Image w='244px' src="https://image.shutterstock.com/image-photo/portrait-male-nutritionist-his-office-260nw-1374066767.jpg" />
            <Heading textAlign="left" fontSize="25" my="3">
              <LinkOverlay href="/room">Jay Jain</LinkOverlay>
            </Heading>
            <Text mt={1} fontSize='20' >Dietician</Text>
            <Button mt={2}>Book a meeting</Button>
          </LinkBox>
        </HStack>
        
      </VStack>
    </>
  );
};

export default Coach;

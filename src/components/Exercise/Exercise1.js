import {
    VStack,
    HStack,
    Text,
    Button,
    Image,
    Heading,
    Container,
    UnorderedList,
    ListItem,
  } from "@chakra-ui/react";
//   import { ArrowRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
  import Webcam from "react-webcam";
  
  import React, { useEffect, useRef, useState, useCallback } from "react";
  import { useNavigate } from "react-router-dom";
  
  const Exercise1 = () => {
    const [renderedStreamDuration, setRenderedStreamDuration] =
      useState("00:00:00");
  
    const navigate = useNavigate();
  
    const handleClickBack = () => {

    };
  
    const handleClickNext = () => {

    };
  
    return (
      <>
        <Container maxW="container.xl" bgColor="rgb(221 221 221)">
          <HStack spacing={800}>
            <Button
              color="white"
              m="5"
              bgColor="#92A3FD"
              _hover={{ bg: "#C58BF2" }}
              onClick={handleClickBack}
            >
              {/* <ChevronLeftIcon /> */}
              Back
            </Button>
            <Button
              m="5"
              color="white"
              bgColor="#92A3FD"
              _hover={{ bg: "#C58BF2" }}
              textAlign="right"
              onClick={handleClickNext}
            >
              Go to next excerise
              {/* <ArrowRightIcon /> */}
            </Button>
          </HStack>
          <HStack w="full" h="full" p={10} spacing={10} align="flex-start">
            <VStack px="40px">
              <Image w="lg" src="http://localhost:3000/assets/skipping.gif" />
              <Container
                className="timer-display"
                textAlign="center"
                fontSize="3xl"
              >
                {renderedStreamDuration}
              </Container>
              <TimerController
                renderedStreamDuration={renderedStreamDuration}
                setRenderedStreamDuration={setRenderedStreamDuration}
              />
            </VStack>
            <VStack justifyContent="center" w="md">
              <Webcam videoConstraints={{ width: 1280, height: 720 }} />
              <Heading p="10px" m="10px">
                Instructions:{" "}
              </Heading>
              <UnorderedList p="10px" m="10px" color="">
                <ListItem>
                  Hold the rope while keeping your hands at hip level.
                </ListItem>
                <ListItem>
                  Rotate your wrists to swing the rope and jump.
                </ListItem>
                <ListItem>
                  Jump with both feet at the same time, one foot at a time,
                  alternating between feet, etc.
                </ListItem>
                <ListItem>Repeat until the set is complete.</ListItem>
              </UnorderedList>
            </VStack>
          </HStack>
        </Container>
      </>
    );
  };
  
  const TimerController = ({
    renderedStreamDuration,
    setRenderedStreamDuration,
  }) => {
    const minutes = renderedStreamDuration.slice(3, 5);
    console.log(parseInt(minutes));
  
    const streamDuration = useRef(0),
      previousTime = useRef(0),
      requestAnimationFrameId = useRef(null),
      [isStartTimer, setIsStartTimer] = useState(false),
      [isStopTimer, setIsStopTimer] = useState(false),
      [isPauseTimer, setIsPauseTimer] = useState(false),
      [isResumeTimer, setIsResumeTimer] = useState(false),
      isStartBtnDisabled = isPauseTimer || isResumeTimer || isStartTimer,
      isStopBtnDisabled = !(isPauseTimer || isResumeTimer || isStartTimer),
      isPauseBtnDisabled = !(isStartTimer || (!isStartTimer && isResumeTimer)),
      isResumeBtnDisabled = !isPauseTimer;
  
    const updateTimer = useCallback(() => {
      let now = performance.now();
      let dt = now - previousTime.current;
  
      if (dt >= 1000) {
        streamDuration.current = streamDuration.current + Math.round(dt / 1000);
        const formattedStreamDuration = new Date(streamDuration.current * 1000)
          .toISOString()
          .substr(11, 8);
        setRenderedStreamDuration(formattedStreamDuration);
        previousTime.current = now;
      }
      requestAnimationFrameId.current = requestAnimationFrame(updateTimer);
    }, []);
  
    const startTimer = useCallback(() => {
      previousTime.current = performance.now();
      requestAnimationFrameId.current = requestAnimationFrame(updateTimer);
    }, [updateTimer]);
  
    useEffect(() => {
      if (isStartTimer && !isStopTimer) {
        startTimer();
      }
      if (isStopTimer && !isStartTimer) {
        streamDuration.current = 0;
        cancelAnimationFrame(requestAnimationFrameId.current);
        setRenderedStreamDuration("00:00:00");
      }
    }, [isStartTimer, isStopTimer, startTimer]);
  
    const startHandler = () => {
      setIsStartTimer(true);
      setIsStopTimer(false);
    };
  
    const stopHandler = async () => {
      setIsStopTimer(true);
      setIsStartTimer(false);
      setIsPauseTimer(false);
      setIsResumeTimer(false);
    };
  
    const pauseHandler = () => {
      setIsPauseTimer(true);
      setIsStartTimer(false);
      setIsResumeTimer(false);
      cancelAnimationFrame(requestAnimationFrameId.current);
    };
  
    const resumeHandler = () => {
      setIsResumeTimer(true);
      setIsPauseTimer(false);
      startTimer();
    };
  
    return (
      <Container className="timer-controller-wrapper">
        <Container className="buttons-wrapper">
          <Button
            bgColor="#92A3FD"
            color="white"
            _hover={{ bg: "#C58BF2" }}
            p="10px"
            m="10px"
            size="lg"
            onClick={startHandler}
            disabled={isStartBtnDisabled}
            className={`timer-controller-btn ${
              isStartBtnDisabled ? "disabled" : ""
            }`}
          >
            start
          </Button>
          <Button
            bgColor="#92A3FD"
            color="white"
            _hover={{ bg: "#C58BF2" }}
            p="10px"
            m="10px"
            size="lg"
            className={`timer-controller-btn danger ${
              isStopBtnDisabled ? "disabled" : ""
            }`}
            disabled={isStopBtnDisabled}
            onClick={stopHandler}
          >
            stop
          </Button>
          <Button
            bgColor="#92A3FD"
            color="white"
            _hover={{ bg: "#C58BF2" }}
            p="10px"
            m="10px"
            size="lg"
            className={`timer-controller-btn ${
              isPauseBtnDisabled ? "disabled" : ""
            }`}
            disabled={isPauseBtnDisabled}
            onClick={pauseHandler}
          >
            pause
          </Button>
          <Button
            bgColor="#92A3FD"
            color="white"
            _hover={{ bg: "#C58BF2" }}
            p="10px"
            m="10px"
            size="lg"
            className={`timer-controller-btn ${
              isResumeBtnDisabled ? "disabled" : ""
            }`}
            disabled={isResumeBtnDisabled}
            onClick={resumeHandler}
          >
            resume
          </Button>
        </Container>
      </Container>
    );
  };
  
  export default Exercise1;
  
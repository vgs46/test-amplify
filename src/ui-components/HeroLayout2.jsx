/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { EmailCollection } from "../models";
import { schema } from "../models/schema";
import {
  Button,
  Flex,
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function HeroLayout2(props) {
  const { overrides, ...rest } = props;
  const [textFieldValue, setTextFieldValue] = useStateMutationAction("");
  const buttonOnClick = useDataStoreCreateAction({
    fields: { email_id: textFieldValue },
    model: EmailCollection,
    schema: schema,
  });
  return (
    <View
      width="1440px"
      height="858px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "HeroLayout2")}
    >
      <Image
        position="absolute"
        top="0%"
        bottom="0%"
        height="100%"
        left="0%"
        right="0%"
        width="100%"
        padding="0px 0px 0px 0px"
        src="https://svgshare.com/i/jd3.svg"
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <TextField
        display="flex"
        gap="8px"
        position="absolute"
        top="38.34%"
        bottom="56.99%"
        left="6.11%"
        right="73.06%"
        direction="column"
        width="300px"
        height="40px"
        padding="0px 0px 0px 0px"
        placeholder="Enter email to receive link "
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        value={textFieldValue}
        onChange={(event) => {
          setTextFieldValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField")}
      ></TextField>
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="38.34%"
        bottom="56.99%"
        left="28.33%"
        right="61.25%"
        direction="row"
        width="150px"
        height="40px"
        justifyContent="center"
        alignItems="center"
        backgroundColor="rgba(13,26,38,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Get Demo Link"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
      <Flex
        gap="24px"
        position="absolute"
        top="17.37%"
        bottom="69.93%"
        left="4.31%"
        right="29.03%"
        direction="column"
        width="960px"
        height="109px"
        justifyContent="center"
        alignItems="center"
        padding="0px 445px 0px 0px"
        {...getOverrideProps(overrides, "Type Lock Up")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Host & Share Race Photos in Simple Steps"
          {...getOverrideProps(overrides, "LOREM IPSUM")}
        ></Text>
        <Flex
          gap="16px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Main Body")}
        >
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="30px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Get AI generated tags for easy search"
            {...getOverrideProps(
              overrides,
              "Ut enim ad minim veniam quis nostrud"
            )}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="If you are managing marathon photographs, this tool is fo you.  You can launch seller pages, transact with users, send notifications to participants, all in simple steps. Try out the demo account."
            {...getOverrideProps(
              overrides,
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
            )}
          ></Text>
        </Flex>
      </Flex>
    </View>
  );
}

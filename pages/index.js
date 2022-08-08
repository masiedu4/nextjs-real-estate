/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 06/08/2022 - 23:48:49
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 06/08/2022
 * - Author          : Michael
 * - Modification    :
 **/
import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} alt="banner" width={500} height={300} />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1} <br /> {title2}
      </Text>
      <Text
        color="gray.700"
        fontSize="lg"
        fontWeight="medium"
        paddingTop="3"
        paddingBottom="3"
      >
        {desc1} <br /> {desc2}
      </Text>
      <Button fontSize="xl">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default function Home() {
  return (
    <div className="container">
      <h1> Hello World </h1>
      <Banner
        purpose="Rent A Home"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Rent a home for your family, friends or colleague"
        desc2="and more"
        buttonText="Explore Homes"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Banner
        purpose="Buy a Home"
        title1="Buy Homes for"
        title2="Yourself and loved ones! "
        desc1="Rent a home for your family, friends or colleague"
        desc2="and more"
        buttonText="Buy Homes"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
    </div>
  );
}

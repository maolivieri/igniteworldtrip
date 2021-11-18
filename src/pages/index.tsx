import { Flex, Heading } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Prismic from "@prismicio/client";
import Head from "next/head";
import Banner from "../components/Banner";
import Caracteristicas from "../components/Caracteristicas";
import Header from "../components/Header";
import Separador from "../components/Separador";
import Slider from "../components/Slider";
import { getPrismicClient } from "../services/prismic";

type ContinentData = {
  uid: string;
  data: {
    title: string;
    summary: string;
    image: {
      url: string;
    };
  };
};

type Continent = {
  slug: string;
  title: string;
  summary: string;
  image: string;
};

interface HomeProps {
  continents: Continent[];
}

export default function Home({ continents }: HomeProps) {
  return (
    <Flex direction='column'>
      <Head>
        <title>WorldTrip | Olivieri - Home</title>
        <meta property='og:image' content='/ogimage.png' />
        <meta property='og:image:secure_url' content='/ogimage.png' />
      </Head>

      <Header />
      <Banner />
      <Caracteristicas />
      <Separador />

      <Heading
        textAlign='center'
        fontWeight='500'
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>

      {/* <Slider continents={continents} /> */}
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.Predicates.at("document.type", "continent"),
  ]);

  console.log(response);

  const continents = response.results.map((continent: ContinentData) => {
    return {
      slug: continent.uid,
      title: continent.data.title,
      summary: continent.data.summary,
      image: continent.data.image.url,
    };
  });

  return {
    props: {
      continents,
    },
  };
};

import React, { useEffect } from "react";
import {
  Heading,
  Center,
  Box,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import "./FAQ.scss";

const FAQ = () => {
  useEffect(() => {
    document.title = "FAQ - MAXIMA 2021";
  }, []);

  return (
    <Flex direction="column" className="faqpage-container">
      <Center mb="2rem" w="100%" textAlign="center">
        <div className="title">Frequently Asked Questions</div>
      </Center>
      <Accordion allowMultiple mt="1rem">
        <AccordionItem>
          <h2>
            <AccordionButton
              _expanded={{ bg: "#EB2378", color: "white", borderRadius: "5px" }}
              _hover={{ bg: "#EB2378", color: "white" }}
            >
              <Box flex="1" textAlign="left" className="faqpage-title">
                Apakah wajib untuk mendaftar akun terlebih dahulu sebelum
                mengunjungi HoME MAXIMA 2021?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            border="1px solid gray"
            borderRadius="0 0 5px 5px"
            mb={5}
            className="desc-detail"
          >
            Tidak perlu ya, untuk mengunjungi HoME, Maximers dapat langsung
            akses melalui laman maxima.umn.ac.id dan pilih menu bagian HoME.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton
              _expanded={{ bg: "#164273", color: "white", borderRadius: "5px" }}
              _hover={{ bg: "#164273", color: "white" }}
            >
              <Box flex="1" textAlign="left" className="faqpage-title">
                Apakah diwajibkan melihat seluruh 8 zona yang ada?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            border="1px solid gray"
            borderRadius="0 0 5px 5px"
            mb={5}
            className="desc-detail"
          >
            Tidak diwajibkan untuk mengunjungi seluruh 8 zona yang ada. Akan
            tetapi, akan lebih baik apabila Maximers dapat mengunjungi seluruh
            zonanya. Dengan begitu, bekal informasi yang Maximers miliki makin
            banyak, sehingga ketika memilih STATE nanti, Maximers pun menjadi
            makin yakin akan pilihannya.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton
              _expanded={{
                bg: "#EB2378",
                color: "white",
                borderRadius: "5px 5px 0 0",
              }}
              _hover={{ bg: "#EB2378", color: "white" }}
            >
              <Box flex="1" textAlign="left" className="faqpage-title">
                Apakah wajib untuk post Twibbon?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            border="1px solid gray"
            borderRadius="0 0 5px 5px"
            mb={5}
            className="desc-detail"
          >
            Twibbon disediakan sebagai wadah bagi Maximers untuk mengekspresikan
            partisipasinya dalam meramaikan HoME MAXIMA 2021. Twibbon tidak
            bersifat wajib, tetapi Maximers diharapkan untuk dapat
            berpartisipasi meramaikan HoME dengan memasang Twibbon. Pemasangan
            Twibbon menjadi wajib apabila Maximers mengikuti Zeppelin HoME
            Competition, karena Twibbon merupakan syarat untuk mengikuti
            Zeppelin HoME Competition. Informasi mengenai Twibbon dapat dilihat
            pada laman HoME setelah Maximers mengakhiri perjalanannya di HoME.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton
              _expanded={{ bg: "#164273", color: "white", borderRadius: "5px" }}
              _hover={{ bg: "#164273", color: "white" }}
            >
              <Box flex="1" textAlign="left" className="faqpage-title">
                Apakah wajib mengikuti Zeppelin HoME Competition?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            border="1px solid gray"
            borderRadius="0 0 5px 5px"
            mb={5}
            className="desc-detail"
          >
            Hadirnya Zeppelin HoME Competition diharapkan dapat membantu
            Maximers dalam merangkai mimpi menjadi langkah-langkah kecil.
            Partisipasi Maximers di dalam Zeppelin HoME Competition ini tidak
            bersifat wajib. Namun, terdapat SKKM Minat & Bakat dan hadiah yang
            menarik bagi Maximers yang mengikuti serta memenangkan Zeppelin HoME
            Competition. Informasi mengenai Zeppelin HoME Competition dapat
            Maximers lihat pada laman HoME setelah Maximers membaca informasi
            seputar Twibbon.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};

export default FAQ;

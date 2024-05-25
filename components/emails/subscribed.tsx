import { Body } from "@react-email/body";
import { Button } from "@react-email/button";
import { Column } from "@react-email/column";
import { Container } from "@react-email/container";
import { Head } from "@react-email/head";
import { Heading } from "@react-email/heading";
import { Hr } from "@react-email/hr";
import { Html } from "@react-email/html";
import { Img } from "@react-email/img";
import { Link } from "@react-email/link";
import { Preview } from "@react-email/preview";
import { Row } from "@react-email/row";
import { Section } from "@react-email/section";
import { Tailwind } from "@react-email/tailwind";
import { Text } from "@react-email/text";
  import * as React from 'react';
  
  interface SubscribedEmailProps {
    userImage?: string;
    firstName?: string;
    email?: string;
  }
  
  
  export const SubscribedEmail = ({ firstName }: SubscribedEmailProps) => {
    const previewText = `Impulsemos nuestros sueños juntos!`;
  
    return (
      <Html>
        <Head />
        <Preview>{previewText}</Preview>
        <Tailwind>
          <Body className="bg-white my-auto mx-auto font-sans">
            <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
              <Section className="mt-[32px]">
                <Img
                  src="https://www.dreamhub.agency/assets/images/logo/favicon.png"
                  width="40"
                  height="37"
                  alt="Vercel"
                  className="my-0 mx-auto"
                />
              </Section>
              <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                ¡Te damos la bienvenida a <strong>Dreamhub</strong>!
              </Heading>
              <Text className="text-black text-[14px] leading-[24px]">
                Hola {firstName},
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
              En el corazón de Dreamhub, <strong>la Tokenización</strong> es la llave que transforma tus activos en 
              oportunidades digitales. Con nosotros, no solo obtienes tecnología, sino la magia de compartir, intercambiar 
              y construir algo verdaderamente extraordinario. ¡Es el poder de reinventar lo cotidiano! 🚀
              </Text>
              <Section>
                <Row>
                  <Column align="right">
                    <Img className="rounded-full" src={`https://www.dreamhub.agency/assets/images/item/arte.png`} width="84" height="84" />
                  </Column>
                  <Column align="center">
                    <Img
                      src={`https://www.dreamhub.agency/assets/images/item/lightline.png`}
                      width="16"
                      height="12"
                      alt="invited you to"
                    />
                  </Column>
                  <Column align="left">
                    <Img className="rounded-full" src={`https://www.dreamhub.agency/assets/images/item/triangulo.png`} width="104" height="104" />
                  </Column>
                </Row>
              </Section>
            
              <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
              <Text className="text-[#666666] text-[12px] leading-[24px]">
                @ {new Date ().getFullYear()} Dreamhub es una marca registrada de MXHUB Ecosistema Blockchain S.A. de C.V.
              </Text>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  };
  
  export default SubscribedEmail;
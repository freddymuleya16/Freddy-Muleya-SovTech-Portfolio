import React from 'react';

import { Section, SectionText, SectionTitle } from '@styles/GlobalComponents';
import Button from '@styles/GlobalComponents/Button';
import { HeroImg, LeftSection } from './HeroStyles';
import ProfilePicture from './ProfilePicture.jpg';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <HeroImg src={"./ProfilePicture.jpg"}/>
      <SectionTitle main center>
        I am Freddy Muleya.
      </SectionTitle>
      <SectionText>
        A software engineer who constantly seeks out innovative solutions to everyday problems.
        Well-versed in numerous programming languages including C#, JavaScript, PHP OOP, SQL, JAVA, Android Kotlin.
        I want to be a developer at SovTech because my dream is to be a software develpoer and SovTech is one of the best software 
        development company and the experience i will recieve from SovTech will help me archieve my goals
      </SectionText>
      <Button onClick={()=>window.location="mailto:freddymuleya16@gmail.com"}>Contact me</Button>
    </LeftSection>
    
  </Section>
);
export default Hero;
import React from 'react'
import { Box, Boxes, BoxNum, BoxText , Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Certificates } from '../../constants/constants';



function certificate() {
    return (
        <Section><SectionDivider />
        <br />
    <SectionTitle>Certificates</SectionTitle>
    <Boxes>
      {Certificates.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{ card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
    )
}

export default certificate

import React from 'react'
import { Box, Boxes, BoxNum, BoxText, Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Programming } from '../../constants/constants';


function programming() {
  return (
    <Section><SectionDivider />
    <br />
      <SectionTitle>Progamming languages</SectionTitle>
      <Boxes>
        {Programming.map((card, index) => (
          <Box key={index}>
            <BoxNum>{card.number}+</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
    </Section>
  )
}

export default programming

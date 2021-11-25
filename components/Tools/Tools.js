import React from 'react'
import { Box, Boxes, BoxNum, BoxText , Section, SectionDivider, SectionTitle }from '../../styles/GlobalComponents';
import { Tools } from '../../constants/constants';


function tools() {
    return (
        <Section><SectionDivider />
        <br />
        <SectionTitle>Tools</SectionTitle>
        <Boxes>
          {Tools.map((card, index) => (
            <Box key={index}>
              <BoxNum>{card.number}+</BoxNum>
              <BoxText>{ card.text}</BoxText>
            </Box>
          ))}
        </Boxes>
      </Section>
    )
}

export default tools

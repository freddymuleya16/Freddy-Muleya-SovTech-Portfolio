import React from 'react'
import TimeLine from '@components/TimeLine/TimeLine'
import { Section, SectionText, SectionTitle } from '@styles/GlobalComponents';
import { LeftSection } from '@styles/pageStyles';
import { Layout } from '@components/layout/Layout';


function about() {
    return (
      <Layout>
        <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        About Freddy Muleya
      </SectionTitle>
      <SectionText>
        Full Name:		    Freddy Muleya<br/>
        Gender: 		    Male <br/>
        Marital Status:     Single <br/>
        Nationality: 		South African <br/>
        Ethnic Group: 		African<br/>
        Health:			    Good
      </SectionText>
      <TimeLine/>
    </LeftSection>
  </Section>
  </Layout>
    )
}

export default about

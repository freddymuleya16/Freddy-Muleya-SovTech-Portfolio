import React from 'react'

import { Section, SectionText, SectionTitle } from '@styles/GlobalComponents';
import { LeftSection } from '@styles/pageStyles';

import { Layout } from '@components/layout/Layout';
import { ExternalLinks } from '@components/Projects/ProjectsStyles';
import TimeLine from '@components/TimeLine/TimeLine';
function contact() {
    return (
      <Layout>
        <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        About Freddy Muleya
      </SectionTitle>
      <SectionText>
        Phone:      +27 76 569 0847 <br/>
        Email:      freddymuleya16@gmail.com<br/>
        Address:    3868 Australia Ave, Cosmo City, Roodepoort, 2188, Gauteng, South Africa<br/>
        Postal:     P.O Box 1285, Musina, 0900<br/>
        LinkedIn:   <ExternalLinks href="linkedin.com/in/freddy-muleya-994341116">Freddy Muleya LinkedIn</ExternalLinks><br/>
        Github:     <ExternalLinks href="https://github.com/freddymuleya16/freddymuleya16/tree/main">Freddy Muleya Github</ExternalLinks><br/>

      </SectionText>
      <TimeLine/>
    </LeftSection>
  </Section>
  </Layout>
    )
}

export default contact

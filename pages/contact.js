import React from 'react'

import { ExternalLinks, Section, SectionText, SectionTitle } from '@styles/GlobalComponents';
import { LeftSection } from '@styles/pageStyles';

import { Layout } from '@components/layout/Layout';
function contact() {
  return (
    <Layout>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            Contact Freddy Muleya
          </SectionTitle>
          <SectionText>
            <table>
              <tr>
                <td style={{ width: "20px" }}>Phone:</td>
                <td>+27 76 569 0847</td>
              </tr>
              <tr>
                <td style={{ width: "20px" }}>Email:</td>
                <td>freddymuleya16@gmail.com</td>
              </tr>
              <tr>
                <td style={{ width: "20px" }}>Address:</td>
                <td>3868 Australia Ave, Cosmo City, Roodepoort, 2188, Gauteng, South Africa</td>
              </tr>
              <tr>
                <td style={{ width: "20px" }}>Postal:</td>
                <td>P.O Box 1285, Musina, 0900</td>
              </tr>
              <tr>
                <td style={{ width: "20px" }}>LinkedIn:</td>
                <td><ExternalLinks href="linkedin.com/in/freddy-muleya-994341116">Freddy Muleya LinkedIn</ExternalLinks></td>
              </tr>
              <tr>
                <td style={{ width: "30rem" }}>Github:</td>
                <td><ExternalLinks href="https://github.com/freddymuleya16/freddymuleya16/tree/main">Freddy Muleya Github</ExternalLinks><br /></td>
              </tr>
            </table>
          </SectionText>

        </LeftSection>
      </Section>
    </Layout>
  )
}

export default contact

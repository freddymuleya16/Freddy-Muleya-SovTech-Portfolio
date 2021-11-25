import Technologies from '@components/Technologies/Technologies'
import React from 'react'

import { Layout } from '@components/layout/Layout';
import Tools from '@components/Tools/Tools';
import Certificate from '@components/Certificates/Certificate';
import Programming from '@components/Programming/Programming';
function skills() {
    return (
        <Layout>
            <Technologies />
            <Tools />
            <Certificate />
            <Programming/>
        </Layout>
    )
}

export default skills

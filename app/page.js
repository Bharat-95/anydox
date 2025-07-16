import React from 'react'
import Hero from '../components/Hero'
import Services from '@/components/Services'
import Explore from '@/components/Explore'
import Management from '@/components/Management'
import IntegrationsSection from '@/components/Integrate'
import Seperator from '@/components/Seperator'
import Separator1 from '@/components/Seperator1'
import Separator2 from '@/components/Seperator2'

const page = () => {
  return (
    <div>
    <Hero />
    <div className='z-10 relative'>
    <Seperator />
    <Services />
    <Separator1 />
    <Explore />
    <Separator2 />
    <Management />
    <Separator1 />
    <IntegrationsSection />
    </div>
    </div>
  )
}

export default page
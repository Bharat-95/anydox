import React from 'react'
import Hero from '../components/Hero'
import Services from '@/components/Services'
import Explore from '@/components/Explore'
import Management from '@/components/Management'
import IntegrationsSection from '@/components/Integrate'

const page = () => {
  return (
    <div>
    <Hero />
    <Services />
    <Explore />
    <Management />
    <IntegrationsSection />
    </div>
  )
}

export default page
import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'

import thumbMargelo from '../public/images/works/margelo_eyecatch.png'

import thumbStyly from '../public/images/works/styly_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdro" title="Netflix 2.0" thumbnail={thumbInkdrop}>
            A cloned Netflix Plateform 
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="walknote"
            title="MAM"
            thumbnail={thumbWalknote}
          >
            E-commmerce Website 
          </WorkGridItem>
        </Section>

    
          
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="margelo" thumbnail={thumbMargelo} title="First_Portfolio">
          </WorkGridItem>
        </Section>
        
        <Section delay={0.3}>
          <WorkGridItem id="styl" thumbnail={thumbStyly} title="MyApp">
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

       
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
       

      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'

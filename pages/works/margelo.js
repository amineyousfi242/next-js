import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Margelo">
    <Container>
      <Title>
        Portfolio <Badge>2021</Badge>
      </Title>
      <P>
        Building my first ever portfolio to practice my skills in
        HTML,CSS and JavaScript   
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="https://amine-yousfi-portfolio.netlify.app/" target="_blank">
            https://amine-yousfi-portfolio.netlify.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            HTML / CSS / JAVASCRIPT
          </span>
        </ListItem>
        <ListItem>
          
         
        </ListItem>
      </List>

      <WorkImage src="/images/works/margelo_eyecatch.png" alt="Website" />

      

      <WorkImage src="/images/works/margelo_01.png" alt="Margelo" />
      <WorkImage src="/images/works/margelo_02.png" alt="Margelo" />
      <WorkImage src="/images/works/margelo_03.png" alt="Margelo" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

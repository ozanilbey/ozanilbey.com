// Components
import Content from '@source/components/layout/content/Content'
import Heading from '@source/components/interface/heading/Heading'
import Media from '@source/components/interface/media/Media'

// Content: Works > Work > Body > Siberest posters
function SiberestPosters () {
  return (
    <>
      <Content>
        <Media
          width={864}
          type="image"
          className="media"
          source="/siberest-posters/teaser.png" />
        <p className="lead">Siberest is a <strong>cybersecurity company</strong> located in Ankara, Turkey. Its mission is to build a local approach to cybersecurity problems with its global know-how.</p>
        <p className="lead">I designed two simple posters for Siberest <strong>in 2015</strong> to be used in an international cybersecurity convention to convey the company’s message clearly.</p>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Posters
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/siberest-posters/01.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/siberest-posters/02.png" />
      </Content>
    </>
  )
}

// Export
export default SiberestPosters

// Components
import Content from '@source/components/layout/content/Content'
import Heading from '@source/components/interface/heading/Heading'
import Media from '@source/components/interface/media/Media'

// Content: Works > Work > Body > invport web application
function InvportWebApplication () {
  return (
    <>
      <Content>
        <Media
          width={864}
          type="image"
          className="media"
          source="/invport-web-application/teaser.png" />
        <p className="lead">invport is an <strong>idea crowdsourcing platform</strong> aiming to start and develop innovative industrial projects. It is built with the purpose of unveiling the advantages of university-industry collaboration.</p>
        <p className="lead">I designed <strong>a clean and responsive user interface</strong> and build an HTML, CSS, and jQuery frontend for invport <strong>in 2017</strong>. I also provided icon sets representing each industry.</p>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Desktop Screens
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/invport-web-application/01.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/invport-web-application/02.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/invport-web-application/03.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/invport-web-application/04.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/invport-web-application/05.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/invport-web-application/06.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/invport-web-application/07.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/invport-web-application/08.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/invport-web-application/09.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/invport-web-application/10.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/invport-web-application/11.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/invport-web-application/12.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/invport-web-application/13.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/invport-web-application/14.png" />
      </Content>
    </>
  )
}

// Export
export default InvportWebApplication

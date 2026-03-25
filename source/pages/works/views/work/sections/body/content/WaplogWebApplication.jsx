// Components
import Callout from '@source/components/interface/callout/Callout'
import Content from '@source/components/layout/content/Content'
import Heading from '@source/components/interface/heading/Heading'
import Link from '@source/components/interface/link/Link'
import Media from '@source/components/interface/media/Media'

// Content: Works > Work > Body > Waplog web application
function WaplogWebApplication () {
  return (
    <>
      <Content>
        <Media
          width={864}
          type="image"
          className="media"
          source="/waplog-web-application/teaser.png" />
        <p className="lead">Waplog is a <strong>dating platform</strong> for people who are on a quest to find their soulmate. It has <strong>over 90 million members</strong> from more than 50 countries. It provides over 20 universal languages.</p>
        <p className="lead">I designed an attractive user interface and crafted a frontend for Waplog Web <strong>in 2012</strong>.</p>
        <Callout
          size="large"
          intent="information"
          hasBackground={false}
          className="information">
          I also worked on user interface design of <Link to="/works/waplog-mobile-application">Waplog Mobile</Link> (mobile website + iOS app + Android app) in 2010.
        </Callout>
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Screens
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/waplog-web-application/01.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/waplog-web-application/02.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/waplog-web-application/03.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/waplog-web-application/04.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/waplog-web-application/05.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/waplog-web-application/06.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/waplog-web-application/07.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/waplog-web-application/08.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/waplog-web-application/09.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/waplog-web-application/10.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/waplog-web-application/11.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/waplog-web-application/12.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/waplog-web-application/13.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/waplog-web-application/14.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/waplog-web-application/15.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/waplog-web-application/16.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/waplog-web-application/17.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/waplog-web-application/18.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/waplog-web-application/19.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/waplog-web-application/20.png" />
      </Content>
    </>
  )
}

// Export
export default WaplogWebApplication

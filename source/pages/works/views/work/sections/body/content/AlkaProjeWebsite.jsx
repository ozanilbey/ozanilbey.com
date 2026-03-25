// Components
import Content from '@source/components/layout/content/Content'
import Heading from '@source/components/interface/heading/Heading'
import Media from '@source/components/interface/media/Media'

// Content: Works > Work > Body > Alka Proje website
function AlkaProjeWebsite () {
  return (
    <>
      <Content>
        <Media
          width={864}
          type="image"
          className="media"
          source="/alka-proje-website/teaser.png" />
        <p className="lead">Alka Proje is an <strong>architecture company</strong> located in Ankara, Turkey.</p>
        <p className="lead">I designed a sleek and responsive user interface for Alka Proje <strong>in 2016</strong>. I crafted the website with HTML, CSS, jQuery and a file-based JSON database. I also provided a solution to filter and sort the projects displayed; without messing the responsive design.</p>
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
          source="/alka-proje-website/01.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/alka-proje-website/02.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/alka-proje-website/03.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/alka-proje-website/04.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/alka-proje-website/05.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/alka-proje-website/06.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/alka-proje-website/07.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/alka-proje-website/08.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/alka-proje-website/09.png" />
      </Content>
      <Content>
        <Heading
          rank={2}
          className="title">
          Mobile Screens
        </Heading>
        <Media
          width={1152}
          type="image"
          className="media"
          source="/alka-proje-website/10.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/alka-proje-website/11.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/alka-proje-website/12.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/alka-proje-website/13.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/alka-proje-website/14.png" />
        <Media
          width={1152}
          type="image"
          className="media"
          source="/alka-proje-website/15.png" />
      </Content>
    </>
  )
}

// Export
export default AlkaProjeWebsite

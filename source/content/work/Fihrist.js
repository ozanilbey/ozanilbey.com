import React from 'react'

// import Media from '~/components/models/media/Media.js'
const Media = () => <p>Media goes here.</p>

function Fihrist () {
  return (
    <div id="summary" className="container">
      <img src="//res.cloudinary.com/ozanilbey/image/upload/c_limit,fl_png8,w_576/fihrist/logo.png" className="logo" />
      <img src="//res.cloudinary.com/ozanilbey/image/upload/c_limit,fl_png8,w_864/fihrist/teaser.png" className="partial" />
      <p>Fihrist is a platform for reading curated articles. There is no imagery, no ads, no moving items on the article pages to prevent an uncomfortable experience.</p>
      <h2>Desktop Screens</h2>
      <Media type="image" width="1152" source="/fihrist/01.png" />
      <Media type="image" width="1152" source="/fihrist/02.png" />
      <Media type="image" width="1152" source="/fihrist/03.png" />
      <Media type="image" width="1152" source="/fihrist/04.png" />
      <Media type="image" width="1152" source="/fihrist/05.png" />
      <Media type="image" width="1152" source="/fihrist/06.png" />
      <Media type="image" width="1152" source="/fihrist/07.png" />
      <h2>Mobile Screens</h2>
      <Media type="image" width="1152" source="/fihrist/08.png" />
      <Media type="image" width="1152" source="/fihrist/09.png" />
      <Media type="image" width="1152" source="/fihrist/10.png" />
      <Media type="image" width="1152" source="/fihrist/11.png" />
      <Media type="image" width="1152" source="/fihrist/12.png" />
      <Media type="image" width="1152" source="/fihrist/13.png" />
      <Media type="image" width="1152" source="/fihrist/14.png" />
      <Media type="image" width="1152" source="/fihrist/15.png" />
    </div>
  )
}

export default Fihrist

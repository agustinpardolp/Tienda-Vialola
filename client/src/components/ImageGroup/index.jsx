import React from 'react'
import { Divider, Image } from 'semantic-ui-react'

const src = '/images/wireframe/image.png'

const ImageGroup = ({element}) => {
 
return(

  <div>
    <Divider hidden />
    <Image.Group size='small'>
    <Image src={`/images/img-products/${element.section.name}/${element.img1}`} />
    <Image src={`/images/img-products/${element.section.name}/${element.img2}`} />
    <Image src={`/images/img-products/${element.section.name}/${element.img3}`} />
    </Image.Group>
  </div>
)
}

export default ImageGroup

import Image from 'next/image'
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

export default function LightboxGallery({ items }) {
  return (
    // <div className='flex justify-between'>
    //   <div className='mr-2'>
    //     <Image
    //       src={image}
    //       alt={title}
    //       width={400}
    //       height={300}
    //       className='rounded mx-2 md:m-2 cursor-pointer'
    //     />
    //   </div>
    //   <div>
    //     <Image
    //       src={image2}
    //       alt={title}
    //       width={400}
    //       height={300}
    //       className='rounded mx-2 md:m-2 cursor-pointer'
    //     />
    //   </div>
    // </div>
    <Gallery>
      {items.map((item, index) => {
        return (
          <Item
            key={index}
            original={item.imageUrl}
            thumbnail={item.imageUrl}
            // width='1024'
            // height='768'
            // width={item.width}
            // height={item.height}
          >
            {({ ref, open }) => (
              <div
                ref={ref}
                onClick={open}
                className='relative w-full max-w-screen-md h-auto'>
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                  // className='rounded mx-2 md:m-2 cursor-pointer'
                  className='rounded'
                />
              </div>
            )}
          </Item>
        )
      })}
      {/* <Item
        original='https://placekitten.com/1024/768?image=2'
        thumbnail='https://placekitten.com/80/60?image=2'
        width='1024'
        height='768'>
        {({ ref, open }) => (
          <img
            ref={ref}
            onClick={open}
            src='https://placekitten.com/80/60?image=2'
          />
        )}
      </Item> */}
    </Gallery>
  )
}

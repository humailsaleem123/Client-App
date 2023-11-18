import image1 from '../../Images/image-160.png';
import image2 from '../../Images/image-159.png';
import image3 from '../../Images/image-162.png';
import image4 from '../../Images/image-161.png';
import image5 from '../../Images/image-160.png';

export const sliderItems = [
  {
    id: 0,
    imageUrl: `${image1}`,
    itemTitle: "I pledged $700 and started a business ",
  },
  {
    id: 1,
    imageUrl: `${image2}`,
    itemTitle: "I pledged $700 and started a business ",
  },
  {
    id: 2,
    imageUrl: `${image3}`,
    itemTitle: "I pledged $700 and started a business ",
  },
  {
    id: 3,
    imageUrl: `${image4}`,
    itemTitle: "I pledged $700 and started a business ",
  },
  {
    id: 4,
    imageUrl: `${image5}`,
    itemTitle: "I pledged $700 and started a business ",
  },
  {
    id: 5,
    imageUrl: `${image2}`,
    itemTitle: "I pledged $700 and started a business ",
  },
  {
    id: 6,
    imageUrl: "https://i1.wp.com/handluggageonly.co.uk/wp-content/uploads/2015/05/IMG_2813-s.jpg?w=1600&ssl=1",
    itemTitle: "I pledged $700 and started a business ",
  },
]
export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
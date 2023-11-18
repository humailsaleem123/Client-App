export const sliderItems = [
  {
    id: 0,
    imageUrl: "https://picsum.photos/150?image=641",
    itemTitle: "TRAVEL THE WORLD",
  },
  {
    id: 1,
    imageUrl: "https://picsum.photos/150?image=641",
    itemTitle: "Cook everyday",
  },
  {
    id: 2,
    imageUrl: "https://picsum.photos/150?image=641",
    itemTitle: "Go to africa",
  },
  {
    id: 3,
    imageUrl: "https://picsum.photos/150?image=641",
    itemTitle: "Go to africa",
  },
  {
    id: 4,
    imageUrl: "https://picsum.photos/150?image=641",
    itemTitle: "Go to africa",
  },
  {
    id: 5,
    imageUrl: "https://picsum.photos/150?image=641",
    itemTitle: "Go to africa",
  },
]
export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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
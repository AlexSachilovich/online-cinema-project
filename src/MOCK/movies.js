const generateMovies = (qty) => {
  return new Array(qty).fill(null).map((_, index) => ({
    id: index,
    title: `Movie ${index}`,
    rating: "movie2.jpg",
    poster: `movie${index + 1}.jpg`,
    comments: [
      {
        title: "Comment 1",
        comment: "Lorem ipsum",
      },
    ],
  }));
};

export const MOVIES = generateMovies(18);

export const NEWS_ROUTES = {
  getNewsRoute: (categoryID: string) => {
    return `/api/news/${categoryID}`;
  },
  markAsReadRoute: (newsID: string) => {
    return `/api/news/${newsID}`;
  },
  getFavoritesNews: () => {
    return `/api/news/favorites`;
  },
  markAsFavoriteRoute: (newsID: string) => {
    return `/api/news/favorites/${newsID}`;
  },
  removeAsFavoriteRoute: (newsID: string) => {
    return `/api/news/favorites/${newsID}`;
  },
};

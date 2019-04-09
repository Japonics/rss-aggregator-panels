export const CHANNELS_ROUTES = {
  createChannelRoute: (): string => {
    return '/api/admin/channels';
  },
  updateChannelRoute: (categoryID: string): string => {
    return `/api/admin/channels/${categoryID}`;
  },
  deleteChannelRoute: (categoryID: string): string => {
    return `/api/admin/channels/${categoryID}`;
  }
};


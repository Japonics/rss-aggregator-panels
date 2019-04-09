export const CATEGORIES_ROUTES = {
  getCategoriesRoute: (): string => {
    return '/api/admin/categories';
  },
  createCategoryRoute: (): string => {
    return '/api/admin/categories';
  },
  updateCategoryRoute: (categoryID: string): string => {
    return `/api/admin/categories/${categoryID}`;
  },
  deleteCategoryRoute: (categoryID: string): string => {
    return `/api/admin/categories/${categoryID}`;
  }
};


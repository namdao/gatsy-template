const ROOTS_AUTH = "/auth";
const ROOTS_APP = "/app";

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: `${ROOTS_AUTH}/login`,
  register: `${ROOTS_AUTH}/register`,
};
export const PATH_APP = {
  root: ROOTS_APP,
  dashboard: `${ROOTS_APP}/dashboard`,
  analytics: `${ROOTS_APP}/analytics`,
  banking: `${ROOTS_APP}/banking`,
  booking: `${ROOTS_APP}/booking`,
  file: `${ROOTS_APP}/file`,
  fileManager: `${ROOTS_APP}/fileManager`,
  profile: `${ROOTS_APP}/profile`,
  user: {
    root: `${ROOTS_APP}/user`,
    profile: `${ROOTS_APP}/user/profile`,
    account: `${ROOTS_APP}/user/account`,
    cards: `${ROOTS_APP}/user/cards`,
    list: `${ROOTS_APP}/user/list`,
    create: `${ROOTS_APP}/user/create`,
    edit: `${ROOTS_APP}/user/edit`,
  },
  ecommerce: {
    root: `${ROOTS_APP}/ecommerce`,
    shop: `${ROOTS_APP}/ecommerce/shop`,
    product: `${ROOTS_APP}/ecommerce/product`,
    list: `${ROOTS_APP}/ecommerce/list`,
    create: `${ROOTS_APP}/ecommerce/create`,
    edit: `${ROOTS_APP}/ecommerce/edit`,
    checkout: `${ROOTS_APP}/ecommerce/checkout`,
  },
  invoice: {
    root: `${ROOTS_APP}/invoice`,
    list: `${ROOTS_APP}/invoice/list`,
    create: `${ROOTS_APP}/invoice/create`,
    edit: `${ROOTS_APP}/invoice/edit`,
    details: `${ROOTS_APP}/invoice/details`,
  },
  blog: {
    root: `${ROOTS_APP}/blog`,
    posts: `${ROOTS_APP}/blog/posts`,
    post: `${ROOTS_APP}/blog/post`,
    create: `${ROOTS_APP}/blog/create`,
  },
  orther: {
    permissionDenied: `${ROOTS_APP}/permission-denied`,
    blank: `${ROOTS_APP}/blank`,
  },
};

import React from "react";
// routes
import { PATH_APP } from "constant/routeConstant";
// components
import Label from "components/label";
import Iconify from "components/iconify";
import SvgColor from "components/svg-color";
import Svg from "utils/svg";

// ----------------------------------------------------------------------

const icon = (name: string) => {
  // @ts-ignore
  const iconSvg = Svg.navbar[name];
  return <SvgColor src={iconSvg} sx={{ width: 1, height: 1 }} />;
};

const ICONS = {
  blog: icon("icBlog"),
  cart: icon("icCart"),
  chat: icon("icChat"),
  mail: icon("icMail"),
  user: icon("icUser"),
  file: icon("icFile"),
  lock: icon("icLock"),
  label: icon("icLabel"),
  blank: icon("icBlank"),
  kanban: icon("icKanban"),
  folder: icon("icFolder"),
  banking: icon("icBanking"),
  booking: icon("icBooking"),
  invoice: icon("icInvoice"),
  calendar: icon("icCalendar"),
  disabled: icon("icDisabled"),
  external: icon("icExternal"),
  menuItem: icon("icMenuItem"),
  ecommerce: icon("icEcommerce"),
  analytics: icon("icAnalytics"),
  dashboard: icon("icDashboard"),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: "general",
    items: [
      { title: "app", path: PATH_APP.root, icon: ICONS.dashboard },
      {
        title: "ecommerce",
        path: PATH_APP.root,
        icon: ICONS.ecommerce,
      },
      {
        title: "analytics",
        path: PATH_APP.root,
        icon: ICONS.analytics,
      },
      {
        title: "banking",
        path: PATH_APP.root,
        icon: ICONS.banking,
      },
      {
        title: "booking",
        path: PATH_APP.root,
        icon: ICONS.booking,
      },
      { title: "file", path: PATH_APP.root, icon: ICONS.file },
    ],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: "management",
    items: [
      // USER
      {
        title: "user",
        path: PATH_APP.profile,
        icon: ICONS.user,
        children: [
          { title: "profile", path: PATH_APP.profile },
          { title: "cards", path: PATH_APP.profile },
          { title: "list", path: PATH_APP.profile },
          { title: "create", path: PATH_APP.profile },
          { title: "edit", path: PATH_APP.profile },
          { title: "account", path: PATH_APP.profile },
        ],
      },

      // E-COMMERCE
      {
        title: "ecommerce",
        path: PATH_APP.profile,
        icon: ICONS.cart,
        children: [
          { title: "shop", path: PATH_APP.profile },
          { title: "product", path: PATH_APP.profile },
          { title: "list", path: PATH_APP.profile },
          { title: "create", path: PATH_APP.profile },
          { title: "edit", path: PATH_APP.profile },
          { title: "checkout", path: PATH_APP.profile },
        ],
      },

      // INVOICE
      {
        title: "invoice",
        path: PATH_APP.root,
        icon: ICONS.invoice,
        children: [
          { title: "list", path: PATH_APP.root },
          { title: "details", path: PATH_APP.root },
          { title: "create", path: PATH_APP.root },
          { title: "edit", path: PATH_APP.root },
        ],
      },

      // BLOG
      {
        title: "blog",
        path: PATH_APP.root,
        icon: ICONS.blog,
        children: [
          { title: "posts", path: PATH_APP.root },
          { title: "post", path: PATH_APP.root },
          { title: "create", path: PATH_APP.root },
        ],
      },
      {
        title: "File manager",
        path: PATH_APP.root,
        icon: ICONS.folder,
      },
    ],
  },

  // APP
  // ----------------------------------------------------------------------
  {
    subheader: "app",
    items: [
      {
        title: "mail",
        path: PATH_APP.root,
        icon: ICONS.mail,
        info: <Label color="error">+32</Label>,
      },
      {
        title: "chat",
        path: PATH_APP.root,
        icon: ICONS.chat,
      },
      {
        title: "calendar",
        path: PATH_APP.root,
        icon: ICONS.calendar,
      },
      {
        title: "kanban",
        path: PATH_APP.root,
        icon: ICONS.kanban,
      },
    ],
  },

  // DEMO MENU STATES
  {
    subheader: "Other cases",
    items: [
      {
        // default roles : All roles can see this entry.
        // roles: ['user'] Only users can see this item.
        // roles: ['admin'] Only admin can see this item.
        // roles: ['admin', 'manager'] Only admin/manager can see this item.
        // Reference from 'src/guards/RoleBasedGuard'.
        title: "item_by_roles",
        path: PATH_APP.root,
        icon: ICONS.lock,
        roles: ["admin"],
        caption: "only_admin_can_see_this_item",
      },
      {
        title: "menu_level",
        path: "#/dashboard/menu_level",
        icon: ICONS.menuItem,
        children: [
          {
            title: "menu_level_2a",
            path: "#/dashboard/menu_level/menu_level_2a",
          },
          {
            title: "menu_level_2b",
            path: "#/dashboard/menu_level/menu_level_2b",
            children: [
              {
                title: "menu_level_3a",
                path: "#/dashboard/menu_level/menu_level_2b/menu_level_3a",
              },
              {
                title: "menu_level_3b",
                path: "#/dashboard/menu_level/menu_level_2b/menu_level_3b",
                children: [
                  {
                    title: "menu_level_4a",
                    path: "#/dashboard/menu_level/menu_level_2b/menu_level_3b/menu_level_4a",
                  },
                  {
                    title: "menu_level_4b",
                    path: "#/dashboard/menu_level/menu_level_2b/menu_level_3b/menu_level_4b",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "item_disabled",
        path: "#disabled",
        icon: ICONS.disabled,
        disabled: true,
      },

      {
        title: "item_label",
        path: "#label",
        icon: ICONS.label,
        info: (
          <Label color="info" startIcon={<Iconify icon="eva:email-fill" />}>
            NEW
          </Label>
        ),
      },
      {
        title: "item_caption",
        path: "#caption",
        icon: ICONS.menuItem,
        caption:
          "Quisque malesuada placerat nisl. In hac habitasse platea dictumst. Cras id dui. Pellentesque commodo eros a enim. Morbi mollis tellus ac sapien.",
      },
      {
        title: "item_external_link",
        path: "https://www.google.com/",
        icon: ICONS.external,
      },
      {
        title: "blank",
        path: PATH_APP.root,
        icon: ICONS.blank,
      },
    ],
  },
];

export default navConfig;

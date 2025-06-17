import * as Icons from "../icons";
import box from "./box.svg"

export const NAV_DATA = [
  {
    label: "MAIN MENU",
    items: [
      {
        title: "Dashboard",
        icon: Icons.HomeIcon,
        items: [
          {
            title: "Statistiques",
            url: "/",
          },
        ],
      },
      {
        title: "Produits",
        icon: Icons.ProductIcon,
        items: [
          {
            title: "Ajouter un produit",
            url: "/product/addproduct",
          },
          {
            title: "Liste des produits",
            url: "/product/listproduct",
          },
        ],
      },

            {
        title: "Commandes",
        icon: Icons.WirelessCheckout,
        items: [
          {
            title: "Liste des commandes",
            url: "/order",
          },
        ],
      },
        {
        title: "Temoignages",
        icon: Icons.IconTemoignage,
        items: [
          {
            title: "Ajouter Temoignage",
            url: "/reviews/addreviews",
          },
          {
            title: "Liste des Temoignages",
            url: "/reviews/listreviews",
          },
        ],
      },

      {
        title: "Calendar",
        url: "/calendar",
        icon: Icons.Calendar,
        items: [],
      },
      {
        title: "Profile",
        url: "/profile",
        icon: Icons.User,
        items: [],
      },
      {
        title: "Forms",
        icon: Icons.Alphabet,
        items: [
          {
            title: "Form Elements",
            url: "/forms/form-elements",
          },
          {
            title: "Form Layout",
            url: "/forms/form-layout",
          },
        ],
      },
      {
        title: "Tables",
        url: "/tables",
        icon: Icons.Table,
        items: [
          {
            title: "Tables",
            url: "/tables",
          },
        ],
      },
      {
        title: "Parametres",
        icon: Icons.OutlineSettings,
        items: [
          {
            title: "Settings",
            url: "/pages/settings",
          },
          {
            title: "Informations",
            url: "/pages/informations",
          },
        ],
      },
    ],
  },
  {
    label: "OTHERS",
    items: [
      {
        title: "Charts",
        icon: Icons.PieChart,
        items: [
          {
            title: "Basic Chart",
            url: "/charts/basic-chart",
          },
        ],
      },
      {
        title: "UI Elements",
        icon: Icons.FourCircle,
        items: [
          {
            title: "Alerts",
            url: "/ui-elements/alerts",
          },
          {
            title: "Buttons",
            url: "/ui-elements/buttons",
          },
        ],
      },
      {
        title: "Authentication",
        icon: Icons.Authentication,
        items: [
          {
            title: "Sign In",
            url: "/auth/sign-in",
          },
        ],
      },
    ],
  },
];

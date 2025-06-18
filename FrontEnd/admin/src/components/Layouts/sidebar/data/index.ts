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
            url: "/dashboard",
          },
        ],
      },
      {
        title: "Produits",
        icon: Icons.ProductIcon,
        items: [
          {
            title: "Ajouter un produit",
            url: "/dashboard/product/addproduct",
          },
          {
            title: "Liste des produits",
            url: "/dashboard/product/listproduct",
          },
        ],
      },

            {
        title: "Commandes",
        icon: Icons.WirelessCheckout,
        items: [
          {
            title: "Liste des commandes",
            url: "/dashboard/order",
          },
        ],
      },
        {
        title: "Temoignages",
        icon: Icons.IconTemoignage,
        items: [
          {
            title: "Ajouter Temoignage",
            url: "/dashboard/reviews/addreviews",
          },
          {
            title: "Liste des Temoignages",
            url: "/dashboard/reviews/listreviews",
          },
        ],
      },
       {
        title: "Sliders",
        icon: Icons.SliderHorizontalBroken,
        items: [
          {
            title: "Ajouter un Slider",
            url: "/dashboard/sliders/addslider",
          },
          {
            title: "Liste des Sliders",
            url: "/dashboard/sliders/listslider",
          },
        ],
      },
      {
        title: "Profile",
        url: "/dashboard/profile",
        icon: Icons.User,
        items: [],
      },   
      {
        title: "Parametres",
        icon: Icons.OutlineSettings,
        items: [
          {
            title: "Settings",
            url: "/dashboard/pages/settings",
          },
          {
            title: "Informations",
            url: "/dashboard/pages/informations",
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
            url: "/dashboard/charts/basic-chart",
          },
        ],
      },
      {
        title: "UI Elements",
        icon: Icons.FourCircle,
        items: [
          {
            title: "Alerts",
            url: "/dashboard/ui-elements/alerts",
          },
          {
            title: "Buttons",
            url: "/dashboard/ui-elements/buttons",
          },
        ],
      },
      {
        title: "Se Deconnecter",
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

import * as logos from "@/assets/logos";

export async function getTopProducts() {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return [
    {
      image: "/images/product/product-01.png",
      name: "Apple Watch Series 7",
      category: "Technologie",
      price: 11000,
      sold: 12,
      profit: 132000,
    },
    {
      image: "/images/product/product-02.png",
      name: "Macbook Pro M1",
      category: "Technologie",
      price: 540000,
      sold: 3,
      profit: 1620000,
    },
    {
      image: "/images/product/product-03.png",
      name: "Dell Inspiron 15",
      category: "Technologie",
      price: 230000,
      sold: 8,
      profit: 1840000,
    },
    {
      image: "/images/product/product-04.png",
      name: "HP Probook 450",
      category: "Technologie",
      price: 150000,
      sold: 15,
      profit: 2250000,
    },
  ];
}

export async function getInvoiceTableData() {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 1400));

  return [
    {
      name: "N0125896",
      price: 124000,
      date: "2023-01-13T18:00:00.000Z",
      status: "Payee",
    },
    {
      name: "N4592456",
      price: 59000,
      date: "2023-01-13T18:00:00.000Z",
      status: "Payee",
    },
    {
      name: "N0973678",
      price: 99000,
      date: "2023-01-13T18:00:00.000Z",
      status: "Impayee",
    },
    {
      name: "N0471298",
      price: 25000,
      date: "2023-01-13T18:00:00.000Z",
      status: "En cours",
    },
  ];
}

export async function getTopChannels() {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return [
    {
      name: "Google",
      visitors: 3456,
      revenues: 4220,
      sales: 3456,
      conversion: 2.59,
      logo: logos.google,
    },
    {
      name: "X.com",
      visitors: 3456,
      revenues: 4220,
      sales: 3456,
      conversion: 2.59,
      logo: logos.x,
    },
    {
      name: "Github",
      visitors: 3456,
      revenues: 4220,
      sales: 3456,
      conversion: 2.59,
      logo: logos.github,
    },
    {
      name: "Vimeo",
      visitors: 3456,
      revenues: 4220,
      sales: 3456,
      conversion: 2.59,
      logo: logos.vimeo,
    },
    {
      name: "Facebook",
      visitors: 3456,
      revenues: 4220,
      sales: 3456,
      conversion: 2.59,
      logo: logos.facebook,
    },
  ];
}

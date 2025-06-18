import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { InvoiceTable } from "@/components/Tables/invoice-table";


import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Liste des commandes",
};

export default function Orderpage() {
  return (
    <div>
        <Breadcrumb pageName="Liste des Commandes" />

      <div className="space-y-10">
        <InvoiceTable />
    </div>
    </div>
  )
}

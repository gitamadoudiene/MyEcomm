import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import type { Metadata } from "next";
import SettingsForm from "./components/SettingsForm";

export default function Informationpage() {
  return (
<div className="mx-auto w-full max-w-[1080px]">
      <Breadcrumb pageName="Informations" />

      <div className="grid w-full gap-8">
        <div className="col-span-5 xl:col-span-3">
         <SettingsForm />
        </div>
      </div>
    </div>
  )
}

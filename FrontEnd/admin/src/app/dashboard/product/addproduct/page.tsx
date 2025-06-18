import type { Metadata } from "next";

import { GlobeIcon } from "@/assets/icons";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import InputGroup from "@/components/FormElements/InputGroup";
import { TextAreaGroup } from "@/components/FormElements/InputGroup/text-area";
import MultiSelect from "@/components/FormElements/MultiSelect";
import { Select } from "@/components/FormElements/select";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";

export const metadata: Metadata = {
  title: "Ajouter un produit",
};

export default function AddProductPage() {
  return (
    <div>
      <Breadcrumb pageName="Ajouter un produit" />

      {/* // Showcase sections */}
    <div className="flex flex-col gap-9"> 
        <div className="flex flex-col gap-9">
          <ShowcaseSection title="Formulaire d'ajout de produit" className="space-y-5.5 !p-6.5">
<form action="">
             <InputGroup
              type="file"
              fileStyleVariant="style1"
              label="Choisir l'image du produit"
              placeholder="Attach file"
            />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <InputGroup
              label="Nom du produit"
              placeholder="Choisir le nom du produit"
              type="text"
            />

            <InputGroup
              label="Prix du produit"
              placeholder="0000000"
              type="number"
            />

        </div>
          
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <Select
              label="Selectioner la catégorie"
              items={[
                { label: "Technologie", value: "Technologie" },
                { label: "Bien-etre", value: "Bien-etre" },
                { label: "Alimentaire", value: "Alimentaire" },
              ]}
              defaultValue="No-category"
              prefixIcon={<GlobeIcon />}
            />

            <MultiSelect id="multiSelect" />
    </div>


            <TextAreaGroup
              label="Description du produit"
              placeholder="Veuillez renseigner une description de votre produit"
            />

                    <button className="flex w-full justify-center rounded-lg bg-primary p-[13px] font-medium text-white hover:bg-opacity-90">
         Ajouter
        </button>

 </form>
          </ShowcaseSection>
     
        </div>
    </div>


    </div>
  )
}

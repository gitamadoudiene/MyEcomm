import type { Metadata } from "next";
import { GlobeIcon } from "@/assets/icons";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import InputGroup from "@/components/FormElements/InputGroup";
import { TextAreaGroup } from "@/components/FormElements/InputGroup/text-area";

import { Select } from "@/components/FormElements/select";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";

export const metadata: Metadata = {
  title: "Ajouter un produit",
};

export default function AddReviewspage() {
  return (
    <div>
      <Breadcrumb pageName="Ajouter un Temoignages" />

      {/* // Showcase sections */}
    <div className="flex flex-col gap-9"> 
        <div className="flex flex-col gap-9">
          <ShowcaseSection title="Formulaire d'ajout de produit" className="space-y-5.5 !p-6.5">
<form action="">
             <InputGroup
              type="file"
              fileStyleVariant="style1"
              label="Choisir l'image du Client"
              placeholder="Attach file"
            />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <InputGroup
              label="Nom du Client"
              placeholder="John Doe"
              type="text"
            />

             <InputGroup
              label="Poste du Client"
              placeholder="Choisir le poste"
              type="text"
            />

        </div>
          
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <Select
              label="Selectioner le nombre d'etoiles"
              items={[
                { label: "1", value: "1" },
                { label: "2", value: "2" },
                { label: "3", value: "3" },
                { label: "4", value: "4" },
                { label: "5", value: "5" },
              ]}
              defaultValue="No-category"
              prefixIcon={<GlobeIcon />}
            />
            
            <TextAreaGroup
              label="Temoignage"
              placeholder="Veuillez renseigner le temoignage du client"
            />

    

            
    </div>

                <button className="flex w-full justify-center rounded-lg bg-primary p-[13px] font-medium text-white hover:bg-opacity-90">
          AJOUTER
        </button>


            </form>
            </ShowcaseSection>
        </div>
    </div>
    </div>
  )
}

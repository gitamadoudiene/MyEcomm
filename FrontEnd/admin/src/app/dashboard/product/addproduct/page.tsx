"use client";

import { useState } from "react";
import axios from "axios";

import { GlobeIcon } from "@/assets/icons";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import InputGroup from "@/components/FormElements/InputGroup";
import { TextAreaGroup } from "@/components/FormElements/InputGroup/text-area";
import MultiSelect from "@/components/FormElements/MultiSelect";
import { Select } from "@/components/FormElements/select";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";

// Déclaration globale du type
type ProductData = {
  name: string;
  description: string;
  image: string;
  imagePreview: string;
  price: string;
  category: string;
  tags: string[];
};

export default function AddProductPage() {
  const [data, setData] = useState<ProductData>({
    name: "",
    description: "",
    image: "",
    imagePreview: "",
    price: "",
    category: "",
    tags: [],
  });

  const resetForm = () => {
    setData({
      name: "",
      description: "",
      image: "",
      imagePreview: "",
      price: "",
      category: "",
      tags: [],
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  const { name, type, value } = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

  if (type === "file" && e.target instanceof HTMLInputElement) {
    const files = e.target.files;
    const file = files && files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;

        if (typeof result === "string") {
          setData((prev) => ({
            ...prev,
            image: result,
            imagePreview: result,
          }));
        } else {
          console.error("Le fichier n'est pas une image valide.");
        }
      };

      reader.readAsDataURL(file);
    }
  } else {
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  };

const handleTagChange = (selectedTags: string[]) => {
  setData((prev) => ({
    ...prev,
    tags: selectedTags,
  }));
};

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!data.image) {
      alert("Veuillez sélectionner une image !");
      return;
    }

    try {
      const payload = {
        name: data.name,
        description: data.description,
        price: data.price,
        category: data.category,
        tags: data.tags,
        image: data.image,
      };

      console.log("✅ Données envoyées :", payload);

      const response = await axios.post("http://localhost:5000/api/products", payload);

      if (response.data) {
        alert("Produit ajouté avec succès !");
        resetForm();
      }
    } catch (err) {
      console.error("Erreur lors de l'ajout du produit :", err);
      alert("Erreur lors de l'ajout du produit");
    }
  };

  return (
    <div>
      <Breadcrumb pageName="Ajouter un produit" />

      <div className="flex flex-col gap-9">
        <ShowcaseSection title="Formulaire d'ajout de produit" className="space-y-5.5 !p-6.5">
          <form onSubmit={handleSubmit}>
            <InputGroup
              type="file"
              fileStyleVariant="style1"
              label="Choisir l'image du produit"
              placeholder="Attach file"
              name="image"
              onChange={handleChange}
            />

            {data.imagePreview && (
              <div className="mb-4">
                <img
                  src={data.imagePreview}
                  alt="Aperçu"
                  className="max-w-[200px] max-h-[200px] object-cover rounded"
                />
              </div>
            )}

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <InputGroup
                label="Nom du produit"
                placeholder="Choisir le nom du produit"
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
              />

              <InputGroup
                label="Prix du produit"
                placeholder="0000000"
                type="number"
                name="price"
                value={data.price}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

              <Select
                label="Catégorie"
                name="category"
                value={data.category}
                onChange={handleChange}
                placeholder="Choisir une catégorie"
                items={[
                  { label: "Technologie", value: "Technologie" },
                  { label: "Bien-être", value: "Bien-être" },
                  { label: "Alimentaire", value: "Alimentaire" },
                ]}
                prefixIcon={<GlobeIcon />}
              />


            <MultiSelect
              id="multiSelect"
              selected={data.tags}
              onChange={handleTagChange}
            />

            </div>

            <TextAreaGroup
              label="Description du produit"
              placeholder="Veuillez renseigner une description de votre produit"
              name="description"
              value={data.description}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="flex w-full justify-center rounded-lg bg-primary p-[13px] font-medium text-white hover:bg-opacity-90"
            >
              Ajouter
            </button>
          </form>
        </ShowcaseSection>
      </div>
    </div>
  );
}

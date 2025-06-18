"use client";
import {useEffect,useState} from 'react';
import axios from 'axios';

import {
    CallIcon,
    EmailIcon,
    PencilSquareIcon,
    UserIcon,
} from "@/assets/icons";
import InputGroup from "@/components/FormElements/InputGroup";
import { TextAreaGroup } from "@/components/FormElements/InputGroup/text-area";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";
import { UploadIcon } from "@/assets/icons";
import Image from "next/image";



export default function SettingsForm() {

    const [data, setData] = useState({
        logo: "",
        name: "",
        phoneNumber: "",
        email: "",
        address: "",
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
    axios.get("http://localhost:5000/api/settings")
        .then((res) => {
        if (res.data) {
            setData((prev) => ({
            ...prev,
            ...res.data // fusionne proprement
            }));
        }
        })
        .catch((err) => {
        console.error("Erreur lors de la récupération des paramètres:", err);
        })
        .finally(() => {
        setLoading(false);
        });
    }, []);

    const resetForm = () => {
  setData({
    logo: "",
    name: "",
    phoneNumber: "",
    email: "",
    address: ""
  });
};


const handleChange = (e) => {
  const { name, type, value, files } = e.target;

  if (type === "file") {
    const file = files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setData((prev) => ({
          ...prev,
          [name]: file, // stocke le fichier original pour FormData
          [`${name}Preview`]: reader.result, // utilisé pour l'affichage preview
        }));
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




const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const formData = new FormData();

    // Ajout conditionnel de l'image fichier
    if (data.logo instanceof File) {
      formData.append("logo", data.logo);
    }

    formData.append("name", data.name);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("email", data.email);
    formData.append("address", data.address);

    const response = await axios.put(
      "http://localhost:5000/api/settings",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response.data) {
      alert("Paramètres mis à jour avec succès");
      setData((prev) => ({
        ...prev,
        ...response.data,
        logo: response.data.logo, // l'URL renvoyée
      }));
    }
  } catch (err) {
    console.error("Erreur lors de la mise à jour:", err);
    alert("Erreur lors de la mise à jour");
  } finally {
    setLoading(false);
  }
};



    if (loading) {
        return <div className="text-center">Chargement...</div>;
    }


  return (
   
   <div>

        {/* //Second form */}
         <ShowcaseSection title="Informations sur la boutique" className="!p-7">
           <form onSubmit={handleSubmit}>

            {/* Preview du logo actuel ou sélectionné */}
            <div className="mb-4 flex items-center gap-3">
            {data.logo ? (
                <Image
                    src={data.logoPreview || data.logo}
                    width={55}
                    height={55}
                    alt="Logo"
                    className="size-14 rounded-full object-cover"
                    />

            ) : (
                <div className="size-14 rounded-full bg-gray-300" />
            )}

            <div>
                <span className="mb-1.5 font-medium text-dark dark:text-white">
                Mettre à jour le logo
                </span>
                <span className="flex gap-3">
                <button
                    type="button"
                    className="text-body-sm hover:text-red"
                    onClick={() =>
                    setData((prev) => ({ ...prev, logo: "" }))
                    }
                >
                    Supprimer
                </button>
                </span>
            </div>
            </div>

            {/* Zone d'upload */}
            <div className="relative mb-5.5 block w-full rounded-xl border border-dashed border-gray-4 bg-gray-2 hover:border-primary dark:border-dark-3 dark:bg-dark-2 dark:hover:border-primary">
            <input
                type="file"
                name="logo"
                onChange={handleChange}
                id="profilePhoto"
                accept="image/png, image/jpg, image/jpeg"
                hidden
            />

            <label
                htmlFor="profilePhoto"
                className="flex cursor-pointer flex-col items-center justify-center p-4 sm:py-7.5"
            >
                <div className="flex size-13.5 items-center justify-center rounded-full border border-stroke bg-white dark:border-dark-3 dark:bg-gray-dark">
                <UploadIcon />
                </div>

                <p className="mt-2.5 text-body-sm font-medium">
                <span className="text-primary">Cliquer pour charger</span> ou glisser-déposer
                </p>

                <p className="mt-1 text-body-xs">
                SVG, PNG, JPG ou GIF (max, 800x800px)
                </p>
            </label>
            </div>

                
             <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">

               <InputGroup
                 className="w-full sm:w-1/2"
                 type="text"
                 name="name"
                 value={data.name || ""}
                 onChange={handleChange}
                 label="Nom de la boutique"
                 placeholder="Ma Boutique"
                 icon={<UserIcon />}
                 iconPosition="left"
                 height="sm"
               />
     
               <InputGroup
                 className="w-full sm:w-1/2"
                 type="text"
                 name="phoneNumber"
                 value={data.phoneNumber}
                 onChange={handleChange}
                 label="Numero de téléphone"
                 placeholder="+221 77 123 45 67"
                 icon={<CallIcon />}
                 iconPosition="left"
                 height="sm"
               />
             </div>
     
             <InputGroup
               className="mb-5.5"
               type="email"
               name="email"
               value={data.email}
               onChange={handleChange}
               label="Address email"
               placeholder="maboutique@gmail.com"
               icon={<EmailIcon />}
               iconPosition="left"
               height="sm"
             />
     
             <InputGroup
               className="mb-5.5"
               type="text"
               name="address"
               value={data.address}
               onChange={handleChange}
               label="L'adresse de la boutique"
               placeholder="Dakar, Senegal"
               icon={<UserIcon />}
               iconPosition="left"
               height="sm"
             />
     

     
             <div className="flex justify-end gap-3">
               <button
                 className="rounded-lg border border-stroke px-6 py-[7px] font-medium text-dark hover:shadow-1 dark:border-dark-3 dark:text-white"
                 type="button"
                 onClick={resetForm}
               >
                 Effacer
               </button>
     
               <button
                 className="rounded-lg bg-primary px-6 py-[7px] font-medium text-gray-2 hover:bg-opacity-90"
                 type="submit"
               >
                 Valider
               </button>
             </div>
           </form>
         </ShowcaseSection>
    </div>
  )
}

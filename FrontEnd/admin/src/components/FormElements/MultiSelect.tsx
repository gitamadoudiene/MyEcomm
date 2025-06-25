"use client";
import React, { useEffect, useRef, useState } from "react";

interface DropdownProps {
  id: string;
  selected: string[]; // depuis le parent
  onChange: (selectedValues: string[]) => void;
}

const optionsStatic = [
  { value: "1", label: "Nouveauté" },
  { value: "2", label: "Promotion" },
  { value: "3", label: "Top Ventes" },
  { value: "4", label: "Coup de cœur" },
];

const MultiSelect: React.FC<DropdownProps> = ({ id, selected, onChange }) => {
  const [show, setShow] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  // Toggle un tag
  const handleToggle = (value: string) => {
    const isSelected = selected.includes(value);
    const newSelected = isSelected
      ? selected.filter((v) => v !== value)
      : [...selected, value];

    onChange(newSelected);
  };

  // Fermer au clic externe
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !triggerRef.current?.contains(event.target as Node)
      ) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative z-10">
      <label className="mb-2 block text-sm font-medium">Tags</label>

      {/* Masqué mais utile si besoin */}
      <select id={id} multiple hidden>
        {optionsStatic.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      <div
        ref={triggerRef}
        className="border rounded p-2 cursor-pointer"
        onClick={() => setShow(!show)}
      >
        {selected.length > 0
          ? selected
              .map((val) => optionsStatic.find((o) => o.value === val)?.label)
              .join(", ")
          : "Sélectionner les tags"}
      </div>

      {show && (
        <div
          ref={dropdownRef}
          className="absolute mt-1 w-full bg-white border rounded shadow z-20"
        >
          {optionsStatic.map((opt) => (
            <div
              key={opt.value}
              className="flex items-center px-3 py-2 hover:bg-gray-100"
              onClick={() => handleToggle(opt.value)}
            >
              <input
                type="checkbox"
                checked={selected.includes(opt.value)}
                readOnly
                className="mr-2"
              />
              <span>{opt.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;

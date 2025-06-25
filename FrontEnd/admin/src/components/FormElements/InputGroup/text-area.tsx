import { cn } from "@/lib/utils";
import { useId } from "react";

interface PropsType {
  label: string;
  name: string;            // ajoute name ici
  placeholder: string;
  value?: string;          // value contrôlé (optionnel)
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;  // onChange optionnel
  required?: boolean;
  disabled?: boolean;
  active?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

export function TextAreaGroup({
  label,
  name,
  placeholder,
  value,
  onChange,
  required,
  disabled,
  active,
  className,
  icon,
}: PropsType) {
  const id = useId();

  return (
    <div className={cn(className)}>
      <label
        htmlFor={id}
        className="mb-3 block text-body-sm font-medium text-dark dark:text-white"
      >
        {label}
      </label>

      <div className="relative mt-3 [&_svg]:pointer-events-none [&_svg]:absolute [&_svg]:left-5.5 [&_svg]:top-5.5">
        <textarea
          id={id}
          name={name}                 // ajoute name ici
          rows={6}
          placeholder={placeholder}
          value={value}               // valeur contrôlée
          onChange={onChange}         // callback onChange
          className={cn(
            "w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary disabled:cursor-default disabled:bg-gray-2 data-[active=true]:border-primary dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary dark:disabled:bg-dark dark:data-[active=true]:border-primary",
            icon && "py-5 pl-13 pr-5",
          )}
          required={required}
          disabled={disabled}
          data-active={active}
        />

        {icon}
      </div>
    </div>
  );
}

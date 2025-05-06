import { Icon } from "@iconify/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "../../i18n";

const Item = ({
  lng,
  onClick,
}: {
  lng: { icon: string; code: string; displayCode?: string };
  onClick?: () => void;
}) => {
  return (
    <div
      className="flex items-center gap-2 h-full px-2 rounded-lg hover:bg-background-hover cursor-pointer select-none"
      onClick={onClick}
    >
      <Icon icon={lng.icon} className="text-4xl" />
      <span className="font-semibold uppercase">
        {lng.displayCode || lng.code}
      </span>
    </div>
  );
};

const LanguageChanger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { i18n } = useTranslation();

  const languages = [
    {
      code: "pl",
      icon: "twemoji:flag-poland",
    },
    {
      code: "en-GB",
      displayCode: "en",
      icon: "twemoji:flag-united-kingdom",
    },
  ];

  const currentLanguage = languages.find((lng) => lng.code === i18n.language);
  const selectableLanguages = languages.filter(
    (lng) => lng.code !== i18n.language
  );

  return (
    <div className="relative h-full" onClick={() => setIsOpen(!isOpen)}>
      {currentLanguage && <Item lng={currentLanguage} />}
      {isOpen && (
        <div className="absolute top-full w-full mt-2 shadow-xl">
          {selectableLanguages.map((lng) => (
            <Item lng={lng} onClick={() => changeLanguage(lng.code)} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageChanger;

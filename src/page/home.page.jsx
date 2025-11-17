import HeaderComponent from "../component/header.component.jsx";
import { useNavigate } from "react-router-dom";
import { setNavigate } from "../global/navigate.js";
import { useTranslation } from "react-i18next";
export function HomePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  setNavigate(navigate);

  return (
    <>
      <div>
        <HeaderComponent
          title="Lucas.dev"
          subtitle={t("header.subtitle")}
          from="#0A66C2"
          to="#004182"
          textTitleColor="#FFFFFF"
          textSubtitleColor="#E0E7FF"
          nav={[
            { text: t("header.nav.home"), path: "/", icon: "home" },
            { text: t("header.nav.about"), path: "/about", icon: "user" },
            { text: t("header.nav.projects"), path: "/projects", icon: "work" },
            { text: t("header.nav.contact"), path: "/contact", icon: "mail" },
            {
              text: t("header.nav.services"),
              path: "/services",
              icon: "settings",
            },
          ]}
        />
      </div>
    </>
  );
}

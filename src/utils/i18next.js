import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      welcomeMessage: "This is a space dedicated to showcasing the portfolios of IBMEC students. Here, you can explore the projects developed by our students, reflecting their skills, creativity, and academic journey. Explore and discover the talent and innovation emerging from our campus!",
      welcomeTitle: "Explore the Portfolios of IBMEC Students",
      aboutButton: "About us",
      detailButton: "+",
      search: "Search",
      contributors: "Contributors",
      tools: "Utilized tools",
      jobs: "Contributors' roles"
    }
  },
  pt: {
    translation: {
      welcomeMessage: "Este é um ambiente dedicado à exibição dos portfólios dos alunos do IBMEC. Aqui, você pode conhecer os projetos desenvolvidos por nossos estudantes, refletindo suas habilidades, criatividade e trajetória acadêmica. Explore e descubra o talento e a inovação que surgem em nosso campus!",
      welcomeTitle: "Explore os Portfólios dos Alunos do IBMEC",
      aboutButton: "Sobre nós",
      detailButton: "+",
      search: "Pesquisar",
      contributors: "Colaboradores",
      tools: "Ferramentas utilizadas",
      jobs: "Papel dos colaboradores"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "pt", // use ptbr if detected lng is not available
    lng: "pt", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;
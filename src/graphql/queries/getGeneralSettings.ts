import { gql } from "@apollo/client";

export const GET_GENERAL_SETTINGS = gql`
  query GetGeneralSettings {
    generalSettings {
      title
      description
    }
  }
`;

export const GET_HERO_DATA = gql`
  query GetHeroContent {
    pageBy(uri: "next-home") {
      homePageContent {
        heroTitle
        heroSubtitle
        buttonText
        buttonUrl
        heroImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

export const GET_SERVICES = gql`
  query GetServices {
    service {
      nodes {
        serviceDetails {
          serviceTitle
          serviceIcon {
            node {
              sourceUrl
            }
          }
          servicesSubtitle
          shortDescription
          fullDescription
          buttonLabel
          serviceButtonUrl
          displayOnHome
        }
      }
    }
  }
`;

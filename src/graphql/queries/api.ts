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
  query GetHomePageHero {
    page(id: "home", idType: URI) {
      title
      homePageFields {
        heroHeading
        heroSubheading
        heroCtaButtonText
        heroButtonUrl
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

export const TEAM_QUERY = gql`
  query teamMate {
    teamMembers {
      nodes {
        title
        teamInfo {
          jobTitle
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

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
  query GetAllServices {
    services {
      nodes {
        id
        title
        slug
        uri
        featuredImage {
          node {
            id
            sourceUrl
          }
        }

        servicesacf {
          seoDescription
          seoTitle
          serviceDescription
          displayHome
          serviceIcon {
            node {
              sourceUrl
              title
            }
          }
          shortDescription
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
        teamMemberInfo {
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

export const ALL_POSTS = gql`
  query GetAllPosts {
    posts(first: 20, where: { status: PUBLISH }) {
      nodes {
        title
        slug
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;

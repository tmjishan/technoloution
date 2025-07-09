import client from "@/graphql/apollo-client";
import {
  GET_GENERAL_SETTINGS,
  GET_HERO_DATA,
  GET_SERVICES,
} from "@/graphql/queries/getGeneralSettings";

export async function fetchGeneralData(): Promise<{
  title: string;
  description: string;
} | null> {
  try {
    const response = await client.query({ query: GET_GENERAL_SETTINGS });
    if (!response || !response.data) {
      console.warn("[GraphQL] fetchGeneralData: No data");
      return null;
    }
    return response.data.generalSettings;
  } catch (error) {
    console.error("[GraphQL] fetchGeneralData Error:", error);
    return null;
  }
}

export async function fetchHeroData(): Promise<{
  heroTitle: string;
  heroSubtitle: string;
  buttonText: string;
  buttonUrl: string;
  heroImage: {
    node: {
      sourceUrl: string;
    };
  };
} | null> {
  try {
    const response = await client.query({ query: GET_HERO_DATA });
    if (!response || !response.data || !response.data.pageBy) {
      console.warn("[GraphQL] fetchHeroData: No pageBy data");
      return null;
    }
    return response.data.pageBy.homePageContent ?? null;
  } catch (error) {
    console.error("[GraphQL] fetchHeroData Error:", error);
    return null;
  }
}

export async function fetchServicesData(): Promise<
  {
    serviceTitle: string;
    servicesSubtitle: string;
    shortDescription: string;
    fullDescription: string;
    buttonLabel: string;
    serviceButtonUrl: string;
    displayOnHome: boolean;
  }[]
> {
  try {
    const response = await client.query({ query: GET_SERVICES });
    if (!response || !response.data || !response.data.service) {
      console.warn("[GraphQL] fetchServicesData: No service data");
      return [];
    }
    return response.data.service.nodes || [];
  } catch (error) {
    console.error("[GraphQL] fetchServicesData Error:", error);
    return [];
  }
}

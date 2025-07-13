import client from "@/graphql/apollo-client";
import {
  GET_GENERAL_SETTINGS,
  GET_HERO_DATA,
  GET_SERVICES,
  TEAM_QUERY,
} from "@/graphql/queries/api";

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
  heroButtonUrl: string;
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

interface TeamMemberRaw {
  title: string;
  teamInfo: {
    jobTitle: string;
  };
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
}
export async function fetchTeamData(): Promise<TeamMemberRaw[]> {
  try {
    const response = await client.query({ query: TEAM_QUERY });
    if (!response || !response.data || !response.data.teamMembers?.nodes) {
      console.warn("[GraphQL] fetchTeamData: No team data");
      return [];
    }

    return response.data.teamMembers.nodes;
  } catch (error) {
    console.error("[GraphQL] fetchTeamData:", error);
    return [];
  }
}

// -----------------------------------------------------------------------------------------------
import { Service } from "../type/type";

export async function fetchServicesData(): Promise<Service[]> {
  try {
    const response = await client.query({ query: GET_SERVICES });
    if (!response || !response.data || !response.data.service) {
      console.warn("[GraphQL] fetchServicesData: No service data");
      return [];
    }
    // response.data.service.nodes: Service[]
    return response.data.service.nodes || [];
  } catch (error) {
    console.error("[GraphQL] fetchServicesData Error:", error);
    return [];
  }
}

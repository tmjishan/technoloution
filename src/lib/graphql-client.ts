import client from "@/graphql/apollo-client";
import {
  GET_GENERAL_SETTINGS,
  GET_HERO_DATA,
  GET_SERVICES,
  TEAM_QUERY,
  ALL_POSTS,
  GET_BLOG_POST,
} from "@/graphql/queries/api";
import {
  ServicesData,
  ServiceNode,
  HeroData,
  TeamMemberRaw,
  AllPosts,
  BlogPost,
} from "../type/type";

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

// -----------------------------------------------------------------------------------------------

// HERO DATA

export async function fetchHeroData(): Promise<HeroData | null> {
  try {
    const response = await client.query({
      query: GET_HERO_DATA,
    });

    if (!response || !response.data || !response.data.page) {
      console.warn("[GraphQL] fetchHeroData: No page data");
      return null;
    }

    const data = response.data.page.homePageFields;

    return {
      heroHeading: data.heroHeading,
      heroSubheading: data.heroSubheading,
      heroCtaButtonText: data.heroCtaButtonText,
      heroButtonUrl: data.heroButtonUrl,
    };
  } catch (error) {
    console.error("[GraphQL] fetchHeroData Error:", error);
    return null;
  }
}

// SERVICES
export async function fetchServicesData(): Promise<ServiceNode[]> {
  try {
    const response = await client.query<{ services: ServicesData["services"] }>(
      {
        query: GET_SERVICES,
      }
    );

    if (!response?.data?.services?.nodes) {
      console.warn("[GraphQL] fetchServicesData: No service data");
      return [];
    }

    return response.data.services.nodes;
  } catch (error) {
    console.error("[GraphQL] fetchServicesData Error:", error);
    return [];
  }
}

// Team Data

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

// All Posts
export async function fetchAllPostsData(): Promise<AllPosts["posts"]["nodes"]> {
  try {
    const { data } = await client.query<{
      posts: { nodes: AllPosts["posts"]["nodes"] };
    }>({
      query: ALL_POSTS,
    });
    return data.posts.nodes;
  } catch (error) {
    console.error("❌ Blog Data Not Found:", error);
    throw error;
  }
}

// Post

export async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const { data } = await client.query<{
      post: BlogPost | null;
    }>({
      query: GET_BLOG_POST,
      variables: { slug },
    });

    return data.post;
  } catch (error) {
    console.error("❌ Single Blog Post Not Found:", error);
    throw error;
  }
}

// HERO DATA
export interface HeroData {
  heroHeading: string;
  heroSubheading: string;
  heroCtaButtonText: string;
  heroButtonUrl: string;
}

// All SERVICESS DETAILS

export interface ServiceIconNode {
  sourceUrl: string;
  title: string | null;
}

export interface ServiceIcon {
  node: ServiceIconNode;
}

export interface FeaturedImageNode {
  id: string;
  sourceUrl: string;
}

export interface FeaturedImage {
  node: FeaturedImageNode | null;
}

export interface ServicesACF {
  seoDescription: string | null;
  seoTitle: string | null;
  serviceDescription: string | null;
  displayHome: boolean | null;
  serviceIcon: ServiceIcon | null;
  shortDescription: string | null;
}

export interface ServiceNode {
  id: string;
  title: string;
  slug: string;
  uri: string;
  featuredImage: FeaturedImage | null;
  servicesacf: ServicesACF | null;
}

export interface ServicesData {
  services: {
    nodes: ServiceNode[];
  };
}

//Team Data

export interface TeamMemberRaw {
  title: string;
  teamMemberInfo: {
    jobTitle: string;
  };
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
}

// POST DATA
export interface FeaturedImageNode {
  sourceUrl: string;
  altText?: string;
}
export interface FeaturedImage {
  node: FeaturedImageNode | null;
}

export interface Post {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
  featuredImage: FeaturedImage;
}

export interface AllPosts {
  posts: {
    nodes: Post[];
  };
}

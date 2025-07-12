export interface GeneralSettings {
  title: string;
  description: string;
}

export interface HeroData {
  heroTitle: string;
  heroSubtitle: string;
  buttonText: string;
  heroButtonUrl: string;
  heroImage: {
    node: {
      sourceUrl: string;
    };
  };
}

export interface ServiceData {
  serviceTitle: string;
  servicesSubtitle: string;
  shortDescription: string;
  fullDescription: string;
  buttonLabel: string;
  serviceButtonUrl: string;
  displayOnHome: boolean;
  serviceIcon: {
    node: {
      sourceUrl: string;
    };
  } | null; // null থাকতে পারে যদি কোনো icon না থাকে
}

export interface TeamMember {
  title: string;
  teamInfo: {
    jobTitle: string;
  };
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  } | null; // Featured image না থাকলেও handle করতে null রাখা ভালো
}

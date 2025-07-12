export interface ServiceIconNode {
  sourceUrl: string;
}

export interface ServiceIcon {
  node: ServiceIconNode;
}

export interface ServiceDetails {
  serviceTitle: string;
  servicesSubtitle: string;
  shortDescription: string;
  fullDescription: string;
  buttonLabel: string;
  serviceButtonUrl: string;
  displayOnHome: boolean;
  serviceIcon?: ServiceIcon | null;
}

export interface Service {
  serviceDetails: ServiceDetails;
}

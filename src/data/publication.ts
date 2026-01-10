export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  {
    year: "2025",
    conference: "Bioinspiration & Biomimetics",
    title: "BlueGuppy: Tunable kinematics enables maneuverability in a minimalist fish-like robot",
    authors: "Ko, H., Saro-Cortes, V., Mmari, B., Ni, D., Wissa, A., & Nagpal, R.",
    paperUrl: "https://doi.org/10.1088/1748-3190/adf2e9",
  },
  {
    year: "2024",
    conference: "American Physical Society's Division of Fluid Dynamics Annual Meeting (DFD), Salt Lake City, UT",
    title: "BlueGuppy: a miniature free-swimming robot for studying hydrodynamic interaction among schooling fish",
    authors: "Ko, H., Saro-Cortes, V., Sedky, G., Mmari, B., Ni, D., Wissa, A., Nagpal, R.",
  },
  {
    year: "2024",
    conference: "Society for Integrative and Comparative Biology National Meeting (SICB), Seattle, WA",
    title: "Designing a miniature fish robot – an aquatic analog for hexbugs",
    authors: "Ko, H., Mmari, B.G., Ni, D., Nagpal, R.",
  },
];

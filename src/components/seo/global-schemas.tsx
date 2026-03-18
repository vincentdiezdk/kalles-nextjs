const localBusiness = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://kaspermh.dk/#localbusiness",
  name: "Kalles Algerens ApS",
  description:
    "Professionel udendørs rengøring i Midtjylland. Fliserens, tagrens, facaderens, træterrasse rens og algebehandling med miljøgodkendte produkter.",
  url: "https://kaspermh.dk",
  telephone: "+4525131797",
  email: "kontakt@kaspermh.dk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vibevej 38",
    addressLocality: "Brande",
    postalCode: "7330",
    addressCountry: "DK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 55.9484,
    longitude: 9.1186,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  priceRange: "kr–krkr",
  image:
    "https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/logo-kalles-algerens.png",
  sameAs: [
    "https://www.facebook.com/KallesAlgerens/",
    "https://www.instagram.com/kallesalgerens/",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fliserens",
          description: "Professionel rens af fliser med varmt vand og højt tryk",
          url: "https://kaspermh.dk/fliserens/",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tagrens & Tagmaling",
          description:
            "Komplet tagrens med algebehandling og mulighed for tagmaling",
          url: "https://kaspermh.dk/tagrens/",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Facaderens",
          description: "Skånsom facaderens tilpasset alle materialer",
          url: "https://kaspermh.dk/facaderens/",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Træterrasse Rens",
          description:
            "Skånsom rensning af træterrasser med mulighed for imprægnering",
          url: "https://kaspermh.dk/traeterrasse-rens/",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Algebehandling",
          description: "Miljøgodkendt algebehandling med Neutralon",
          url: "https://kaspermh.dk/algebehandling-af-tag/",
        },
      },
    ],
  },
  areaServed: [
    { "@type": "City", name: "Herning" },
    { "@type": "City", name: "Brande" },
    { "@type": "City", name: "Ikast" },
    { "@type": "City", name: "Give" },
    { "@type": "City", name: "Billund" },
    { "@type": "City", name: "Hammerum" },
    { "@type": "City", name: "Snejbjerg" },
    { "@type": "City", name: "Kibæk" },
    { "@type": "City", name: "Sunds" },
  ],
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://kaspermh.dk/#organization",
  name: "Kalles Algerens ApS",
  url: "https://kaspermh.dk",
  logo: "https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/logo-kalles-algerens.png",
  sameAs: [
    "https://www.facebook.com/KallesAlgerens/",
    "https://www.instagram.com/kallesalgerens/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+4525131797",
    contactType: "customer service",
    availableLanguage: "Danish",
  },
};

const webSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://kaspermh.dk/#website",
  name: "Kalles Algerens",
  url: "https://kaspermh.dk",
  publisher: { "@id": "https://kaspermh.dk/#organization" },
};

const schemas = [localBusiness, organization, webSite];

export default function GlobalSchemas() {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

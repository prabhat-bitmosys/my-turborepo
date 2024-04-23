import { Card } from "@repo/ui/card";

const LINKS = [
  {
    title: "Docs",
    href: "https://turbo.build/repo/docs",
    description: "Find in-depth information about Turborepo features and API.",
  },
  {
    title: "Learn",
    href: "https://turbo.build/repo/docs/handbook",
    description: "Learn more about monorepos with our handbook.",
  },
  {
    title: "Templates",
    href: "https://turbo.build/repo/docs/getting-started/from-example",
    description: "Choose from over 15 examples and deploy with a single click.",
  },
  {
    title: "Deploy",
    href: "https://vercel.com/new",
    description:
      "Instantly deploy your Turborepo to a shareable URL with Vercel.",
  },
];

export const Links = () => {
  return (
    <div className="grid grid-cols-4 max-w-full w-full gap-4 sm:grid-cols-1 md:grid-cols-2 sm:max-w-[320px] md:max-w-full sm:mb-[120px] sm:text-center sm:px-16">
      {LINKS.map(({ title, href, description }) => (
        <Card className="" href={href} key={title} title={title}>
          {description}
        </Card>
      ))}
    </div>
  );
};

import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function About() {
  return (
    <>
      <NextSeo
        title="About Kalathuru Upendra | Future Software Developer"
        description="Learn more about Kalathuru Upendra, a Computer Science and Engineering student skilled in React Native, frontend development, Machine Learning, and IoT. I enjoy building smart, user-friendly tech solutions that solve real-world problems."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "Learn About Kalathuru Upendra",
          description:
            "Dive into the story of Upendra, a Computer Science Student. Uncover the experiences, skills, and passion that fuel a commitment to delivering exceptional mobile app solutions.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Kalathuru Upendra - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Engineering Student Portfolio, Ready to Work, React Developer, Frontend Developer, Web Developer, JavaScript, HTML, CSS, Professional Journey, Skills, Passion for Web Development",
          },
        ]}
      />
      <AboutHero />
      <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
    </>
  );
}

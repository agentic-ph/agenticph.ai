import { Layout } from "../layout/Layout";
import { HeroSection } from "../sections/HeroSection";
import { AboutSection } from "../sections/AboutSection";
import { WhatWeDoSection } from "../sections/WhatWeDoSection";
import { CodeOfConductSection } from "../sections/CodeOfConductSection";
import { ConnectSection } from "../sections/ConnectSection";

export const HomePage = () => {
  return (
    <Layout
      title="AgenticPH - Next-gen Filipino Developer Community"
      description="Join AgenticPH, a community of Filipino developers, AI builders, prompt engineers, and creative technologists exploring agentic software and intelligent systems."
    >
      <HeroSection />
      <AboutSection />
      <WhatWeDoSection />
      <CodeOfConductSection />
      <ConnectSection />
    </Layout>
  );
};

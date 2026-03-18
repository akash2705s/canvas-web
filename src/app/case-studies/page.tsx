import { CaseStudyHero } from "@/components/CaseStudy/CaseStudyHero";
import { CaseStudyLiveExperience } from "@/components/CaseStudy/CaseStudyLiveExperience";
import { CaseStudyResults } from "@/components/CaseStudy/CaseStudyResults";
import { CaseStudyEngagementDuration } from "@/components/CaseStudy/CaseStudyEngagementDuration";
import { CaseStudyInteractionTypes } from "@/components/CaseStudy/CaseStudyInteractionTypes";
import { CaseStudyCampaignSpeed } from "@/components/CaseStudy/CaseStudyCampaignSpeed";
import { CaseStudyBrandPlaybook } from "@/components/CaseStudy/CaseStudyBrandPlaybook";
import { CaseStudyFaq } from "@/components/CaseStudy/CaseStudyFaq";
import { CaseStudyCta } from "@/components/CaseStudy/CaseStudyCta";
import { CaseStudyArchitecture } from "@/components/CaseStudy/CaseStudyArchitecture";

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudyHero />
      <CaseStudyLiveExperience />
      <CaseStudyResults />
      <CaseStudyEngagementDuration />
      <CaseStudyInteractionTypes />
      <CaseStudyCampaignSpeed />
      <CaseStudyBrandPlaybook />
      <CaseStudyFaq />
      <CaseStudyCta />
      <CaseStudyArchitecture />
    </>
  );
}


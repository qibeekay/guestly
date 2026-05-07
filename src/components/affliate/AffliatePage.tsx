import { PageHeader } from "../props/PageHeader";
import BuiltForHigh from "./BuiltForHigh";
import { InfluencerBanner } from "./InfluencerBanner";
import { MediaKits } from "./MediaKits";

const AffliatePage = () => {
  const heroActions = [
    {
      label: "Become an Affiliate",
      variant: "primary" as const,
      onClick: () => console.log("Find events"),
    },
    {
      label: "Partner Sign in",
      variant: "white" as const,
      onClick: () => console.log("Start hosting"),
    },
  ];
  return (
    <>
      <PageHeader
        backgroundImage="/src/assets/hero2.png"
        title="Monetize your influence."
        description="Partner with the biggest events in Africa. Share unique referral links, track your performance in real-time, and earn industry-leading commissions on every ticket sold."
        star="The Influencer & Promoter Program"
        actions={heroActions}
        showStatsTicker={true}
        width="max-w-[646px]"
        fontSize="text-base sm:text-[16.45px]"
        pWidth="max-w-[450px]"
      />
      <BuiltForHigh />
      <MediaKits />
      <InfluencerBanner />
    </>
  );
};

export default AffliatePage;

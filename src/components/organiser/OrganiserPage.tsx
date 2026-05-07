import { PageHeader } from "../props/PageHeader";
import { ScaleSection } from "./ScaleSection";

const OrganiserPage = () => {
  const heroActions = [
    {
      label: "Create Your Event",
      variant: "primary" as const,
      onClick: () => console.log("Find events"),
    },
    {
      label: "Sign in",
      variant: "white" as const,
      onClick: () => console.log("Start hosting"),
    },
  ];
  return (
    <>
      <PageHeader
        backgroundImage="/src/assets/hero2.png"
        title="Host events that inspire."
        description="From underground concerts to global tech summits. GUESTLY provides the infrastructure to build, scale, and monetize your community events across Africa."
        star="The Premium Event Marketplace"
        actions={heroActions}
        showStatsTicker={true}
        width="max-w-[646px]"
        fontSize="text-base sm:text-[16.45px]"
        pWidth="max-w-[450px]"
      />
      <ScaleSection />
    </>
  );
};

export default OrganiserPage;

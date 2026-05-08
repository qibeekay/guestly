import { PageHeader } from "../props/PageHeader";
import BuiltToHelp from "./BuiltToHelp";
import { WhoWeSupport } from "./WhoWeSupport";

const VendorPage = () => {
  const heroActions = [
    {
      label: "List Your Business",
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
        backgroundImage="/hero1.jpg"
        title="Get booked by top organizers."
        description="Join Africa's most exclusive event service network. Show your portfolio, manage inquiries, and receive secure payments from vetted event creators."
        star="The Premium Event Marketplace"
        actions={heroActions}
        showStatsTicker={true}
        width="max-w-[646px]"
        fontSize="text-base sm:text-[16.45px]"
        flip="sm:scale-x-[-1]"
      />
      <BuiltToHelp />
      <WhoWeSupport />
    </>
  );
};

export default VendorPage;

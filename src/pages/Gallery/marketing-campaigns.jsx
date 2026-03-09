import GalleryPage from "../../components/gallery";
import { Helmet } from "react-helmet-async";


const MarketingCampaigns = () => {
  return (
    <>
      <Helmet>
        <title>Marketing Campaigns | Trovica Agency</title>
        <meta
          name="description"
          content="Explore our marketing campaigns that demonstrate our expertise in creating impactful and results-driven promotional strategies."
        />
      </Helmet>
      <GalleryPage title="Marketing Campaigns" />
    </>
  );
};
export default MarketingCampaigns;
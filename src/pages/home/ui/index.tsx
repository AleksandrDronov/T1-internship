import { MainSection } from "@/widgets/main-section";
import { FeaturesSection } from "@/widgets/features-section";
import { DownloadAppSection } from "@/widgets/download-app-section";
import { LunchesSection } from "@/widgets/lunches-section";
import { ControlPurchaseSection } from "@/widgets/control-purchase-section";
import { ReviewsSection } from "@/widgets/reviews-section";
import { FAQSection } from "@/widgets/faq-section";

export function HomePage() {
  return (
    <main>
      <MainSection />
      <FeaturesSection />
      <DownloadAppSection />
      <LunchesSection />
      <ControlPurchaseSection />
      <ReviewsSection />
      <FAQSection />
    </main>
  );
}

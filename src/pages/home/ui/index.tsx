import { MainSection } from "@/widgets/main-section";
import { FeaturesSection } from "@/widgets/features-section";
import { DownloadAppSection } from "@/widgets/download-app-section";
import { LunchesSection } from "@/widgets/lunches-section";
import { ControlPurchaseSection } from "@/widgets/control-purchase-section";
import { CommentsSection } from "@/widgets/comments-section";
import { FAQSection } from "@/widgets/faq-section";

export function HomePage() {
  return (
    <main>
      <MainSection />
      <FeaturesSection />
      <DownloadAppSection />
      <LunchesSection />
      <ControlPurchaseSection />
      <CommentsSection />
      <FAQSection />
    </main>
  );
}

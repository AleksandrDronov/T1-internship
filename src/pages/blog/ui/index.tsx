import { useScrollToTop } from "@/shared/hooks/useScrollToTop";
import { ArticlesSection } from "@/widgets/articles-section";

export function BlogPage() {
  useScrollToTop();

  return (
    <main>
      <ArticlesSection />
    </main>
  );
}

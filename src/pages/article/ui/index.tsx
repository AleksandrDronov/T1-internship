import { ArticleSection } from "@/widgets/article-section";
import { useScrollToTop } from "@/shared/hooks/useScrollToTop";

export function ArticlePage() {
  useScrollToTop();

  return (
    <main>
      <ArticleSection />
    </main>
  );
}

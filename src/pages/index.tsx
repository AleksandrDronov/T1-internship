import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./home";
import { BlogPage } from "./blog";
import { ArticlePage } from "./article";
import { NotFoundPage } from "./not-found";

export function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<ArticlePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

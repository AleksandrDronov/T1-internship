import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./home";
import { BlogPage } from "./blog/ui";

export function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

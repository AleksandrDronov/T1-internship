import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./home";

export function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

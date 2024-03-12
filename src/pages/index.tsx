import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { HomePage } from "./home";

export function Router() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}

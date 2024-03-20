import { Typography } from "@/shared/ui/typography";
import { Accordion } from "@/shared/ui/accordion";
import image from "/vector-6.svg";
import styles from "./styles.module.css";

const items = [
  {
    title: "How long does delivery take?",
    content:
      "You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?",
  },
  {
    title: "How Does It Work ?",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "How does your food delivery service work?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "What payment options do you accept?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Do you offer discounts or promotions?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export function FAQSection() {
  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <Typography
          className={styles.title}
          variant="h4-web"
          tag="h2"
          align="center"
        >
          Frequently Asked
          {" "}
          <span className={styles.highlight}>Questions</span>
        </Typography>
        <img className={styles.image} src={image} alt="" />
      </div>
      <Accordion className={styles.accordion} items={items} />
    </section>
  );
}

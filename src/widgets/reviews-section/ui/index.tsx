import { Typography } from "@/shared/ui/typography";
import { CardReview, reviews } from "@/entities/review";
import styles from "./styles.module.css";

export function ReviewsSection() {
  const firstRreview = reviews[0];
  const filteredReviews = reviews.slice(1);

  return (
    <section className={styles.section}>
      <Typography
        className={styles.title}
        variant="h4-web"
        tag="h2"
        align="center"
      >
        <span className={styles.highlight}>Customer</span>
        {" "}
        Say
      </Typography>
      <div className={styles.container}>
        <CardReview
          review={firstRreview}
          hasIcon
          className={styles.first_card}
        />
        <ul className={styles.list}>
          {filteredReviews.map((review) => (
            <li key={review.id}>
              <CardReview review={review} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

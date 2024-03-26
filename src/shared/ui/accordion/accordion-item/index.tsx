import clsx from "clsx";
import { useRef } from "react";
import { AccordionItemType } from "./types";
import { Button } from "../../button";
import { Typography } from "../../typography";
import plus from "./plus.svg";
import minus from "./minus.svg";
import styles from "./styles.module.css";

interface AccordionItemProps {
  item: AccordionItemType;
  isOpen: boolean;
  onClick: () => void;
}
export function AccordionItem({ item, isOpen, onClick }: AccordionItemProps) {
  const itemRef = useRef<HTMLSpanElement>(null);

  return (
    <li className={styles.item}>
      <Button
        className={styles.button}
        variant="tertiary"
        onClick={onClick}
        aria-label={isOpen ? "Open accordion section" : "Close accordion section"}
        aria-expanded={isOpen}
      >
        <div className={styles.header}>
          <Typography variant="b12-web">{item.title}</Typography>
          {isOpen ? (
            <img src={minus} alt="" />
          ) : (
            <img src={plus} alt="" />
          )}
        </div>
        <Typography
          className={clsx(styles.content, {
            [styles.open]: isOpen,
          })}
          inlineStyles={{
            height: isOpen ? itemRef.current?.scrollHeight : 0,
          }}
          variant="b13-web"
        >
          <span className={styles.body} ref={itemRef}>
            {item.content}
          </span>
        </Typography>
      </Button>
    </li>
  );
}

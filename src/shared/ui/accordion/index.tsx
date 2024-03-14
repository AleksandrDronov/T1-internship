import { useState } from "react";
import clsx from "clsx";
import { AccordionItem } from "./accordion-item";
import { AccordionProps } from "./accordion-item/types";
import styles from "./styles.module.css";

export function Accordion({ className, items }: AccordionProps) {
  const [openId, setOpenId] = useState<null | number>(null);

  const onClick = (id: number) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <ul className={clsx(styles.accordion, className)}>
      {items.map((item, id) => (
        <AccordionItem
          // eslint-disable-next-line react/no-array-index-key
          key={id}
          item={item}
          isOpen={openId === id}
          onClick={() => onClick(id)}
        />
      ))}
    </ul>
  );
}

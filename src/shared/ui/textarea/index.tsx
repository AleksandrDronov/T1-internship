import clsx from "clsx";
import styles from "./styles.module.css";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export function Textarea({
  className,
  ...props
}: TextareaProps) {
  return (
    <textarea
      className={clsx(className, styles.textarea)}
      {...props}
    />
  );
}

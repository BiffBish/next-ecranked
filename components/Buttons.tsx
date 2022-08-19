import Link from "next/link";
import styles from "../styles/components/Buttons.module.scss";




export const LinkButton: React.FC<{
  href: string;
  children: React.ReactNode;
  backgroundStyle?: "primary" | "secondary"
}> = ({ href, children, backgroundStyle = "primary" }) => {

  return (
    <Link href={href} passHref>
      <a className={styles.buttonLink + " " + (backgroundStyle === "primary" ? styles.primary : styles.secondary)} >{children}</a>
    </Link>
  );
};

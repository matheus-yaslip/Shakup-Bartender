import { settings } from "@/settings/settings";
import styles from "./TitlePage.module.scss";

const { siteName } = settings;

export default function TitlePage({ title }: { title: string }) {
  const titleLength = title.length < 20;
  return (
    <div className={styles.titlePage}>
      {titleLength ? (
        <h1>
          {title}
          <span style={{ position: "absolute", opacity: 0, left: 0 }}>
            {" "}
            - {siteName}
          </span>
        </h1>
      ) : (
        <h1>{title}</h1>
      )}
    </div>
  );
}

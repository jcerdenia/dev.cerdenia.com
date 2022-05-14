import styles from "../styles/SectionLayout.module.css";

interface TitleWrapperProps {
  hero: boolean;
  children: any;
}

interface SectionLayoutProps {
  className?: string;
  title: string;
  hero?: boolean;
  children: any;
}

const TitleWrapper = (props: TitleWrapperProps): JSX.Element => {
  if (props.hero) {
    return <h3 className={styles.hero}>{props.children}</h3>;
  } else {
    return <h4 className={styles.title}>{props.children}</h4>;
  }
};

const SectionLayout = ({
  className,
  title,
  hero = false,
  children,
}: SectionLayoutProps): JSX.Element => {
  return (
    <div className={className}>
      <TitleWrapper hero={hero}>{title}</TitleWrapper>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default SectionLayout;

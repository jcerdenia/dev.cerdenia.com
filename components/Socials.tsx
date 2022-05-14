import socials from "../data/socials";

interface SocialsProps {
  Container?: (props: any) => JSX.Element;
  containerClassName?: string;
  itemClassName?: string;
}

const Socials = ({
  Container = (props) => <>{props.children}</>,
  containerClassName,
  itemClassName,
}: SocialsProps): React.ReactElement => {
  return (
    <Container className={containerClassName}>
      {socials.map(({ label, link, iconClass }) => {
        return (
          <a
            key={label}
            href={link}
            className={`${iconClass} ${itemClassName}`}
          />
        );
      })}
    </Container>
  );
};

export default Socials;

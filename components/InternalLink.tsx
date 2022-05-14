import Link from "next/link";

interface InternalLinkProps {
  href: string;
  textClassName?: string;
  iconClassName?: string;
  iconOnStart?: boolean;
  disabled?: boolean;
  children: string;
}

const InternalLink = ({
  href,
  textClassName,
  iconClassName,
  disabled,
  iconOnStart = false,
  children,
}: InternalLinkProps): JSX.Element => {
  if (disabled) {
    return <div className={textClassName}>{children} coming soon</div>;
  }

  return (
    <Link href={href} passHref>
      <a className={textClassName}>
        {iconOnStart && <i className={iconClassName} />} {children}{" "}
        {!iconOnStart && <i className={iconClassName} />}
      </a>
    </Link>
  );
};

export default InternalLink;

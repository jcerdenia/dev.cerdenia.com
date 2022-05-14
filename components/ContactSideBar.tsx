import SideBar from "./SideBar";
import socials from "../data/socials";

const ContactSideBar = (): JSX.Element => {
  return (
    <SideBar title="Contact" noImage>
      {socials.map((social: any) => {
        return (
          <p key={social.label}>
            <i className={`${social.iconClass} me-2`} />{" "}
            <a href={social.link}>{social.link.replace(/^(.*?):\/?\/?/, "")}</a>
          </p>
        );
      })}
    </SideBar>
  );
};

export default ContactSideBar;

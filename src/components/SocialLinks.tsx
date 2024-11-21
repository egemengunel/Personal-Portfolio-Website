import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SocialLink } from './SocialLink';

const socialLinks = [
  {
    href: "https://x.com/OnlyTrueNote7",
    icon: FaTwitter,
    label: "Twitter"
  },
  {
    href: "https://github.com/egemengunel",
    icon: FaGithub,
    label: "GitHub"
  },
  {
    href: "https://www.linkedin.com/in/egemen-günel",
    icon: FaLinkedin,
    label: "LinkedIn"
  },
  {
    href: "mailto:egemengunel@gmail.com",
    icon: FaEnvelope,
    label: "Email"
  }
];

export function SocialLinks() {
  return (
    <div className="flex justify-center space-x-6 mb-16">
      {socialLinks.map((link) => (
        <SocialLink key={link.label} {...link} />
      ))}
    </div>
  );
}
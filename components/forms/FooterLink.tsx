import Link from "next/link";

interface Props {
  text: string;
  linkText: string;
  href: string;
}

export const FooterLink = ({ text, linkText, href }: Props) => {
  return (
    <div className="text-center pt-4">
      <p className="text-sm text-gray-500">
        {text}
        {` `}
        <Link href={href} className="footer-link">
          {linkText}
        </Link>
      </p>
    </div>
  );
};

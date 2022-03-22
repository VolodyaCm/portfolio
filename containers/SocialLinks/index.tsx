import { HTMLAttributes } from 'react';
import SocialLink from '@/components/SocialLink';

interface SocialLinksProps extends HTMLAttributes<HTMLDivElement> {
  horisontal?: boolean;
}

const SocialLinks = ({ horisontal, ...props }: SocialLinksProps) => {
  return (
    <div {...props}>
      {horisontal ? (
        <>
          <SocialLink
            className="mr-4 shadow-xl"
            href="https://github.com"
            iconName="github"
          />
          <SocialLink
            className="mr-4 shadow-xl"
            href="https://linkedin.com"
            iconName="linkedin"
          />
          <SocialLink
            className="lg:hidden shadow-xl"
            href="https://gmail.com"
            iconName="email"
          />
          <SocialLink
            className="hidden lg:block shadow-xl"
            href="https://linkedin.com"
            text="volodyacm@gmai.com"
          />
        </>
      ) : (
        <>
          <SocialLink
            className="shadow-xl mx-auto"
            href="https://github.com"
            iconName="github"
          />
          <SocialLink
            className="shadow-xl mx-auto"
            href="https://linkedin.com"
            iconName="linkedin"
          />
          <SocialLink
            className="shadow-xl mx-auto"
            href="https://gmail.com"
            iconName="email"
          />
        </>
      )}
    </div>
  );
};

export default SocialLinks;

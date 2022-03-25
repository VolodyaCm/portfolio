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
            className="mr-4 shadow-xl cursor-pointer"
            href="https://github.com/VolodyaCm"
            iconName="github"
          />
          <SocialLink
            className="mr-4 shadow-xl cursor-pointer"
            href="https://www.linkedin.com/in/volodymyrcm/"
            iconName="linkedin"
          />
          <SocialLink
            className="lg:hidden shadow-xl cursor-pointer"
            href="mailto:volodyacm@gmai.com"
            iconName="email"
          />
          <SocialLink
            className="hidden lg:block shadow-xl cursor-pointer"
            href="mailto:volodyacm@gmai.com"
            text="volodyacm@gmai.com"
          />
        </>
      ) : (
        <>
          <SocialLink
            className="shadow-xl mx-auto cursor-pointer"
            href="https://github.com"
            iconName="github"
          />
          <SocialLink
            className="shadow-xl mx-auto cursor-pointer"
            href="https://linkedin.com"
            iconName="linkedin"
          />
          <SocialLink
            className="shadow-xl mx-auto cursor-pointer"
            href="mailto:volodyacm@gmai.com"
            iconName="email"
          />
        </>
      )}
    </div>
  );
};

export default SocialLinks;

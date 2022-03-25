import cn from '@/helpers/classNames';
import NavLink from '@/components/NavLink';

const Navigation = () => {
  return (
    <div className="w-100 h-24 md:h-28 flex items-center">
      <div
        className={cn([
          'container bg-gray-300 h-16 flex',
          'justify-between items-center rounded',
          'px-7 shadow-2xl',
        ])}
      >
        <div className="font-bold text-2xl">
          <span className="text-slate-50">am</span>
          <span className="text-green bold">here.</span>
        </div>
        <object
          className="md:hidden"
          data="/icons/menu.svg"
          width="40"
          height="40"
        ></object>
        <nav className="hidden md:block text-slate-50 text-lg">
          <NavLink path="/">Home</NavLink>
          <NavLink path="/about">About</NavLink>
          <NavLink path="/skills">Skills</NavLink>
          <NavLink path="/portfolio">Portfolio</NavLink>
          <NavLink path="/contacts">Contacts</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;

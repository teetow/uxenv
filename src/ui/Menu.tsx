import clsx from "clsx";
import { HTMLProps, PropsWithChildren } from "react";
import { menu, submenu } from "./Menu.css";

type Props = HTMLProps<HTMLDivElement> &
  PropsWithChildren<{
    className?: string;
    isActive?: boolean;
    items?: Props[];
    title?: string;
  }>;

const Menu = ({
  className,
  isActive,
  items,
  onMouseLeave,
  title,
  children,
  ...props
}: Props) => {
  return (
    <div
      className={clsx(menu, className, { "is-active": isActive })}
      {...props}
    >
      <span className="title">{title}</span>

      {items && (
        <span className={clsx(submenu)} onMouseLeave={onMouseLeave}>
          {items.map((item, index) => {
            return (
              <Menu
                key={`${index}-${item.title}`}
                {...item}
                aria-label={item.title}
              />
            );
          })}
        </span>
      )}
    </div>
  );
};

export default Menu;

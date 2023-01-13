import clsx from "clsx";
import { HTMLProps, PropsWithChildren, useState } from "react";
import { menu, submenu } from "./Menu.css";

type Props = HTMLProps<HTMLDivElement> &
  PropsWithChildren<{
    className?: string;
    isActive?: boolean;
    items?: Props[];
    title?: string;
  }>;

const isDivider = (item: Props) => {
  return item.title?.replaceAll("=", "").length === 0;
};

const Menu = ({
  className,
  isActive,
  items,
  onMouseLeave,
  title,
  children,
  ...props
}: Props) => {
  const [active, setActive] = useState(-1);
  
  return (
    <div
      className={clsx(menu, className, { "is-active": isActive })}
      {...props}
    >
      <span className="title">{title}</span>

      {items && (
        <span className={clsx(submenu)} onMouseLeave={onMouseLeave}>
          {items.map((item, index) => {
            return isDivider(item) ? (
              <hr />
            ) : (
              <Menu
                key={`${index}-${item.title}`}
                aria-label={item.title}
                {...item}
              />
            );
          })}
        </span>
      )}
    </div>
  );
};

export default Menu;

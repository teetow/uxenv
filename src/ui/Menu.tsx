import clsx from "clsx";
import { HTMLProps, PropsWithChildren } from "react";
import { menu, submenu } from "./Menu.css";

type Props = HTMLProps<HTMLDivElement> &
  PropsWithChildren<{
    isActive?: boolean;
    title?: string;
    items?: Props[];
    className?: string;
  }>;

const Menu = ({
  title,
  isActive,
  className,
  items,
  children,
  onMouseLeave,
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
              "items" in item && (
                <Menu key={`${index}`} {...item} aria-label={item.title} />
              )
            );
          })}
        </span>
      )}
    </div>
  );
};

export default Menu;

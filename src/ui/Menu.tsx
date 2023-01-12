import clsx from "clsx";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  title?: string;
  items?: Props[];
  className?: string;
}>;

const Menu = ({ title, className, items, children }: Props) => {
  return (
    <div className={clsx("ue-menu", className)}>
      <span className="title">{title}</span>

      {items && (
        <span className="submenu">
          {items.map((item) => {
            return "items" in item && <Menu {...item} />;
          })}
        </span>
      )}
    </div>
  );
};

export default Menu;

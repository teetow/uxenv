import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren, useRef } from "react";
import useReveal from "../lib/useReveal";
import Menu from "./Menu";
import { menubar, menubaritem } from "./MenuBar.css";

const MenuBarItem = ({ title, items }: ItemProps) => (
  <div title={title}>
    {items?.map((item, index) => (
      <MenuBarItem key={`${index}-${item.title}`} {...item} />
    ))}
  </div>
);

type ItemProps = {
  key?: any;
  className?: string;
  items?: ItemProps[];
  isOpen?: boolean;
  title?: string;
} & HTMLAttributes<HTMLDivElement>;

type Props = PropsWithChildren<
  { items: ItemProps[] } & HTMLAttributes<HTMLDivElement>
>;

const MenuBar = ({ items: menuItems, ...props }: Props) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen, activeId, setActiveId] = useReveal(menuRef);

  return (
    <div className={menubar} ref={menuRef} {...props} tabIndex={0}>
      {menuItems.map(({ items: subItems, ...barprops }, index) => {
        return (
          <div
            {...barprops}
            className={clsx(menubaritem, { "is-open": isOpen })}
            key={`${index}-${barprops.title}`}
            onMouseEnter={() => setActiveId(index)}
            onFocus={() => setActiveId(index)}
            onClick={() => setIsOpen(true)}
          >
            <div className="title">{barprops.title}</div>
            {subItems?.map((subItem, i) => (
              <MenuBarItem key={`${i}-${subItem.title}`} {...subItem} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default MenuBar;

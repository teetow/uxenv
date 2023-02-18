import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren, useRef } from "react";
import useReveal from "../lib/useReveal";
import Menu from "./Menu";
import { menuitem, menu__list } from "./Menu.css";
import { menubar, menubarmenu } from "./MenuBar.css";

type WrapperProps = {
  title?: string;
  items?: DropdownProps[];
  showItems?: boolean;
} & HTMLAttributes<HTMLDivElement>;

const DropDownMenuItem = ({ title, items, ...props }: WrapperProps) => {
  return (
    <Menu.Item title={title} {...props}>
      {items?.map((item, index) => (
        <DropDownMenuItem key={`${index}`} {...item} />
      ))}
    </Menu.Item>
  );
};

type DropdownProps = PropsWithChildren<{
  key?: any;
  className?: string;
  items: DropdownProps[];
  showItems?: boolean;
  title?: string;
}> &
  HTMLAttributes<HTMLDivElement>;

const DropdownMenu = ({ items, ...props }: DropdownProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId, isOpen, setIsOpen] = useReveal(menuRef);
  return (
    <div className={clsx(menu__list, menubarmenu)} ref={menuRef}>
      {items.map((item, index) => {
        return (
          <DropDownMenuItem
            key={`${index}-${item.title}`}
            {...item}
            showItems={activeId === index}
            onClick={() => setActiveId(index)}
          />
        );
      })}
    </div>
  );
};

type Props = PropsWithChildren<
  { items: DropdownProps[] } & HTMLAttributes<HTMLDivElement>
>;

const MenuBar = ({ items: menuItems, ...props }: Props) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId, isOpen, setIsOpen] = useReveal(menuRef);

  return (
    <div className={menubar} ref={menuRef} {...props} tabIndex={0}>
      {menuItems.map(({ ...barItemProps }, barItemIndex) => {
        return (
          <div
            key={`${barItemIndex}`}
            className={clsx(menuitem, {
              "is-active": isOpen && activeId === barItemIndex,
            })}
            onClick={() => {
              setIsOpen(true);
              setActiveId(barItemIndex);
            }}
            onMouseEnter={() => setActiveId(barItemIndex)}
          >
            <div className="title">{barItemProps.title}</div>
            {isOpen && activeId === barItemIndex && (
              <DropdownMenu {...barItemProps} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MenuBar;

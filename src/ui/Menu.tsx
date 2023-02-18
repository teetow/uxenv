import clsx from "clsx";
import {
  Children,
  HTMLProps,
  isValidElement,
  Key,
  PropsWithChildren,
  useRef,
  useState,
} from "react";
import useClickOutside from "../lib/useClickOutside";
import { menu, menuitem, menu__list, menu__strip } from "./Menu.css";

type ItemProps = {
  title?: string;
  showItems?: boolean;
  onDeactivate?: () => void;
} & HTMLProps<HTMLDivElement>;

const MenuItem = ({
  title,
  showItems,
  onDeactivate,
  children,
  ...props
}: PropsWithChildren<ItemProps>) => {
  if (isDivider(title!)) {
    return <hr />;
  }
  const ref = useRef<HTMLDivElement>(null);
  const hasChildren = Children.count(children) > 0;

  return (
    <div
      className={clsx(menuitem, { "is-active": showItems })}
      {...props}
      ref={ref}
    >
      <div className={menu__strip}>
        <div className="title">{title}</div>
        {hasChildren && <span className="chevron">&gt;</span>}
      </div>
      {showItems && hasChildren && <div className={menu__list}>{children}</div>}
    </div>
  );
};

export const isDivider = (menutitle: string) => {
  return menutitle.replaceAll("=", "").length === 0;
};

type Props = {
  className?: string;
  isOpen?: boolean;
};

const Menu = ({ className, isOpen, children }: PropsWithChildren<Props>) => {
  const [currentId, setCurrentId] = useState<Key | null>();
  const menuRef = useRef<HTMLDivElement>(null);
  const handleDeactivate = () => {
    setCurrentId("");
  };

  useClickOutside(menuRef, handleDeactivate);

  return (
    <div className={clsx(className, menu, { "is-open": isOpen })} ref={menuRef}>
      {
        <div className="content">
          {Children.toArray(children).map((child) => {
            if (isValidElement(child)) {
              const { children, ...childProps } = child.props;
              const showItems = currentId === child.key;

              if (isDivider(child.props.title)) {
                return <hr key={child.key} />;
              }

              return (
                <MenuItem
                  key={child.key}
                  {...childProps}
                  onClick={() => setCurrentId(child.key)}
                  showItems={showItems}
                >
                  {children}
                </MenuItem>
              );
            } else return <>not an element</>;
          })}
        </div>
      }
    </div>
  );
};

Menu.Item = MenuItem;

export default Menu;

export const XTest = () => {
  return (
    <Menu>
      <MenuItem title="foo"></MenuItem>
      <MenuItem title="bar"></MenuItem>
      <MenuItem title="withChildren">
        <Menu>
          <MenuItem title="foo"></MenuItem>
          <MenuItem title="foo"></MenuItem>
          <MenuItem title="foo"></MenuItem>
          <MenuItem title="foo"></MenuItem>
          <MenuItem title="withChildren">
            <Menu>
              <MenuItem title="foo"></MenuItem>
              <MenuItem title="foo"></MenuItem>
              <MenuItem title="foo"></MenuItem>
              <MenuItem title="foo"></MenuItem>
              <MenuItem title="foo"></MenuItem>
              <MenuItem title="foo"></MenuItem>
              <MenuItem title="bar"></MenuItem>
            </Menu>
          </MenuItem>
          <MenuItem title="foo"></MenuItem>
          <MenuItem title="foo"></MenuItem>
          <MenuItem title="bar"></MenuItem>
        </Menu>
      </MenuItem>
      <MenuItem title="bazooka"></MenuItem>
    </Menu>
  );
};

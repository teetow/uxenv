import React, {
  Children,
  ComponentProps,
  FunctionComponent,
  isValidElement,
  PropsWithChildren,
} from "react";
import Menu from "./Menu";

type MenuProps = ComponentProps<typeof Menu>;
type MenuComponent = FunctionComponent<MenuProps>;

const childIsMenu = (
  element: MenuComponent | unknown
): element is MenuComponent => {
  return isValidElement<MenuProps>(element) && "items" in element;
};

type Props = PropsWithChildren<{ items: MenuProps[] }>;

const MenuBar = ({ items }: Props) => {
  return (
    <div className="ue-menubar">
      {items.map((item) => {
        return <Menu {...item} />;
      })}
    </div>
  );
};

export default MenuBar;

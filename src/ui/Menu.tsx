import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  title: string;
  items: Props[];
}>;

const Menu = ({ items }: Props) => {
  return (
    <div className="ue-menu">
      {items &&
        items.map((item) => {
          return (
            <div>
              {item.title}
              {"items" in item && <Menu items={item.items} />}
            </div>
          );
        })}
    </div>
  );
};

export default Menu;

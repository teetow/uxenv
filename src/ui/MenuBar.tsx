import {
  ComponentProps,
  FunctionComponent,
  isValidElement,
  PropsWithChildren,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import Menu from "./Menu";
import { menubar, menuitem } from "./MenuBar.css";

type MenuProps = ComponentProps<typeof Menu>;
type MenuComponent = FunctionComponent<MenuProps>;

const childIsMenu = (
  element: MenuComponent | unknown
): element is MenuComponent => {
  return isValidElement<MenuProps>(element) && "items" in element;
};

type Props = PropsWithChildren<{ items: MenuProps[] }>;

const MenuBar = ({ items }: Props) => {
  const [activeId, setActiveId] = useState<number>(-1);
  const [isActive, setIsActive] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClick = (ev: MouseEvent) => {
    if (
      ev.target instanceof HTMLElement &&
      menuRef?.current?.contains(ev.target)
    ) {
      console.log("wahey");
    } else {
      setActiveId(-1);
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleClick);
  });

  return (
    <div className={menubar} ref={menuRef}>
      {items.map((item, index) => {
        return (
          <Menu
            className={menuitem}
            key={`${index}-${item.title}`}
            isActive={isActive && index === activeId}
            onMouseEnter={() => setActiveId(index)}
            onClick={() => setIsActive(true)}
            {...item}
          />
        );
      })}
    </div>
  );
};

export default MenuBar;

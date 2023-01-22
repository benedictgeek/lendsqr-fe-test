import {
  createRef,
  useEffect,
  useState,
  MouseEvent,
  ReactNode,
  PropsWithChildren,
  HTMLProps,
  FC,
} from "react";

import styles from "./dropdown.module.scss";

interface DropdownProps extends Omit<HTMLProps<HTMLDivElement>, "content"> {
  content: ReactNode;
  contentClassName?: string;
  externalToggle?: boolean;
  open?: boolean;
  handleClose?: () => void;
}

const Dropdown = ({
  children,
  content,
  contentClassName,
  externalToggle = false,
  open,
  handleClose,
  ...props
}: DropdownProps & { children: ReactNode }) => {
  const [visible, setVisible] = useState(false);
  const [position, setPsition] = useState(styles.left);

  const ref = createRef<HTMLDivElement>();

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const screenWidth = window.innerWidth;
      if (rect.right > screenWidth / 2) {
        setPsition(styles.right);
      } else {
        setPsition(styles.left);
      }
    }
    const handleClick = (event: any) => {
      if (!ref.current?.contains(event.target)) {
        if (externalToggle) {
          handleClose!();
        } else {
          setVisible(false);
        }
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref, setVisible]);

  const handleClick = () => {
    if (!externalToggle) {
      setVisible(!visible);
    } else {
    }
  };

  const show = externalToggle ? open : visible;

  return (
    <div className={`${styles.dropdown}`} ref={ref} {...props}>
      <div onClick={handleClick}>{children}</div>
      {show && (
        <div
          className={`${styles.dropdownContent} ${position} ${contentClassName}`}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

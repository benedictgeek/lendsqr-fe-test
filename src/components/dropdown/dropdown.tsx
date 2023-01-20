import {
  Children,
  cloneElement,
  createRef,
  useEffect,
  useState,
  MouseEvent,
} from "react";

import styles from "./dropdown.module.scss";

const Dropdown = ({ children, content }: any) => {
  const [visible, setVisible] = useState(false);
  const [position, setPsition] = useState(styles.left);

  const ref = createRef<HTMLDivElement>();

  useEffect(() => {
    console.log("REFF", ref);
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const screenWidth = window.innerWidth;
      console.log(screenWidth, rect.right);
      if (rect.right > screenWidth / 2) {
        setPsition(styles.right);
      } else {
        setPsition(styles.left);
      }
    }
    const handleClick = (event: any) => {
      if (!ref.current?.contains(event.target)) {
        setVisible(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref, setVisible]);

  return (
    <div className={`${styles.dropdown}`} ref={ref}>
      <div onClick={() => setVisible(!visible)}>{children}</div>
      {visible && (
        <div className={`${styles.dropdownContent} ${position}`}>{content}</div>
      )}
    </div>
  );
};

export default Dropdown;

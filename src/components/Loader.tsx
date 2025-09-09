import { useEffect, useState } from "react";

interface LoaderProps {
  isVisible: boolean;
  onHide?: () => void;
}

const Loader = ({ isVisible, onHide }: LoaderProps) => {
  const [show, setShow] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        onHide?.();
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onHide]);

  if (!show) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
      data-loader
    >
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
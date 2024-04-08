import { MutableRefObject, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function useScrollTo(
  value: string,
  ref: MutableRefObject<HTMLElement | null>,
) {
  const location = useLocation();
  const navigate = useNavigate();

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (location.state?.to === value) {
      const delay = setTimeout(() => {
        window.scrollTo({
          top: ref.current?.offsetTop,
          behavior: "smooth",
        });
        navigate(location.pathname, {});
      }, 40);
      return () => clearTimeout(delay);
    }
  }, [location.pathname, location.state, navigate, ref, value]);
}

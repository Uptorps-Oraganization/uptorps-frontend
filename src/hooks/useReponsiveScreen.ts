import { useMediaQuery } from "react-responsive";

export const useReponsiveScreen = () => {
  const isSmallScreen = useMediaQuery({
    query: "(min-width: 640px)",
  });
  const isMediumScreen = useMediaQuery({ query: "(min-width: 768px)" });
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  return {
    isSmallScreen,
    isMediumScreen,
    isLargeScreen,
  };
};

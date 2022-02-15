// This Custom Hook was built to fix a bug following this answer:
// https://stackoverflow.com/questions/55271855/react-material-ui-ssr-warning-prop-d-did-not-match-server-m-0-0-h-24-v-2

import { useEffect, useState } from "react";

export const useLoaded = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  return loaded;
};

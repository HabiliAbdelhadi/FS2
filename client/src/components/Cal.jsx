import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function CalComp() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal.ns["group30"]("ui", {
        styles: { branding: { brandColor: "#74d143" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <Cal
      namespace="group30"
      calLink="abdelhadi-habili-s2fh6k/group30"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view" }}
    />
  );
}

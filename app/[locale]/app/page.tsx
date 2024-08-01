import { redirect } from "@/navigation";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({ params: { locale } }: any) {
  unstable_setRequestLocale(locale);

  return redirect(`/app/summarize`);
}

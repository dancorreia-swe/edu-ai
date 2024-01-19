import { redirect } from "@/navigation";

export default function Home() {
  return redirect(`/app/summarize`);
}

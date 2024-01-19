import { permanentRedirect } from "next/navigation";

type HomeProps = {
  params: {
    lng: string;
  };
};

export default function Home({ params: { lng } }: HomeProps) {
  return permanentRedirect(`/${lng}/app/summarize`);
}

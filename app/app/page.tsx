import { redirect } from "next/navigation";
import React from "react";

const Page = () => {
  redirect("/app/summarize");
};

export default Page;

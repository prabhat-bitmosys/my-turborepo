import { Button } from "@repo/ui/button";
import { Links } from "@repo/ui/links";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="mb-10">
        <h1>Web</h1>
      </div>
      <Button />
      <Links />
    </main>
  );
}

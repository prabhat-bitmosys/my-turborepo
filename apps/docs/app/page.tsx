import { Button } from "@repo/ui/button";
import { Name } from "@repo/ui/name";
import { Password } from "@repo/ui/password";
import { Address } from "@repo/ui/address";
import { Links } from "@repo/ui/links";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1>Docs</h1>
      <form className="w-full mt-10 max-w-lg">
        {/* First Name and Last Name */}
        <Name />
        {/* Password Input Filed */}
        <Password />
        {/* Address Input Field with City, State, Zip */}
        <Address />
        <div className="flex my-10 justify-center">
          <Button />
        </div>
      </form>

      <Links />
      {/* <div className={styles.grid}>
        {LINKS.map(({ title, href, description }) => (
          <Card className={styles.card} href={href} key={title} title={title}>
            {description}
          </Card>
        ))}
      </div> */}
    </main>
  );
}

import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }
  // no user? go back to login

  const store = await prismadb.store.findFirst({
    where: {
        userId
    }
  })
  //looking for the first store available for the logged in user

  if (store) {
    redirect(`/${store.id}`);
  }
  return (
    <>
    {children}
    </>
  )
}

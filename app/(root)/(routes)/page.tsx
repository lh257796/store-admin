"use client";
import { useEffect } from "react";
import { useStoreModal } from "@/hooks/use-store-modal";
//modal is a client component
// import { UserButton } from "@clerk/nextjs";
//  <UserButton afterSignOutUrl="/"/>

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if(!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen])

  return null;
};

export default SetupPage;

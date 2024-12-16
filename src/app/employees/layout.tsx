import { Header } from "@components/header";
import { ThemedLayoutV2 } from "@refinedev/mui";
import React from "react";

export default async function Layout({ children }: React.PropsWithChildren) {
  return <ThemedLayoutV2 Header={Header}>{children}</ThemedLayoutV2>;
}

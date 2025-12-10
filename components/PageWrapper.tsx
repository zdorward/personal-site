import { ReactNode } from "react";

type PageWrapperProps = {
  children: ReactNode;
};

export function PageWrapper({ children }: PageWrapperProps) {
  return <section className="py-10 md:py-14 space-y-8">{children}</section>;
}

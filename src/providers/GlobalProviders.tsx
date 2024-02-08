"use client";

import { ThemeProvider } from "next-themes";

type GlobalProvidersProps = {
    children: React.ReactNode;
};

const GlobalProviders = ({ children }: GlobalProvidersProps) => {
    return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
       {children}
    </ThemeProvider>
   );
};

export default GlobalProviders;
export default {
  mainNav: [
    {
      path: "/docs",
      name: "Docs",
      eq: (pathname: string) => pathname.startsWith("/docs") && !pathname.startsWith("/docs/components")
    },
    {
      path: "/docs/components",
      name: "Components",
      eq: (pathname: string) => pathname.startsWith("/docs/components")
    },
    {
      path: "https://github.com/p-sw/ui",
      name: "Github",
      eq: () => false
    }
  ],
  sideNav: {
    "Documents": [
      {
        path: "/docs",
        name: "Introduction",
        eq: (pathname: string) => pathname === "/docs"
      },
      {
        path: "/docs/installation",
        name: "Installation",
        eq: (pathname: string) => pathname === "/docs/installation"
      }
    ],
    "Components": [
      {
        path: "/docs/components/button",
        name: "Button",
        eq: (pathname: string) => pathname === "/docs/components/button"
      },
      {
        path: "/docs/components/checkbox",
        name: "Checkbox",
        eq: (pathname: string) => pathname === "/docs/components/checkbox"
      },
      {
        path: "/docs/components/dialog",
        name: "Dialog",
        eq: (pathname: string) => pathname === "/docs/components/dialog"
      },
      {
        path: "/docs/components/drawer",
        name: "Drawer",
        eq: (pathname: string) => pathname === "/docs/components/drawer"
      },
      {
        path: "/docs/components/input",
        name: "Input",
        eq: (pathname: string) => pathname === "/docs/components/input"
      },
      {
        path: "/docs/components/label",
        name: "Label",
        eq: (pathname: string) => pathname === "/docs/components/label"
      },
      {
        path: "/docs/components/switch",
        name: "Switch",
        eq: (pathname: string) => pathname === "/docs/components/switch"
      },
      {
        path: "/docs/components/tabs",
        name: "Tabs",
        eq: (pathname: string) => pathname === "/docs/components/tabs"
      },
      {
        path: "/docs/components/toast",
        name: "Toast",
        eq: (pathname: string) => pathname === "/docs/components/toast"
      },
      {
        path: "/docs/components/tooltip",
        name: "Tooltip",
        eq: (pathname: string) => pathname === "/docs/components/tooltip"
      }
    ]
  }
}


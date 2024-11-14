declare module '*.svg' {
  import type { FunctionComponent } from 'react';

  export default FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.gif' {
  const value: string;
  export default value;
}

declare module '*.bmp' {
  const value: string;
  export default value;
}

declare module '*.tiff' {
  const value: string;
  export default value;
}

declare module '*.module.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.module.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '@theme/Layout' {
  interface LayoutProps {
    title?: string;
    description?: string;
    children: React.ReactNode;
  }

  const Layout: React.FunctionComponent<LayoutProps>;
  export default Layout;
}

declare module '@docusaurus/Link' {
  interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    to: string;
    activeClassName?: string;
    isNavLink?: boolean;
    exact?: boolean;
  }

  const Link: React.FunctionComponent<LinkProps>;
  export default Link;
}

declare module '@docusaurus/useDocusaurusContext' {
  interface DocusaurusContext {
    siteConfig: {
      title: string;
      tagline: string;
      url: string;
      baseUrl: string;
      favicon: string;
      organizationName: string;
      projectName: string;
    };
  }

  function useDocusaurusContext(): {
    siteConfig: DocusaurusContext['siteConfig'];
  };
  export default useDocusaurusContext;
}

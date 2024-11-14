import { LayoutMockProps } from '../../types/types.d';

const Component = ({ title, description, children }: LayoutMockProps) => (
  <div data-testid="mock-layout">
    <div data-testid="mock-layout-title">{title}</div>
    <div data-testid="mock-layout-description">{description}</div>
    <div data-testid="mock-layout-children">{children}</div>
  </div>
);

export default Component;

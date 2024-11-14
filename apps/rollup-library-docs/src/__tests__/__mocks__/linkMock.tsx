import { LinkMockProps } from '../../types/types.d';

const Component = ({ className, to }: LinkMockProps) => (
  <div data-testid="mock-link">
    <div data-testid="mock-link-classname">{className}</div>
    <div data-testid="mock-link-to">{to}</div>
  </div>
);

export default Component;

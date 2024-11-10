import '@testing-library/jest-dom';

import * as e from '../index';

describe('index.ts exports', () => {
  it('snapshot test', () => {
    expect(e).toMatchSnapshot();
  });

  it('should export ReduxProvider', () => {
    expect(e).toHaveProperty('ReduxProvider');
  });
});
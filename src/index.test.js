import rawStyled from 'styled-components';
import * as styled from './';

// TODO add more comprehensive test
describe('styled-components-shortcuts', () => {
  ['ServerStyleSheet', 'StyleSheetManager', 'ThemeProvider', 'css', 'injectGlobal', 'keyframes', 'withTheme']
    .forEach((key) => {
      test(`exports { ${key} }`, () => {
        expect(typeof styled[key]).toBe('function');
      });
    });
  test('exports a default wrapped styled', () => {
    expect(typeof styled.default).toBe('function');
    expect(typeof styled.default.div).toBe('function');
  });
  test('that is not the original styled', () => {
    expect(rawStyled).not.toBe(styled.default);
  });
});

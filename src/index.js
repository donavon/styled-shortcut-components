import * as styled from 'styled-components';
import shortcuts from 'styled-shortcuts';

module.exports = {
  ...styled,
  default: shortcuts(styled.default),
  __esModule: true, // Marker to allow default import.
};

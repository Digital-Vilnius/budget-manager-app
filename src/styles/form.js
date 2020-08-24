import styled from 'styled-components';
import COLORS from './colors';
import * as Typography from './typography';

const Container = styled.View`
  width: 100%;
  height: 70px;
  border-bottom-width: 1px;
  border-bottom-color: ${COLORS.LIGHT_GREY};
`;

const Select = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
`;

const Value = styled(Typography.RegularText)`
  color: ${COLORS.BLACK};
  font-size: 14px;
  line-height: 16px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 40px;
`;

const Placeholder = styled(Typography.RegularText)`
  color: ${COLORS.GREY};
  font-size: 14px;
  line-height: 16px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 40px;
`;

const Label = styled(Typography.LightText)`
  font-size: 12px;
  position: absolute;
  top: 15px;
  left: 15px;
  line-height: 14px;
  color: ${COLORS.DARK_BLUE};
`;

export { Container, Label, Select, Value, Placeholder };

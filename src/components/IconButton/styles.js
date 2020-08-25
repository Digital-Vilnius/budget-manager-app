import styled from 'styled-components';
import { COLORS, Typography } from 'styles';
import hexToRgba from 'hex-to-rgba';

const Container = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: ${hexToRgba(COLORS.BLACK, 0.3)};
`;

const BadgeCountContainer = styled.View`
  position: absolute;
  right: -6px;
  top: -6px;
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: ${COLORS.RED};
`;

const BadgeCount = styled(Typography.BoldText)`
  color: ${COLORS.WHITE};
  font-size: 12px;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
`;

export { Container, BadgeCount, BadgeCountContainer };

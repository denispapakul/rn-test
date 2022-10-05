import React from 'react';
import styled from '@emotion/native';

import {Typography} from './typography';

interface IDetailsLine {
  label?: string;
  children: string;
  weight?: string;
}

export const DetailsLine: React.FC<IDetailsLine> = ({
  label,
  children,
  weight,
}) => {
  return (
    <DetailsLineContainer>
      <DetailsLineLabel fontSize={14} weight="regular">
        {label}
      </DetailsLineLabel>

      <DetailsLineContent weight={weight}>{children}</DetailsLineContent>
    </DetailsLineContainer>
  );
};

const DetailsLineContainer = styled.View({
  marginVertical: 5,
  flexDirection: 'row',
});

const DetailsLineContent = styled(Typography)({
  flex: 1,
  textAlign: 'right',
});

const DetailsLineLabel = styled(Typography)({
  marginRight: 16,
});

DetailsLineContent.defaultProps = {
  fontSize: 14,
};

import React from 'react';
import './DashboardFooter.scss';
import { Flex, Text } from '@chakra-ui/react';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';

const DashboardFooter: React.FC = () => {
  const responsiveTitle = {
    base: '1em',
    sm: '0.5em',
    md: '0.6em',
    lg: '1em',
    '2xl': '1.4em',
  };

  return (
    <>
      <footer className="footer">
        <Flex className="footer-flexbox">
          <Text fontSize={responsiveTitle} fontFamily="Rubik" fontWeight="500">
            Created with
            {' '}
            <FavoriteOutlinedIcon />
            {' '}
            by WEB MAXIMA 2021 Team
          </Text>
        </Flex>
      </footer>
    </>
  );
};

export default DashboardFooter;

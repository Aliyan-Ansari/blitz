import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Link,
} from '@chakra-ui/react';
import classes from './MobileFooter.module.css';
import { AiFillWindows } from 'react-icons/ai';
import { GiPunch } from 'react-icons/gi';

const company = ['About Us', 'Partnerships', 'Careers', 'Branding', 'FAQ'];
const socials = ['Facebook', 'Twitter', 'Instagram', 'Our Discord'];
const games = [
  'League of Legends',
  'Teamfight Tactics ',
  'Valorant',
  'CS:GO',
  'Apex Legends',
];

const MobileFooter = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.row}>
        <div className={classes.actionCol}>
          <div className={classes.actionWrapper}>
            <div className={classes.logoContainer}>
              <div className={classes.logoIcon}>
                <svg
                  width='34'
                  height='34'
                  viewBox='0 0 50 50'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M21.097 48c-1.933 0-3.44-1.657-3.234-3.557l1.463-13.494a.861.861 0 0 0-.862-.949H7.384a1.74 1.74 0 0 1-1.321-.604l-1.15-1.337a1.699 1.699 0 0 1-.05-2.159L24.99.166A.436.436 0 0 1 25.334 0h1.534c1.933 0 3.44 1.657 3.234 3.557l-1.463 13.495A.861.861 0 0 0 29.5 18h11.088c.504 0 .983.216 1.312.593l1.177 1.346c.54.617.564 1.525.059 2.17L22.974 47.834a.435.435 0 0 1-.343.166h-1.534Z'
                    fill='url(#blitz-a-0)'
                  ></path>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='m20.652 31.092-1.463 13.495c-.119 1.094.75 2.08 1.908 2.08h1.098l19.892-25.38a.365.365 0 0 0-.013-.47l-1.176-1.346a.41.41 0 0 0-.309-.138H29.501c-1.292 0-2.33-1.113-2.188-2.425l1.463-13.495c.119-1.094-.75-2.08-1.908-2.08H25.77L5.912 26.722a.365.365 0 0 0 .012.468l1.15 1.336a.41.41 0 0 0 .31.14h11.08c1.291 0 2.33 1.114 2.188 2.426Zm-2.789 13.351c-.206 1.9 1.3 3.557 3.234 3.557h1.534c.134 0 .26-.061.343-.166l20.163-25.725a1.699 1.699 0 0 0-.06-2.17l-1.176-1.346A1.743 1.743 0 0 0 40.59 18H29.501a.861.861 0 0 1-.863-.948l1.463-13.495c.207-1.9-1.3-3.557-3.233-3.557h-1.534a.436.436 0 0 0-.343.166L4.861 25.9a1.699 1.699 0 0 0 .05 2.159l1.15 1.337c.33.383.814.604 1.322.604h11.08a.86.86 0 0 1 .862.948l-1.463 13.495Z'
                    fill='url(#blitz-b-0)'
                  ></path>
                  <defs>
                    <linearGradient
                      id='blitz-a-0'
                      x1='37.146'
                      y1='30.595'
                      x2='14.827'
                      y2='11.601'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stop-color='#CE0F50'></stop>
                      <stop offset='1' stop-color='#FE112D'></stop>
                    </linearGradient>
                    <linearGradient
                      id='blitz-b-0'
                      x1='24'
                      y1='0'
                      x2='24'
                      y2='48'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stop-color='#FF003D'></stop>
                      <stop
                        offset='1'
                        stop-color='#FF003D'
                        stop-opacity='0'
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className={classes.logo}>PORTAL.IO</span>
            </div>
            {/* <a className={`${classes.downloadAction}`} title="Windows 64-bit">
              <AiFillWindows style={{ fontSize: 24, marginRight: 10 }} />{" "}
              Download
            </a> */}
            <a className={`${classes.punchAction} `} title='Windows 64-bit'>
              <GiPunch style={{ fontSize: 24, marginRight: 10 }} /> Riot Games
              Compliant
            </a>
          </div>
          {/* <span className={classes.madeWith}>
            Made with Lots of Love and Tilt in Vietnam
          </span> */}
        </div>
        <div className={classes.accordionCol}>
          <Accordion
            defaultIndex={[0]}
            allowMultiple
            bg='#13151B'
            color='white'
            width='90vw'
            isFocusable={true}
            pr={2}
            pl={2}
            pt={4}
          >
            <AccordionItem
              className={classes.accordionTitle}
              border={'none'}
              _active={{ bg: '#272A30' }}
              _focus={{ bg: '#272A30' }}
            >
              <h2>
                <AccordionButton>
                  <Box
                    as='span'
                    flex='1'
                    textAlign='left'
                    p={4}
                    fontWeight='bold'
                  >
                    Supported Games
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box
                  as='ul'
                  listStyleType='none'
                  color='hsla(222deg 5% 62% / 1)'
                  alignItems='flex-start'
                  justifyContent={'flex-start'}
                  textAlign='left'
                  fontSize={16}
                  fontWeight='500'
                  lineHeight='1.5'
                >
                  <Link
                    as='li'
                    href='#'
                    textDecoration='none'
                    p={4}
                    pt={0}
                    _hover={{
                      color: 'hsla(222deg 5% 52% / 1)',
                      textDecoration: 'none',
                    }}
                  >
                    League of Legends
                  </Link>
                  <Link
                    as='li'
                    href='#'
                    textDecoration='none'
                    p={4}
                    pt={0}
                    _hover={{
                      color: 'hsla(222deg 5% 52% / 1)',
                      textDecoration: 'none',
                    }}
                  >
                    Teamfight Tactics
                  </Link>
                  <Link
                    as='li'
                    href='#'
                    textDecoration='none'
                    p={4}
                    pt={0}
                    _hover={{
                      color: 'hsla(222deg 5% 52% / 1)',
                      textDecoration: 'none',
                    }}
                  >
                    Valorant
                  </Link>
                  <Link
                    as='li'
                    href='#'
                    textDecoration='none'
                    p={4}
                    pt={0}
                    _hover={{
                      color: 'hsla(222deg 5% 52% / 1)',
                      textDecoration: 'none',
                    }}
                  >
                    CS:GO
                  </Link>
                  <Link
                    as='li'
                    href='#'
                    textDecoration='none'
                    p={4}
                    pt={0}
                    _hover={{
                      color: 'hsla(222deg 5% 52% / 1)',
                      textDecoration: 'none',
                    }}
                  >
                    Apex Legends
                  </Link>
                </Box>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem
              border={'none'}
              _active={{ bg: '#272A30' }}
              _focus={{ bg: '#272A30' }}
            >
              <h2>
                <AccordionButton>
                  <Box
                    as='span'
                    flex='1'
                    textAlign='left'
                    p={4}
                    fontWeight='bold'
                  >
                    Company
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box
                  as='ul'
                  listStyleType='none'
                  color='hsla(222deg 5% 62% / 1)'
                  alignItems='flex-start'
                  justifyContent={'flex-start'}
                  textAlign='left'
                  fontSize={16}
                  fontWeight='500'
                  lineHeight='1.5'
                >
                  <Link
                    as='li'
                    href='#'
                    textDecoration='none'
                    p={4}
                    pt={0}
                    _hover={{
                      color: 'hsla(222deg 5% 52% / 1)',
                      textDecoration: 'none',
                    }}
                  >
                    About Us
                  </Link>
                  <Link
                    as='li'
                    href='#'
                    textDecoration='none'
                    p={4}
                    pt={0}
                    _hover={{
                      color: 'hsla(222deg 5% 52% / 1)',
                      textDecoration: 'none',
                    }}
                  >
                    Partnerships
                  </Link>
                  <Link
                    as='li'
                    href='#'
                    textDecoration='none'
                    p={4}
                    pt={0}
                    _hover={{
                      color: 'hsla(222deg 5% 52% / 1)',
                      textDecoration: 'none',
                    }}
                  >
                    Careers
                  </Link>
                  <Link
                    as='li'
                    href='#'
                    textDecoration='none'
                    p={4}
                    pt={0}
                    _hover={{
                      color: 'hsla(222deg 5% 52% / 1)',
                      textDecoration: 'none',
                    }}
                  >
                    Branding
                  </Link>
                  <Link
                    as='li'
                    href='#'
                    textDecoration='none'
                    p={4}
                    pt={0}
                    _hover={{
                      color: 'hsla(222deg 5% 52% / 1)',
                      textDecoration: 'none',
                    }}
                  >
                    FAQ
                  </Link>
                </Box>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem
              border={'none'}
              _active={{ bg: '#272A30' }}
              _focus={{ bg: '#272A30' }}
            >
              <h2>
                <AccordionButton>
                  <Box
                    as='span'
                    flex='1'
                    textAlign='left'
                    p={4}
                    fontWeight='bold'
                  >
                    Socials
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box
                  as='ul'
                  listStyleType='none'
                  color='hsla(222deg 5% 62% / 1)'
                  alignItems='flex-start'
                  justifyContent={'flex-start'}
                  textAlign='left'
                  fontSize={16}
                  fontWeight='500'
                  lineHeight='1.5'
                >
                  <Link
                    as='li'
                    href='#'
                    textDecoration='none'
                    p={4}
                    pt={0}
                    _hover={{
                      color: 'hsla(222deg 5% 52% / 1)',
                      textDecoration: 'none',
                    }}
                  >
                    Facebook
                  </Link>
                  <Link
                    as='li'
                    href='#'
                    textDecoration='none'
                    p={4}
                    pt={0}
                    _hover={{
                      color: 'hsla(222deg 5% 52% / 1)',
                      textDecoration: 'none',
                    }}
                  >
                    Twitter
                  </Link>
                  <Link
                    as='li'
                    href='#'
                    textDecoration='none'
                    p={4}
                    pt={0}
                    _hover={{
                      color: 'hsla(222deg 5% 52% / 1)',
                      textDecoration: 'none',
                    }}
                  >
                    Instagram
                  </Link>
                  <Link
                    as='li'
                    href='#'
                    textDecoration='none'
                    p={4}
                    pt={0}
                    _hover={{
                      color: 'hsla(222deg 5% 52% / 1)',
                      textDecoration: 'none',
                    }}
                  >
                    Our Discord
                  </Link>
                </Box>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Box
            as='ul'
            listStyleType='none'
            color='hsla(222deg 5% 62% / 1)'
            alignItems='flex-start'
            justifyContent={'flex-start'}
            textAlign='left'
            p={6}
            pr={4}
            pt={0}
            fontFamily="'Inter', Arial, Helvetica, sans-serif"
          >
            <Link
              className={classes.madeWith}
              as='li'
              href='#'
              textDecoration='none'
              p={4}
              pb={0}
              _hover={{
                color: 'hsla(222deg 5% 52% / 1)',
                textDecoration: 'none',
              }}
            >
              English
            </Link>
            <Link
              className={classes.madeWith}
              as='li'
              href='#'
              textDecoration='none'
              p={4}
              pb={0}
              _hover={{
                color: 'hsla(222deg 5% 52% / 1)',
                textDecoration: 'none',
              }}
            >
              Terms of Service
            </Link>
            <Link
              className={classes.madeWith}
              as='li'
              href='#'
              textDecoration='none'
              p={4}
              pb={0}
              _hover={{
                color: 'hsla(222deg 5% 52% / 1)',
                textDecoration: 'none',
              }}
            >
              Privacy Policy
            </Link>
            <Link
              className={classes.madeWith}
              as='li'
              href='#'
              textDecoration='none'
              p={4}
              pr={2}
              _hover={{
                color: 'hsla(222deg 5% 52% / 1)',
                textDecoration: 'none',
              }}
            >
              <span className={classes.madeWith}>
                Made with Lots of Love and Tilt in Vietnam
              </span>
            </Link>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;

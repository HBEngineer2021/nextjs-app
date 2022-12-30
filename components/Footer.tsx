import { memo } from 'react';
// materialUI
import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const FooterContainer = styled('div')({
    backgroundColor: '#27272A',
    margin: '0 auto',
    paddingTop: '30px',
    paddingBottom: '30px',
    color: '#f2f2f2',
    letterSpacing: '0.08rem',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
});

export const Footer = memo(function footer() {
    return (
        <FooterContainer>
            <Grid item xs={10} md={8}>
                <div className="border-t-4 border-indigo-500 ..."></div>
                <Grid item sx={{ textAlign: 'center' }}>
                    <a href='https://twitter.com/HB_itprog'>
                        <TwitterIcon sx={{ m: 1 }} />
                    </a>
                    <a href='https://github.com/HBEngineer2021'>
                        <GitHubIcon sx={{ m: 1 }} />
                    </a>
                </Grid>
                <Typography variant='body2' sx={{ textAlign: 'center', fontWeight: '200' }}>
                    © 2022 - 2023 App.Dev Docs
                </Typography>
            </Grid>
        </FooterContainer>
    );
});
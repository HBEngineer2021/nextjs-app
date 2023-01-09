import { memo } from 'react';
// materialUI
import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import NoteIcon from '@mui/icons-material/Note';
import AppleIcon from '@mui/icons-material/Apple';
import AdbIcon from '@mui/icons-material/Adb';

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
    position: 'absolute',
    bottom: '0',
    width: '100%',
});

export const Footer = memo(function footer() {
    return (
        <div className='relative pb-32 box-border'>
            <FooterContainer>
                <Grid item xs={10} md={8}>
                    <div className="border-t-4 border-indigo-500"></div>
                    <Grid item sx={{ textAlign: 'center' }}>
                        <a href='https://github.com/HBEngineer2021'>
                            <GitHubIcon sx={{ m: 1 }} />
                        </a>
                        <a href='https://note.com/branch_it_sol205'>
                            <NoteIcon sx={{ m: 1 }} />
                        </a>
                        <a href='https://developer.apple.com/documentation/technologies'>
                            <AppleIcon sx={{ m: 1 }} />
                        </a>
                        <a href='https://developer.android.com/guide'>
                            <AdbIcon sx={{ m: 1 }} />
                        </a>
                    </Grid>
                    <Typography variant='body2' sx={{ textAlign: 'center', fontWeight: '200' }}>
                        © 2022 - 2023 Mobile Developer Docs
                    </Typography>
                </Grid>
            </FooterContainer>
        </div>
    );
});
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Grid, Typography } from '@mui/material';
import { map } from 'cheerio/lib/api/traversing';
import type { Blog } from '../types/article';

type Props = {
    blogs: Array<Blog>;
};

export function PageControl({
    blogs,
}: Props) {
    return (
        <div className="grid justify-items-center col-span-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
            <Grid item xs={10} md={8}>
                <Grid item sx={{ textAlign: 'center' }}>
                    <a href='https://github.com/HBEngineer2021'>
                        <ArrowBackIosNewIcon sx={{ m: 1 }} />
                    </a>
                    <span className="mr-6 ml-6">1 ... {blogs.length}</span>
                    <a href='https://github.com/HBEngineer2021'>
                        <ArrowForwardIosIcon sx={{ m: 1 }} />
                    </a>
                </Grid>
            </Grid>
        </div>
    );
}
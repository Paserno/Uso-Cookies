import { useState, ChangeEvent, FC } from 'react';
import { GetServerSideProps } from 'next';

import { Card, CardContent, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { Layout } from '../components/layout';
import Cookies from 'js-cookie';

const ThemeChangerPage: FC = (props) => {

    console.log({ props })

    const [currentTheme, setCurrentTheme] = useState('light');

    const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedTheme = event.target.value;
        
        console.log(selectedTheme)
        setCurrentTheme( selectedTheme );

        Cookies.set('theme', selectedTheme );
    }

    return (
        <Layout>
            <Card>
                <CardContent>
                    <FormControl>
                        <FormLabel>Tema</FormLabel>
                        <RadioGroup
                            value={ currentTheme }
                            onChange={ onThemeChange }
                        >
                            <FormControlLabel value='light' control={<Radio />} label="Light" />
                            <FormControlLabel value='dark' control={<Radio />} label="Dark" />
                            <FormControlLabel value='custom' control={<Radio />} label="Custom" />
                        </RadioGroup>
                    </FormControl>
                </CardContent>
            </Card>
        </Layout>
    )
}


// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    
    const { theme = 'light', name = 'No Name'} = req.cookies;


    return {
        props: {
            theme,
            name,
        }
    }
}



export default ThemeChangerPage;
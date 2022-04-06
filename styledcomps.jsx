import React from 'react';
import styled from 'styled-components'

const StyledFlex = styled.div`
display: flex;
flex-direction: ${props => props.direction || 'row'};
align-items: ${props => props.align || 'stretch'};
justify-content: ${props => props.justify || 'stretch'};
margin:${({margin}) => margin || '0'} ;
`

const Flex = (props) => {
    return <StyledFlex {...props} />
};

export default Flex;

/*
const AppWrapper = styled.div`
width:100%;
min-height: 100vh;
padding: 2rem;
background: black;
`

const App = () => {
    return (
        <AppWrapper>
            <Flex justify="center">
                <Title >Console cmd 2021. Ulbi TV</Title>
            </Flex>
            <Flex direction="column" margin={"10px 0"}>
                <Console/>
                <Button color="green"  align="flex-end">Отправить</Button>
            </Flex>
        </AppWrapper>
    );
};
-------------------------------------------
import React from 'react';
import styled from 'styled-components'

const StyledTitle = styled.h1`
color: ${props => props.color || props.theme.colors.primary};
`

const Title = (props) => {
    return <StyledTitle {...props}/>

};

export default Title;

--------------------------------------------
import React, {useState} from 'react';
import styled from 'styled-components'
import Flex from "./Flex";
import Line from "./Line";

const StyledConsole = styled.textarea`
width:100%;
height:70vh;
background: black;
font-size: 24px;
border: none;
resize: none;
color: ${props => props.color || props.theme.colors.primary};
&:focus {
    outline: none;
}
@media ${props => props.theme.media.phone} {
    border: 1px solid red;
}
@media ${props => props.theme.media.tablet} {
    border: 1px solid green;
}
`

const Console = ({color, ...props}) => {
    const [lines, setLines] = useState(['C/users/ULBI_TV>'])

    const onKeyPress = e => {
        if (e.charCode == 13) {
            setLines([...lines, "C/users/ULBI_TV>"])
        }
    }

    return (
        <Flex>
            <Flex direction={"column"} margin="0 10px">
                {lines.map(line =>
                    <Line color={color}>{line}</Line>
                )}
            </Flex>
            <StyledConsole onKeyPress={onKeyPress} color={color} {...props}/>
        </Flex>
    )

};

export default Console;

*/
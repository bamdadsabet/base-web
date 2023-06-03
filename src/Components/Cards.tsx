import React from 'react'
import {
    Card,
    StyledBody,
    StyledAction
} from "baseui/card";
import { Upload } from 'baseui/icon'; 
import { Cell, Grid } from 'baseui/layout-grid'
import { StyledLink } from "baseui/link"
import { StatefulTooltip } from "baseui/tooltip"



const Cards: React.FC = () => {
    return (
        <Card
            overrides={{
                Root: {
                    style: ({ $theme }) => ({
                        backgroundColor: $theme.colors.backgroundSecondary,
                        width: '450px',
                        border: 'none',
                        borderRadios: 0
                    })
                }
            }} 
        >
            <StyledBody>
                <Grid>
                    <Cell span={8}>
                        <Upload size={64} />
                        
                    </Cell>
                    <Cell>
                        <StatefulTooltip
                            content={() => (
                                <h1>Print</h1>
                            )}
                            returnFocus
                            autoFocus
                            >
                            <StyledLink href="#">
                                Print
                            </StyledLink>
                        </StatefulTooltip>
                        <StatefulTooltip
                            content={() => (
                                <h1>Print</h1>
                            )}
                            returnFocus
                            autoFocus
                            >
                            <StyledLink href="#">
                                <Upload size={22} />
                            </StyledLink>
                        </StatefulTooltip>
                    </Cell>     
                </Grid>
            </StyledBody>
            <StyledAction>
                Productive content text 1
                <br />
                Productive content text 2
            </StyledAction>
        </Card>  
    )
}

export default Cards
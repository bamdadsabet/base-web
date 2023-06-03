import React, { useState } from 'react'
import {ALIGN, HeaderNavigation, StyledNavigationItem, StyledNavigationList} from "baseui/header-navigation"
import { Button } from 'baseui/button'
import SideDrawer from './SideDrawer'

const index: React.FC = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const openDrawer = () => {setIsDrawerOpen(true)}
    const closeDrawer = () => {setIsDrawerOpen(false)}
    return (
        <>
            <HeaderNavigation>
                <StyledNavigationList $align={ALIGN.left}>
                    <StyledNavigationItem>Fabizi</StyledNavigationItem>
                    <StyledNavigationItem>
                        <Button onClick={openDrawer}>Open Drawer</Button>
                    </StyledNavigationItem>
                </StyledNavigationList>
            </HeaderNavigation>
            
            <SideDrawer isOPen={isDrawerOpen} onClose={closeDrawer} />
        </>
    
    )
}

export default index
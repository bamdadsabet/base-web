import React from 'react'
import { Drawer, ANCHOR } from "baseui/drawer"
import { Input } from 'baseui/input'
import { FormControl } from "baseui/form-control"
import {Textarea} from 'baseui/textarea'
import { Table } from "baseui/table-semantic"
import { Button, SIZE, SHAPE } from 'baseui/button'
import { useStyletron } from 'baseui'
import { styled } from 'styletron-react'
import { BaseButton } from 'baseui/button/styled-components'



interface props {
    isOPen: boolean
    onClose: () => void
}

const SideDrawer: React.FC<props> = ({isOPen, onClose}) => {
    const tableData = new Array(8).fill(['cell text', 'cell text'])
    const tableColNames = new Array(2).fill('column header')
    const buttonOverdrives = {
        BaseButton: {
            style: () => ({
                width: '45%',
                height: '80px',
                margin: '0 15px'
            })
        }
    }
    const [css] = useStyletron()
    return (
        <Drawer
            isOpen={isOPen}
            autoFocus
            onClose={onClose}
            anchor={ANCHOR.left}
        >
            {
                ['A', 'B', 'C', 'D'].map(item => 
                    <FormControl
                        label={() => `Input ${item}`}
                    >
                        <Input />
                    </FormControl>
                )
            }
            <FormControl
                label={() => `Notes`}
                caption={() => '0/100'}
            >
                <Textarea
                    placeholder="Try resizing me..."
                    resize='vertical'
                />
            </FormControl>
            <Table
                columns={tableColNames}
                data={tableData}
            /> 
            <div
                className={css({
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'absolute',
                    background: 'white',
                    width: '90%',
                    bottom: 0,
                    left: 0,
                    padding: '15px 2px'

                })}
            >
                <Button
                    size={SIZE.large}
                    shape={SHAPE.square}
                    overrides={{
                        ...buttonOverdrives
                    }}
                >
                    Submit
                </Button>
                <Button
                    size={SIZE.large}
                    shape={SHAPE.square}
                    overrides={{
                        ...buttonOverdrives
                    }}
                >
                    Cancel
                </Button>
            </div>           
        </Drawer>
    )
}

export default SideDrawer
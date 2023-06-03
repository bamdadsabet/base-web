import React from 'react'
import { ListItemLabel, ListItem } from "baseui/list";
import { useStyletron } from 'baseui';

const ContainedList: React.FC = () => {
    const [css] = useStyletron()
    return (
        <ul
            className={css({
            width: '60vw',
            paddingLeft: 0,
            paddingRight: 0,
            })}
        >
            <ListItem
                overrides={{
                    Root: {
                            style: ({ $theme }) => ({
                                borderBottom: `1px solid ${ $theme.colors.primary300 }`
                            })
                    }
                }}
            >
                <ListItemLabel>ListItem</ListItemLabel>
            </ListItem>
            <ListItem
                overrides={{
                    Root: {
                            style: ({ $theme }) => ({
                                borderBottom: `1px solid ${ $theme.colors.primary300 }`
                            })
                    }
                }}
            >
                <ListItemLabel>ListItem</ListItemLabel>
            </ListItem>
            <ListItem
                overrides={{
                    Root: {
                            style: ({ $theme }) => ({
                                borderBottom: `1px solid ${ $theme.colors.primary300 }`
                            })
                    }
                }}
            >
                <ListItemLabel>ListItem</ListItemLabel>
            </ListItem>
            <ListItem
                overrides={{
                    Root: {
                            style: ({ $theme }) => ({
                                borderBottom: `1px solid ${ $theme.colors.primary300 }`
                            })
                    }
                }}
            >
                <ListItemLabel>ListItem</ListItemLabel>
            </ListItem>
        </ul>
    )
}

export default ContainedList


// export default () => {
//   return (
   
//   );
// }
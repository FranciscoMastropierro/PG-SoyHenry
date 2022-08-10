import React from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
  } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

export default function FilterAcordion () {

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg='brand.green' color='gray.700' _active={{bg:'brand.lightGray'}}>
                Actions
            </MenuButton>
            <MenuList bg='brand.green' color='gray.700'>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
        </Menu>
    )
}
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AddLinkIcon from '@mui/icons-material/AddLink';
import History from './History';
export const  SideData =[
    {
        title: "onCampus",
        icon: <HomeIcon />,
        link: "/home"
    },
    {
        title: "OffCampus",
        icon: <AddLinkIcon />,
        link: "/home"
    },
    {
        title: "details",
        icon: <ManageAccountsIcon />,
        link: "/home"
    },
    {
        title: "Eligibility",
        icon: <CheckBoxIcon />,
        link: "/eligible"
    },
    {
        title: "History",
        icon: <HistoryIcon />,
        link: "/history"
    }
    
]


export default SideData;

// screencontrol id
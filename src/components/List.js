import { Box, Button, Container, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import { getRandomNumber } from "helpers/getRandomNumber";
import { useEffect, useRef, useState } from "react";
import backgroundImg from "../images/deer.png";
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';

export const List = () => {
    const [name, setName] = useState('');
    const [members, setMembers] = useState([]);
    const [recipients, setRecipients] = useState([]);
    const theme = useTheme();
    const containerRef = useRef(null);
    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
    
    const change = () => {
        if (members.length < 2) return;
        let numbers = members.map((el, i) => i);
        const mixArr = getRandomNumber(numbers);
        const newar = mixArr.map(el => members[el]);
        setRecipients(newar);
    };

    useEffect(() => {
        if (members.length > 0) {
            containerRef.current.scrollIntoView({ behavior: "smooth", block: "end", });
        }
    }, [members]);

    const handleClick = () => {
        if (!name || members.includes(name.trim())) return;

        setMembers(prevState => [...prevState, name]);
        setName('');
    };

    const handleReset = () => {
        setMembers([])
        setRecipients([])
    }

    const handleChange = (e) => {
        setName(e.target.value)
    };

    return (
        <Container
            ref={containerRef}
            maxWidth="md"
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: "32px",
                backgroundColor: 'grey.50',
                padding: "24px",
                backgroundImage: isMdUp ? `url(${backgroundImg})` : "none",
                backgroundPosition: 'right bottom',
                backgroundRepeat: 'no-repeat',
                backgroundSize: "280px auto",
            }}
        >
            <Typography variant="h4" component="h1" sx={{ color: "primary.dark" }}>
                Secret Santa Generator
            </Typography>
            <Box sx={{
                display: "flex",
                gap: "12px",
                flexDirection: "column",
                [theme.breakpoints.up("md")]: {
                    flexDirection: "row",
                }
            }}>
                {members.length > 0 &&
                    <Box sx={{
                        border: "1px solid",
                        borderColor: "primary.light",
                        width: "360px",
                        padding: "8px",
                        borderRadius: "12px",
                        backgroundColor: 'grey.100',
                    }}>
                        <ul>
                            {members.map((el, i) =>
                                <li key={i}>
                                    <Typography component="span">{i + 1}. {el}</Typography>
                                </li>)}
                        </ul>
                    </Box>
                }
                {recipients.length > 0 &&
                    <Box sx={{
                        border: "1px solid",
                        borderColor: "primary.light",
                        width: "360px",
                        padding: "12px",
                        borderRadius: "8px",
                        backgroundColor: 'grey.100',
                    }}>
                        <ul>
                            {recipients.map((el, i) =>
                                <li key={i} style={{ display: "flex" }}>
                                    <Typography component="span">{i + 1}. {members[i]} </Typography>
                                    <ArrowRightAltOutlinedIcon />
                                    <Typography component="span"> {el}</Typography>
                                </li>)}
                        </ul>
                    </Box>
                }
            </Box>
            <Box sx={{ display: "flex", flexDirection: 'column', width: "300px", gap: "12px" }}>
                <TextField
                    type="text"
                    name="name"
                    label="Name"
                    size="small"
                    variant="outlined"
                    value={name}
                    onChange={handleChange}
                />
                <Button onClick={handleClick} variant="contained">Add participant</Button>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Button onClick={change} variant="outlined">Shuffle pairs</Button>
                    <Button onClick={handleReset} variant="text">Reset</Button>
                </Box>
            </Box>
            {/* <MembersInfo/> */}
        </Container>
    )
};
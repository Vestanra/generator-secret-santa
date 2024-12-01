import { Typography } from "@mui/material";
import { membersInfo } from "data/membersInfo";

export const MembersInfo = () => {

    const formatInfo = (arr) =>
    ({
        name: [...arr.name.split(' ')],
        lastName: [...arr.lastName.split(' ')],
        like: arr.like,
        dislike: arr.dislike,
        score: [...arr.score.split(' ')],
    });
    
    const infoList = formatInfo(membersInfo);

    let all = []
    for (let i = 0; i < infoList.name.length; i++) {
        all.push({
            name: infoList.name[i],
            lastName: infoList.lastName[i],
            like: infoList.like[i],
            dislike: infoList.dislike[i],
            score: infoList.score[i]
        })
    }

    return (
        <>
            <ul>
                {all.map((el, i) =>
                    <li key={i} style={{marginBottom: "12px"}}>
                    <Typography sx={{fontWeight: "500"}}>{el.name} {el.lastName}</Typography>
                    <Typography>Відповіді у анкеті:</Typography>
                    <Typography>
                        <span style={{ fontStyle: 'italic' }}>Щоб ви хотіли отримати в подарунок від Миколая? - </span>{el.like}
                    </Typography>
                    <Typography>
                        <span style={{ fontStyle: 'italic' }}>А щоб точно не хотіли? - </span>{el.dislike}
                    </Typography>
                    <Typography>
                        <span style={{ fontStyle: 'italic' }}>Оцініть, наскільки слухняними ви були в цьому році, де 1 - з мене малювали Джокера, а 5 - слухняний(на), як ангелочок. - </span>{el.score}
                    </Typography>
                </li>)}
            </ul>
        </>
    )
};
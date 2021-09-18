import { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Home() {
    const [buku, setBuku] = useState([
        [1, 'Mindset', 'Carol Dweck', 111000, 'https://cdn.gramedia.com/uploads/items/mindset__w600_hauto.jpg'],
        [2, 'Sapiens', 'Yuval Noah Harari', 125000, 'https://mojokstore.com/wp-content/uploads/2020/02/Sapiens.jpg'],
        [3, 'Filosofi Teras', 'Henry Manampiring', 98000, 'https://ebooks.gramedia.com/ebook-covers/45496/image_highres/ID_FITE2018MTH12.jpg']
    ]);
    const [detail, setDetail] = useState(false);
    const [index, setIndex] = useState('');
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        alert('Selamat Datang di Katalog Buku')
    }, [])

    return (
        <Grid container md={12} spacing={4} style={{margin: "auto", marginTop: "50px"}}>
            {buku.map((result) => {
                return (
                    <Card sx={{maxWidth: 300, marginLeft: "40px"}}>
                        <CardMedia
                            component="img"
                            image={result[4]}
                            alt={result[1]}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {result[1]}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {result[2]}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Rp. {result[3]}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small" onClick={() => {setDetail(!detail); setIndex(result[0])}}>Learn More</Button>
                        </CardActions>
                    </Card>
                );  
            })}
            {detail && <Detail index={index}/>}
        </Grid>
    );
}

function Detail(props) {
    return (
        <p>Ini teks detail index: {props.index}</p>
    );
}
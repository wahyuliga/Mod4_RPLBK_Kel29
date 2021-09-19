import { useState, useEffect, useContext, createContext } from "react";
import AppBar from "@mui/material/AppBar";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const DeskripsiContext = createContext();

export default function Home() {
    const [buku, setBuku] = useState([
        ['Mindset', 'Carol Dweck', 111000, 'https://cdn.gramedia.com/uploads/items/mindset__w600_hauto.jpg', '0'],
        ['Sapiens', 'Yuval Noah Harari', 125000, 'https://mojokstore.com/wp-content/uploads/2020/02/Sapiens.jpg', '1'],
        ['Filosofi Teras', 'Henry Manampiring', 98000, 'https://ebooks.gramedia.com/ebook-covers/45496/image_highres/ID_FITE2018MTH12.jpg', '2']
    ]);
    const [detail, setDetail] = useState(false);
    const [index, setIndex] = useState('');
    const [deskripsi, setDeskripsi] = useState([
        'Bagi Anda penikmat buku motivasi, teramat sayang bila Anda tak melahap isi buku ini. Bagi Anda para pemimpin, eksekutif, guru, orangtua, atau pelatih olahraga, buku ini sangat membantu dalam mengubah para pembelajar bermasalah menjadi insan-insan sukses dan bahagia. Sebagai pribadi pun, Anda tak bakal kecewa dengan buku hasil penelitian 20 tahun lebih dari ahli kenamaan di bidang psikologi kepribadian ini.',
        'SELAMA dua setengah juta tahun, berbagai spesies manusia hidup dan punah di Bumi, sampai akhirnya tersisa satu, Homo sapiens, Manusia Bijaksana, sejak seratusan ribu tahun lalu. Namun spesies ini bisa menyebar ke seluruh dunia dan beranak-pinak hingga berjumlah 7 miliar, dan kini menjadi kekuatan alam yang dapat mengubah kondisi planet. Apa penyebabnya?',
        'Lebih dari 2.000 tahun lalu, sebuah mazhab filsafat menemukan akar masalah dan juga solusi dari banyak emosi negatif. Stoisisme, atau Filosofi Teras, adalah filsafat Yunani-Romawi kuno yang bisa membantu kita mengatasi emosi negatif dan menghasilkan mental yang tangguh dalam menghadapi naik-turunnya kehidupan. Jauh dari kesan filsafat sebagai topik berat dan mengawang-awang, Filosofi Teras justru bersifat praktis dan relevan dengan kehidupan Generasi Milenial dan Gen-Z masa kini.'
    ])

    useEffect(() => {
        alert('Selamat Datang di Katalog Buku')
    }, [])

    return (
        <div>
            <AppBar style={{ padding: "10px", marginBottom: "100px" }}>
                    <Typography style={{ margin: "auto" }}>Katalog Buku</Typography>
            </AppBar>
            <Grid container md={12} spacing={4} style={{margin: "auto", marginTop: "50px"}}>
                {buku.map((result) => {
                    return (
                        <Card sx={{maxWidth: 300, marginLeft: "40px", marginTop: "10px"}}>
                            <CardMedia
                                component="img"
                                image={result[3]}
                                alt={result[0]}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {result[0]}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {result[1]}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Rp. {result[2]}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                    <Button size="small" onClick={() => {setDetail(!detail); setIndex(result[4])}}>Learn More</Button>
                            </CardActions>
                        </Card>
                    );  
                })}
                <DeskripsiContext.Provider value={deskripsi}>
                    {detail && <Detail index={index}/>}
                </DeskripsiContext.Provider>
            </Grid>
        </div>  
    );
}

function Detail(props) {
    const deskripsi = useContext(DeskripsiContext);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen} style={{marginLeft: "50px"}}>Klik disini</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Deskripsi Buku
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {deskripsi[props.index]}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
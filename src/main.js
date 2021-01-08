import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
} from "@material-ui/core";
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Link from "@material-ui/core/Link";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://linkedin.com/">
                Knoor Studio
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme)  => ({
    header: {
        backgroundColor: "#444444",
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#FFFEFE",
        textAlign: "left",
    },
    toolbar: {
        justifyContent: "center"
    },
    cardList: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    filterButton: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        }
    },
    heroContent: {
        padding: theme.spacing(6, 0, 1),
    }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Main() {
    const classes = useStyles();

    const sumdubtLogo = (
        <Typography variant="h6" component="h1" className={classes.logo}>
            SUMDU BugTracker
        </Typography>
    );

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="relative" className={classes.header}>
                <Toolbar className={classes.toolbar}>
                    {sumdubtLogo}
                </Toolbar>
            </AppBar>
        <main>
            <Container className={classes.heroContent}>
            <div className={classes.filterButton}>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button>Всі</Button>
                    <Button>Перевіряються</Button>
                    <Button>Зареєстровані</Button>
                </ButtonGroup>
            </div>
            <div className={classes.filterButton}>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button>Відхилені</Button>
                    <Button>Виправлені</Button>
                </ButtonGroup>
            </div>
            </Container>
            <Container className={classes.cardList} maxWidth="md">
                <List container spacing={4}>
                    {cards.map((card) => (
                        <List item key={card}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://source.unsplash.com/random"
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Heading
                                    </Typography>
                                    <Typography>
                                        This is a media card. You can use this section to describe the content.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </List>
                    ))}
                </List>
            </Container>
        </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    SUMDU BugTracker
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Lol
                </Typography>
                <Copyright />
            </footer>
    </React.Fragment>
    );


}
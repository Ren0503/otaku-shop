import React from 'react'
import { Link } from 'react-router-dom'

import about from '../../assets/images/about.jpg'
import { Meta, Loader, Message } from '../../components/shared'
import { Container, Image, Jumbotron, Breadcrumb } from 'react-bootstrap'

const AboutScreen = () => {
    return (
        <Container>
            <Meta />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>About</Breadcrumb.Item>
            </Breadcrumb>
            <Image src={about} alt="About" fluid/>
            <Jumbotron>
                <h1>Introduce About Figure</h1>
                <p> In Japan, the term "figure" can refer to dolls and other collectible figurines. Figures based on anime, manga and bishōjo game characters are often sold as dolls in Japan. Collecting them is a popular hobby amongst Otakus. The term moe is otaku slang for the love of characters in video games, anime, or manga, whereas zoku is a post-World War II term for tribe, clan or family. </p>
                <br />
                <br />
                <p> Japanese journalist Akihiro Ōtani coined the term "figure moe zoku", and, although he said, "I don't intend to blame Otaku", he claimed that "Otakus who collect figurines" were potential criminals and that one of them had killed a 7-year-old girl in November 2004. According to his theory, the killer murdered the victim soon after the kidnapping, because the killer was not interested in her living body, but in her corpse. The lifeless body could then be described as a figurine. Akihiro Ōtani used the term in conjunction with Kaoru Kobayashi, who did not, in fact, own any figurines. However, during an ANN special broadcast on the morning that Kobayashi was arrested, Ōtani commented that Kobayashi was a "Figure Otaku", insisting that "Figure Otaku" was synonymous with "lolicon". </p>
                <br />
                <br />
                <p> As Ōtani's idea of the "figure moe zoku" seemed illogical at best, fans of the anime genre began using it ironically and humorously. The term was awarded the Okada Toshio Award at the Japanese Otaku Awards' 2004. </p>
            </Jumbotron>
        </Container>
    )
}

export default AboutScreen
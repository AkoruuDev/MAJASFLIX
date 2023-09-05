const movies = [
    {
        link: "https://mflixapi.s3.sa-east-1.amazonaws.com/filmes/Atlantis%3A+O+Reino+Perdido.mp4",
        name: "Atlantis: O reino perdido",
        folder: "https://mflixapi.s3.sa-east-1.amazonaws.com/folders/Atlantis+o+reino+perdido.jpg",
        type: "movie", // film, serie
        time: "1 hora 35 minutos",
        launch: "2001",
        sinopse: "O explorador Milo Thatch (Michael J. Fox) recebe inesperadamente um mapa que indica a exata localização da cidade perdida de Atlantis. Juntamente com o Capitão Rourke (James Garner) e sua tripulação, ele parte em busca da cidade a bordo de um submarino, bancado por um excêntrico magnata. Porém, para encontrar Atlantis Milo, Rourke e sua tripulação terão que enfrentar os mais diversos obstáculos ao longo da jornada submarina.",
        genre: ["Animação", "Aventura", "Família"] // fantasia, aventura, animação, terror, romance, etc...
    },{
        link: "https://mflixapi.s3.sa-east-1.amazonaws.com/filmes/O+Amor+Mandou+Mensagem.mp4",
        name: "O Amor Mandou Mensagem",
        folder: "https://mflixapi.s3.sa-east-1.amazonaws.com/folders/O+amor+mandou+mensagem.jpg",
        type: "movie", // film, serie
        time: "1 hora 44 minutos",
        launch: "2023",
        sinopse: "O Amor Mandou Mensagem conta a improvável história de amor entre Mira Ray (Priyanka Chopra Jonas) e Rob Burns (Sam Heughan). Mira, ao perder o noivo, desenvolve um hábito peculiar, tentando superar a morte de seu grande amor. Ela manda uma série de mensagens para o número de celular que pertencia ao noivo antigo, não sabendo que o mesmo número antigo foi transferido para Rob Burns, um jornalista. Ele acaba ficando intrigado e cativado pelas mensagens românticas. Quando é designado a escrever um perfil da cantora Celine Dion, ele pede conselhos a artista em como pode conhecer Mira pessoalmente (sem ser invasivo) e conquistar seu coração.",
        genre: ["Comédia", "Romance"] // fantasia, aventura, animação, terror, romance, etc...
    },{
        link: "",
        name: "Simplesmente Acontece",
        folder: "https://mflixapi.s3.sa-east-1.amazonaws.com/folders/simplesmente+acontece.jpg",
        type: "movie", // film, serie
        time: "",
        launch: "",
        sinopse: "",
        genre: [""] // fantasia, aventura, animação, terror, romance, etc...
    },{
        link: "https://mflixapi.s3.sa-east-1.amazonaws.com/filmes/CINDERELA+2015.avi",
        name: "Cinderela",
        folder: "https://mflixapi.s3.sa-east-1.amazonaws.com/folders/Cinderela.jpg",
        type: "movie", // film, serie
        time: "1 hora e 44 minutos",
        launch: "2015",
        sinopse: "Ella (Lilly James) ganha o apelido de Cinderela após a trágica morte de seu pai, sendo obrigada a trabalhar como empregada na própria casa para sua terrível madrasta, Lady Tremaine (Cate Blanchett), e suas filhas Anastasia e Drisella. Apesar disso, seu otimismo com a vida continua intacto. Passeando na floresta, ela se encanta por um corajoso estranho (Richard Madden), sem desconfiar que ele é o príncipe do castelo. Cinderela recebe um convite para o grande baile e acredita que pode voltar a encontrar sua alma gêmea, mas seus planos vão por água abaixo quando a madrasta má rasga seu vestido. Agora, será preciso uma fada madrinha (Helena Bonham Carter) para mudar o seu destino.",
        genre: ["Fantasia", "Romance"] // fantasia, aventura, animação, terror, romance, etc...
    },{
        link: "https://mflixapi.s3.sa-east-1.amazonaws.com/filmes/Transformers+-+O+Despertar+das+Feras.mkv",
        name: "Transformes O despertar das Feras",
        folder: "https://mflixapi.s3.sa-east-1.amazonaws.com/folders/transformes+-+o+despertar+das+feras.jpg",
        type: "movie", // film, serie
        time: "2 horas e 8 minutos",
        launch: "20023",
        sinopse: "Transformers: O Despertar das Feras traz mais uma aventura épica pelo universo dos Transformers. Ambientada nos anos 1990, o filme levará o público a uma aventura global cheia de ação, enquanto os Maximals, Predacons e Terrorcons se juntam à batalha entre os Autobots e Decepticons na Terra. Noah (Anthony Ramos), um jovem astuto do Brooklyn, e Elena (Dominique Fishback), uma ambiciosa e talentosa pesquisadora de artefatos, são arrastados para o conflito enquanto Optimus Prime e os Autobots enfrentam o terrível novo inimigo empenhado em sua destruição chamado Scourge. O filme é a sétima parcela da série de filmes Transformers, servindo como uma sequência autônoma de Bumblebee (2018) e prequela de 2007, Transformers - O Filme. Supostamente baseado no spinoff de Beast Wars: Transformers, que apresentava robôs que se transformam em animais robóticos. A série de animação para TV foi exibida no Brasil nos anos 1990, reinventando a saga dos Autobots e Decepticons.",
        genre: ["Ação", "Ficção científica"] // fantasia, aventura, animação, terror, romance, etc...
    },{
        link: "https://mflixapi.s3.sa-east-1.amazonaws.com/filmes/Nimona.mp4",
        name: "Nimona",
        folder: "https://mflixapi.s3.sa-east-1.amazonaws.com/folders/Nimona.jpg",
        type: "movie", // film, serie
        time: "1 hora e 42 minutos",
        launch: "2023",
        sinopse: "Acusado de um crime trágico, um cavaleiro pede ajuda a uma adolescente para conseguir provar sua inocência. Mas o que acontecerá se ela for o monstro que ele jurou matar?",
        genre: ["Animação", "Aventura", "Fantasia"] // fantasia, aventura, animação, terror, romance, etc...
    },{
        name: "Smallville",
        folder: "https://mflixapi.s3.sa-east-1.amazonaws.com/folders/smallville.jpg",
        type: "serie", // film, serie
        launch: "2001",
        sinopse: "Baseada no personagem Superman da DC Comics, criado por Jerry Siegel e Joe Shuster, a série conta a história de Clark Kent (Tom Welling), um adolescente quase comum, se não fosse por seus poderes especiais. A série mostra como seria a vida do Super Homem se ele tivesse caído na Terra nos tempos atuais, fazendo uma mistura da modernidade do século XXI e elementos antigos já conhecidos pela história do homem de aço.",
        genre: ["Drama", "Ficção científica", "Ação"], // fantasia, aventura, animação, terror, romance, etc...
        seasons: [
            {
                season: 1,
                chapters: [
                    {
                        chapter: 1,
                        name: "Piloto",
                        link: {
                            dub: "https://drive.google.com/file/d/1k0iwAUJyi2mqb1GQN34CpX2W76r7Zjah/view?usp=drive_link",
                            leg: ""
                        }
                    },{
                        chapter: 2,
                        name: "Metamorfose",
                        link: {
                            dub: "https://drive.google.com/file/d/1WuwgRnm06NcKiLefZq8za0CgOPFIDgzE/view?usp=drive_link",
                            leg: ""
                        }
                    },{
                        chapter: 3,
                        name: "Pegando Fogo",
                        link: {
                            dub: "https://drive.google.com/file/d/1iDne2KOV_z301TjdmEDb7mwdEF59ftxD/view?usp=drive_link",
                            leg: ""
                        }
                    },{
                        chapter: 4,
                        name: "Visões de Raio-X",
                        link: {
                            dub: "https://drive.google.com/file/d/1zkhd8ENUZpoMPOxoiJgZobZNEDspYARZ/view?usp=drive_link",
                            leg: ""
                        }
                    },{
                        chapter: 5,
                        name: "Encontros",
                        link: {
                            dub: "https://drive.google.com/file/d/1L8ZDWtXV30OmgrVSeSiYdjCPtvCmSgGS/view?usp=drive_link",
                            leg: ""
                        }
                    },{
                        chapter: 6,
                        name: "Destino",
                        link: {
                            dub: "",
                            leg: "https://drive.google.com/file/d/1kob1ZbCArNZm9dKxgMtr17oOecvTy6OT/view?usp=drive_link"
                        }
                    },{
                        chapter: 7,
                        name: "Desejo",
                        link: {
                            dub: "https://drive.google.com/file/d/1-pRuyezqN3pCnqzIDcRxy9j_pqZ9R7mp/view?usp=drive_link",
                            leg: ""
                        }
                    },{
                        chapter: 8,
                        name: "No limite",
                        link: {
                            dub: "https://drive.google.com/file/d/1x5LycliXsCRtmTuK9QbKbHlr619QHiCG/view?usp=drive_link",
                            leg: ""
                        }
                    },{
                        chapter: 9,
                        name: "o omau-caráter",
                        link: {
                            dub: "https://drive.google.com/file/d/1lxF_1mPA-pV39s6d3PFqkiQ3NRDbovXq/view?usp=drive_link",
                            leg: ""
                        }
                    },{
                        chapter: 10,
                        name: "O mistério",
                        link: {
                            dub: "https://drive.google.com/file/d/1q_Ek8EhzNlz-cMAdHtJmIxe7Hv6IkJYv/view?usp=drive_link",
                            leg: ""
                        }
                    },{
                        chapter: 11,
                        name: "O aperto de mão",
                        link: {
                            dub: "https://drive.google.com/file/d/1PIBzBDklDpOeSoUIyOCBOoEyLesIJQo3/view?usp=drive_link",
                            leg: ""
                        }
                    },{
                        chapter: 12,
                        name: "O sanguessuga",
                        link: {
                            dub: "https://drive.google.com/file/d/1aVE5DdZBk0S63luDJc5mmp9otrdzzOSt/view?usp=drive_link",
                            leg: ""
                        }
                    },{
                        chapter: 13,
                        name: "Cinético",
                        link: {
                            dub: "https://drive.google.com/file/d/1_ysP1wRDaBLz6D9USAhF7_bxyHriltp3/view?usp=drive_link",
                            leg: ""
                        }
                    },{
                        chapter: 14,
                        name: "Volta ao passado",
                        link: {
                            dub: "https://drive.google.com/file/d/1F7qt86xJ_mmXB3PxEWIRkeZe5oOhmLx2/view?usp=drive_link",
                            leg: ""
                        }
                    },{
                        chapter: 15,
                        name: "A flor",
                        link: {
                            dub: "https://drive.google.com/file/d/1S8SlslllIXiJhOh07XLGlmxRBhl6L_hv/view?usp=drive_link",
                            leg: ""
                        }
                    },{
                        chapter: 16,
                        name: "Perdido",
                        link: {
                            dub: "https://drive.google.com/file/d/1Wdk7bUlIfvgM7HTiHNBm7r78rLriHCyS/view?usp=drive_link",
                            leg: ""
                        }
                    },{
                        chapter: 17,
                        name: "O anjo da morte",
                        link: {
                            dub: "https://drive.google.com/file/d/1ohXVyluWyHh-yPTxDzyTsb8BTYt0Hktc/view?usp=drive_link",
                            leg: ""
                        }
                    },{
                        chapter: 18,
                        name: "Eleição",
                        link: {
                            dub: "https://drive.google.com/file/d/1ziMbRw13VNT1lfMzp9s8DDm5cvSSi9Wc/view?usp=drive_link",
                            leg: ""
                        }
                    },{
                        chapter: 19,
                        name: "Telecinésia",
                        link: {
                            dub: "https://drive.google.com/file/d/1wPLuz9neiJAHZ1x65ypDG-bL-D53k9Hi/view?usp=drive_link",
                            leg: ""
                        }
                    },{
                        chapter: 20,
                        name: "Oculto",
                        link: {
                            dub: "https://drive.google.com/file/d/14rUpOSDTJSHvxTnb0bGIyExRlpsCQ_0W/view?usp=drive_link",
                            leg: ""
                        }
                    },{
                        chapter: 21,
                        name: "Tempestade",
                        link: {
                            dub: "https://drive.google.com/file/d/1oZLI80telOU6mE9nqsc-7Xkrs7zfdX57/view?usp=drive_link",
                            leg: ""
                        }
                    }
                ]
            }
        ]
    },{
        name: "One Piece: A Serie",
        launch: "2023",
        folder: "https://mflixapi.s3.sa-east-1.amazonaws.com/folders/One+Piece%3A+A+Serie.jpg",
        type: "serie",
        sinopse: "O jovem pirata Monkey D. Luffy veste o chapéu de palha e, com sua tripulação atrapalhada, zarpa em uma jornada épica nesta adaptação em live-action do popular mangá.",
        genre: ["Anime", "Ação", "Aventura"],
        seasons: [
            {
                season: 1,
                chapters: [
                    {
                        chapter: 1,
                        name: "Capitulo 1",
                        link: {
                            dub: "https://mflixapi.s3.sa-east-1.amazonaws.com/series/One+Piece%3A+A+serie/s01e01.mkv",
                            leg: ""
                        }
                    },{
                        chapter: 2,
                        name: "Capitulo 2",
                        link: {
                            dub: "https://mflixapi.s3.sa-east-1.amazonaws.com/series/One+Piece%3A+A+serie/s01e02.mkv",
                            leg: ""
                        }
                    },{
                        chapter: 3,
                        name: "Capitulo 3",
                        link: {
                            dub: "https://mflixapi.s3.sa-east-1.amazonaws.com/series/One+Piece%3A+A+serie/s01e03.mkv",
                            leg: ""
                        }
                    },{
                        chapter: 4,
                        name: "Capitulo 4",
                        link: {
                            dub: "https://mflixapi.s3.sa-east-1.amazonaws.com/series/One+Piece%3A+A+serie/s01e04.mkv",
                            leg: ""
                        }
                    },{
                        chapter: 5,
                        name: "Capitulo 5",
                        link: {
                            dub: "https://mflixapi.s3.sa-east-1.amazonaws.com/series/One+Piece%3A+A+serie/s01e05.mkv",
                            leg: ""
                        }
                    },{
                        chapter: 6,
                        name: "Capitulo 6",
                        link: {
                            dub: "https://mflixapi.s3.sa-east-1.amazonaws.com/series/One+Piece%3A+A+serie/s01e06.mkv",
                            leg: ""
                        }
                    },{
                        chapter: 7,
                        name: "Capitulo 7",
                        link: {
                            dub: "https://mflixapi.s3.sa-east-1.amazonaws.com/series/One+Piece%3A+A+serie/s01e07.mkv",
                            leg: ""
                        }
                    },{
                        chapter: 8,
                        name: "Capitulo 8",
                        link: {
                            dub: "https://mflixapi.s3.sa-east-1.amazonaws.com/series/One+Piece%3A+A+serie/s01e08.mkv",
                            leg: ""
                        }
                    }
                ]
            }
        ]
    }/* ,{
        name: "",
        launch: "",
        folder: "",
        type: "",
        sinopse: "",
        genre: [],
        seasons: [
            {
                season: 1,
                chapters: [
                    {
                        chapter: 1,
                        name: "Capitulo 1",
                        link: {
                            dub: "",
                            leg: ""
                        }
                    },{
                        chapter: 2,
                        name: "Capitulo 2",
                        link: {
                            dub: "",
                            leg: ""
                        }
                    },{
                        chapter: 3,
                        name: "Capitulo 4",
                        link: {
                            dub: "",
                            leg: ""
                        }
                    },{
                        chapter: 4,
                        name: "Capitulo 4",
                        link: {
                            dub: "",
                            leg: ""
                        }
                    },{
                        chapter: 5,
                        name: "Capitulo 5",
                        link: {
                            dub: "",
                            leg: ""
                        }
                    },{
                        chapter: 6,
                        name: "Capitulo 6",
                        link: {
                            dub: "",
                            leg: ""
                        }
                    },{
                        chapter: 7,
                        name: "Capitulo 7",
                        link: {
                            dub: "",
                            leg: ""
                        }
                    },{
                        chapter: 8,
                        name: "Capitulo 8",
                        link: {
                            dub: "",
                            leg: ""
                        }
                    }
                ]
            }
        ]
    } */
];

const series = [
    
];

const cinema = { movies, series }

export {
    cinema
}
import { Container } from "../styles/components";
import { Header } from "./Header";
import { Movie } from "./nav";

function Dashboard() {
    return (
        <Container>
            <Header />

            <Movie />
        </Container>
    );
};

export {
    Dashboard,
}
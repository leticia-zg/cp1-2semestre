import { BiSolidFilePlus, BiHome, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { StyledMenu, StyledMenuItem, StyledWrapperMenu } from "./Menu.style";

export const Menu = () => {
    return (
        <StyledMenu>
            <StyledWrapperMenu>
                <StyledMenuItem>
                    <BiHome size="1.5rem" color="#38aede" />
                    <Link to="/">Home</Link>
                </StyledMenuItem>
                <StyledMenuItem>
                    <BiSolidFilePlus size="1.5rem" color="#38aede" />
                    <Link to="/list">Nova Lista</Link>
                </StyledMenuItem>
                <StyledMenuItem>
                    <BiUser size="1.5rem" color="#38aede" />
                    <Link to="/profile">Perfil</Link>
                </StyledMenuItem>
            </StyledWrapperMenu>
        </StyledMenu>
    )
}
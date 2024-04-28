import Clickable from "./Clickable";
import styled from "styled-components";



function PrimaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '216px' : props.minWidth; 
    const Button = styled.div`
        background: #3B82F6;
        border: 1px solid #3B82F6;
        border-radius: 24px;
        min-width: ${minWidth};
        color: white;
        &:hover {
            background: #3B82F6;
            opacity: 80%;
        }
        &:active {
            background: #0F172A; 
            opacity: 60%;  
        }
    `;
    return (
        <Clickable>
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default PrimaryButton;
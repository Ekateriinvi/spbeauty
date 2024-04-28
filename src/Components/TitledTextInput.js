import styled from "styled-components";

const Input = styled.input`
    outline: none;
    min-width: 100%;
    border-radius: 24px;
    border: solid #E2E8F0 1px;
    background-color: #F8FAFC;
    color: #0F172A;
    &:hover {
        background-color: #F8FAFC
        opacity: 80%;
        color: #94A3B8;
    }
`;

function TitledTextInput({title, def}) {
    const Title = HTMLTableCaptionElement === undefined ? 
        (<div></div>) : 
        (<div>{title}</div>);
    return (
        <div className='d-flex flex-column gap-2'>
            {Title}
            <Input className='p-2' defaultValue={def} ></Input>
        </div>
    );
}

export default TitledTextInput;
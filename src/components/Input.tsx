import { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    error?: string,
}

function Input({
    error,
    ...props
}: Props) {
    const StyledInput = styled.input`
        padding: 8px;
        border: none;
        background: #fff;
        border: 1px solid ${error ? 'red' : '#c8c8c8'};
        letter-spacing: 0.3px;
        line-height: 1;
        &:focus{
            outline: none;
        }
        &::placeholder{
            color: #c8c8c8s;
        }
    `
    const ErrorWrapper = styled.small`
        margin: 5px 0;
        color: red;
        font-size: 13px;
    `

    return (
        <>
            <StyledInput
                {...props}
            />
            {
                error
                    ?
                    <ErrorWrapper>
                        {error}
                    </ErrorWrapper>
                    : ''
            }
        </>
    )
}

export default Input;
import styled, { CSSObject, CSSProperties } from 'styled-components';

type Props = {
    children: React.ReactNode,
    background?: string,
    color?: string,
    borderColor?: string,
    uppercase?: Boolean,
    round?: Boolean,
    outline?: Boolean,
    raise?: Boolean,
}

function Button({
    children,
    background,
    color,
    borderColor,
    uppercase,
    round,
    outline,
    raise,
    ...props
}: Props) {

    const StyledButton = styled.button`
        background: ${outline ? 'transparent' : background || 'blue'};
        border: ${borderColor || outline ? '1px solid ' + borderColor || background : 'none'};
        color: ${outline ? color || background : color || '#fff'};
        font-size: 14px;
        border-radius: ${round ? '20px' : '5px'};
        font-weight: 600;
        
        line-height: 15px;
        padding: 10px;

        letter-spacing: 0.3px;
        text-transform: ${uppercase ? 'uppercase' : ''};
        cursor: pointer;

        &:focus{
            outline: none;
        }
        &:active, {
            outline: none;
            box-shadow: 0 3px 0 rgb(9 30 66 / 10%);
            top: 3px;
        }
        &:hover{
            box-shadow: 0 3px 5px rgb(9 30 66 / 10%), 0 0 1px rgb(9 30 66 / 31%);
            transform: ${raise ? 'translate3d(0px, -2px, 0px)' : 'none'};
}
`

    return (
        <StyledButton
            {...props}
        >
            {children}
        </StyledButton>
    )
}
export default Button;
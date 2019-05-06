import style from "styled-components";

const getStyle = type => {
    if(type === "primary"){
        return `
        background: #0099FF;
        color: #FDFDFD;
        `
    }
    else if(type === "error"){
        return `
        background: red;
        color: #FDFDFD;
        `
    }
    else if(type === "success"){
        return `
        background: green;
        color: #FDFDFD;
        `
    }
    else if(type === "warning"){
        return `
        // background: yellow;
        color: grey;
        `
    }
    return `
        background: #FDFDFD;
        color: #3333333;
    `
}

const getSize = size => {
    if(size === "sm"){
        return "padding: 10px 20px";
    }
    else if(size === "md"){
        return "padding: 20px 30px";
    }
    else if(size === "lg"){
        return "padding: 30px 40px";
    }
    else if(size === "bg"){
        return "padding: 40px 50px";
    }

}

const Button = style.button`
    border: 1px solid #DCDCDC;
    border-radius: ${({ round }) => round ? "5px": null}
    cursor: pointer;
    ${( {type} ) => getStyle(type)};
    ${( {size} ) => getSize(size)}
`

export default Button;
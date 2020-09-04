import React from 'react';
import styled from 'styled-components';

const Border = styled.div`
    position: relative;
    width: 0;
    height: 0;
    // this.borderBottom - (before.borderBottom )
    border-top: 200px solid rgba(42, 227, 42, 0.48);
    // this.borderBottom - (before.borderBottom ) ??
    border-bottom: 200px solid rgba(42, 227, 42, 0.48);
    border-left: 250px solid rgba(42, 227, 42, 0.48);
    border-right: 250px solid rgba(42, 227, 42, 0.48);
    font-size: 20px;

    &:before {
        position: absolute;
        content: "";
        height: 0;
        width: 0;
        // parent.borderTop plus 100px (this.bottom & top)
        top: -300px;
        left: -250px;
        border-top: 50px solid rgba(42, 227, 42, 0.48);
        border-left: 250px solid rgba(42, 227, 42, 0.48);
        // parent.borderRight - after.borderBottom
        border-right: 150px solid rgba(42, 227, 42, 0.48);
        border-bottom: 50px solid rgba(42, 227, 42, 0.48);
    }

    &:after {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        // parent.borderTop plus 100px (this.bottom & top)
        top: -300px;
        left: 250px;
        transform: translate(-100%, 0px); 
        border-right: 100px solid transparent;
        border-bottom: 100px solid rgb(42, 227, 42);
    }
`

const File = () => {
    
    return (
        <div style={
                {
                    height: "500px", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    marginTop: "200px"
                }
            }
        >
            <Border></Border>
        </div>
    )
}

export default File;
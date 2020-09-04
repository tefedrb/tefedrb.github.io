import React from 'react';
import styled from 'styled-components';


// we need to pass in dynamic height and width to pull this off...
// we need to isolate all the properties that will change...

const FileGraphic2 = styled.div`
    position: relative;
    height: 85%;
    width: 100%;
    background-color: rgba(42, 227, 42, 0.48);
`

const GraphicHead = styled.div`
    width: 100%;
    height: 100%%;
    background-color: rgba(42, 227, 42, 0.48);
`
const Flap = styled.div`
    width: 0;
    height: 0;
    border-right: 75px solid transparent;
    border-bottom: 75px solid rgb(42, 227, 42);
`
const FileWrapper = styled.div`
    // background-color: rgba(198, 194, 71, 0.56);
    width: 500px;
    height: 500px;
`
const HeadWrapper = styled.div`
    display: flex;
    height: 15%;
`
const File = () => {
    const scaling = {
        body: {
            top: "200px",
            bottom: "200px",
            right: "250px",
            left: "250px"
        }
    }

    const placement = {
        flap: {
            top: "-300px",
            left: "250px"
        },
        header: {
            
        }
    }
    // <FileWrapper>
    //             <FileGraphic scaling={scaling}>
    //             </FileGraphic>
    //         </FileWrapper>
    
    return (
        <div style={
                {
                    height: "500px", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center"
                }
            }
        >
            <FileWrapper>
                <HeadWrapper>
                    <GraphicHead name={"head"}/>
                    <Flap name={"flap"} />
                </HeadWrapper>
                <FileGraphic2 name={"graphic"}/>
            </FileWrapper>
            
        </div>
    )
}

export default File;
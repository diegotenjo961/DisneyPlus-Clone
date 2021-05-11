import React from 'react';
import styled from 'styled-components';

// Icons
import play from '../atends/images/play-icon-black.png';
import playWhite from '../atends/images/play-icon-white.png';
import group from '../atends/images/group-icon.png';

function Detail() {
    return (
        <Container>
            <Background>
                <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg' 
                alt="Image movie background" />
            </Background>
            
            <ImageTitle>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" 
                alt="Logo image" />
            </ImageTitle>

            <Controls>

                <PlayButton>
                    <img src={play} alt="icon play"/>
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButon>
                    <img src={playWhite} alt="icon play white"/>
                    <span>TRAILER</span>
                </TrailerButon>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWathButton>
                    <img src={group} alt='icon group'/>
                </GroupWathButton>
            </Controls>

            <SubTitle>
                2018 - 7m - Family, Fantasy, kids, Animation
            </SubTitle>
            <Description>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam doloremque nam voluptates consequatur animi eaque harum hic nobis molestias provident, eligendi nesciunt? Ipsa deleniti ex facilis dolorum itaque eos ut!
            </Description>
        </Container>
    )
}

export default Detail;

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const ImageTitle = styled.div`
    margin: 50px 0;
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
`
const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover {
        background: rgb(198, 198, 198);
    }
`

const TrailerButon = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    color: rgb(249, 249, 249);
    border: 1px solid rgb(249, 249, 249);
`

const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid #fff;
    background: rgba(0, 0, 0, 0.6);

    span {
        font-size: 30px;
        color: #fff;
    }
    &:hover {
        background: rgb(100, 100, 100);
    }
`

const GroupWathButton = styled(AddButton)`
    background: rgb(0, 0, 0);
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    margin-top: 26px;
    min-height: 20px;
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);

`
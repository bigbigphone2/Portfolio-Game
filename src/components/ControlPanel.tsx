import styled from "@emotion/styled";
import { Box, Button, Grid } from "@mui/material";
import CustomStyle from "../Theme/CustomStyle";
import StyleConfig from "../Theme/StyleConfig";
import PlayerImage from "../assets/game_images/Player.png";

import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Dispatch, SetStateAction, useCallback, useEffect } from "react";
import mapDesign from "../data/mapDesign";
import { usePlayerState } from "../Context/PlayerContext";
import { useGameInfoState } from "../Context/GameInfoContext";
import { handleAllowedMovingDirestion, handleOnClickArrowButton, htmlCommandType, triggerForceTriggerEvent, triggerInteractionEvent } from "../utils/playerControl";

const Container = styled(Box)({
    position: 'absolute',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '100',
    borderRadius: '25% 25% 0 0',
    backgroundColor: CustomStyle.colors.primary,
    boxShadow: CustomStyle.colors.mainShadow

})

const InenerContainer = styled(Grid)({
    maxWidth: '400px',
    padding: '50px',

})

const DirectionKeyContainer = styled(Grid)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
})


const KeyBoardButton = styled(Button)({
    maxWidth: '30px',
    maxHeight: '30px', 
    minWidth: '30px', 
    minHeight: '30px',
    border: `3px solid ${CustomStyle.colors.mainBlack}`,
    boxShadow: CustomStyle.colors.balckShoadow,
    margin: '2px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: CustomStyle.colors.primary,
    '&:hover': {
        backgroundColor: CustomStyle.colors.primary,
    },
    
})

const ActionKeyContainer = styled(Grid)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
})

const ActionButton = styled(Button)({
    maxWidth: '40px',
    maxHeight: '40px', 
    minWidth: '40px', 
    minHeight: '40px',
    borderRadius: '100%',
    border: `3px solid ${CustomStyle.colors.mainBlack}`,
    boxShadow: CustomStyle.colors.balckShoadow,
    backgroundColor: CustomStyle.colors.mainGreen,
    '&:hover': {
        backgroundColor: CustomStyle.colors.mainGreen,
    },
    fontWeight: 'bolder'
})

interface ControlPanelPropsInterface{
    // playerPosition: [number,number],
    // setPlayerPosition: Dispatch<SetStateAction<[number, number]>>
}

const ControlPanel = (props: ControlPanelPropsInterface) => {

    const playerState = usePlayerState().playerState;
    const {playerPosition} = playerState;
    const setPlayerState = usePlayerState().setPlayerState;
    const {allowedMovingDirestion} = useGameInfoState().gameInfoState;
    const gameInfoState = useGameInfoState().gameInfoState;
    const setGameInfoState = useGameInfoState().setGameInfoState;

    const keyBoardListener = useCallback((e: any) => {
        const htmlMovingType = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
        const htmlInteractType = ['a', 'A'];
        const htmlCommandType = [...htmlMovingType, ...htmlInteractType];

        if (! (htmlCommandType.includes(e.key)))
            return;
        if (htmlMovingType.includes(e.key))
            handleAllowedMovingDirestion(playerState, setPlayerState, allowedMovingDirestion, e.key);
        if (htmlInteractType.includes(e.key))
            handleInteractionButton()
    },[playerState, allowedMovingDirestion]);

    const handleOnClickArrowButton = (htmlCommand: htmlCommandType) => {
        handleAllowedMovingDirestion(playerState, setPlayerState, allowedMovingDirestion, htmlCommand);
    }

    const handleInteractionButton = () => {
        triggerInteractionEvent(playerPosition, mapDesign, gameInfoState, setGameInfoState);
    }

    useEffect(() => {
        // Add an event listener to the document
        document.addEventListener('keydown', keyBoardListener);
        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener('keydown', keyBoardListener);
        };
    }, [keyBoardListener]);

    return (
        <Container>
            <InenerContainer container>
                <DirectionKeyContainer item xs={6}>
                    <Box>
                        <KeyBoardButton sx={{marginBottom: '0px'}} onClick={()=>handleOnClickArrowButton('ArrowUp')}><ArrowDropUpIcon/></KeyBoardButton>
                    </Box>
                    <Box display={'flex'}>
                        <KeyBoardButton onClick={()=>handleOnClickArrowButton('ArrowLeft')}><ArrowLeftIcon/></KeyBoardButton>
                        <KeyBoardButton onClick={()=>handleOnClickArrowButton('ArrowDown')}><ArrowDropDownIcon/></KeyBoardButton>
                        <KeyBoardButton onClick={()=>handleOnClickArrowButton('ArrowRight')}><ArrowRightIcon/></KeyBoardButton>
                    </Box>
                </DirectionKeyContainer>
                <ActionKeyContainer item xs={6}>
                    <ActionButton onClick={()=>handleInteractionButton()}>A</ActionButton>
                </ActionKeyContainer>
            </InenerContainer>
        </Container>
    )
}

export default ControlPanel;
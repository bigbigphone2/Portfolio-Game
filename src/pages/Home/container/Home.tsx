// import { Box, Button, Grid, Typography, styled } from "@mui/material";
// import CustomStyle from "../../../Theme/CustomStyle";
// import { Bio } from "../../../data/constants";
// import Typewriter from 'typewriter-effect';
// import HomePageImage from '../../../assets/web_images/homepage.png'
// import { Link } from "react-router-dom";
// import "animate.css";

// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import WebIcon from '@mui/icons-material/Web';


// const Container = styled(Box)({
//     backgroundColor: CustomStyle.colors.primary,
//     height: '100vh',
//     width: '100%',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
// })

// const AppBar = styled(Box)({
//     position: 'absolute',
//     top: 5,
//     width: '100%',
//     maxWidth: '1000px',
//     display: 'flex',
//     justifyContent: 'flex-end',
// })

// const LinkIcon = styled('a')({
//     padding: '20px 20px',
//     cursor: 'pointer',
//     '&:hover': {
//         color: CustomStyle.colors.mainGrey,
//     },
// })

// const InnerContainer = styled(Grid)({
//     height: '100vh',
//     width: '100%',
//     maxHeight: '700px',
//     maxWidth: '1000px',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
// })

// const LeftContainer = styled(Grid)({
//     // backgroundColor: 'orange',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
// })

// const RightContainer = styled(Grid)({
//     // backgroundColor: 'yellow',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
// })

// const Title = styled(Typography)({
//     fontSize: '50px',
//     fontWeight: 700,
//     lineHeight: '68px'
// })

// const TextLoop = styled(Box)({
//     fontSize: '22px',
//     fontWeight: 600,
//     display: 'flex',
//     gap: '12px',
// })

// const Span = styled(`span`)({
//     color: CustomStyle.colors.mainBlue,
// })

// const StartButton = styled(Button)({
//     backgroundColor: CustomStyle.colors.mainGrey,
//     marginTop: '20px',
//     fontSize: '22px',
//     fontWeight: 600,
//     '&:hover': {
//         backgroundColor: CustomStyle.colors.mainGrey,
//     },
// })

// const StyledLink = styled(Link)({
//     textDecoration: 'none',
//     color: CustomStyle.colors.mainBlack,
// })

// const Img = styled('img')({
//     width: '100%',
//     height: '100%',
//     maxWidth: '400px',
//     maxHeight: '400px'
// })

// const Home = () => {
//     return (
//         <Container>
//             <AppBar>
//                 {/* <LinkIcon href={Bio.portfolio} target="display"><WebIcon/></LinkIcon> */}
//                 <LinkIcon href={Bio.linkedin} target="display"><LinkedInIcon/></LinkIcon>
//                 <LinkIcon href={Bio.github} target="display"><GitHubIcon/></LinkIcon>L
//             </AppBar>
//             <InnerContainer container>
//                 <LeftContainer item xs={12} sm={6}>
//                     <Title>{Bio.name}</Title>
//                     <TextLoop>
//                         I am a <Span><Typewriter options={{strings: Bio.roles, autoStart: true, loop: true}}></Typewriter></Span>
//                     </TextLoop>
//                     {/* <Box className="animate__animated animate__infinite animate__slower animate__heartBeat">
//                         <StartButton variant="contained"><StyledLink to="/game">Start</StyledLink></StartButton>
//                     </Box> */}
//                     <StartButton variant="contained"><StyledLink to="/game">Start</StyledLink></StartButton>
//                 </LeftContainer>
//                 <RightContainer item xs={12} sm={6}>
//                     <Img src={HomePageImage} alt="hero-image" />
//                 </RightContainer>
//             </InnerContainer>
//         </Container>
//     )
// }

// export default Home;

import { Suspense, useEffect, useState } from "react";
import { Box, Tooltip, styled } from "@mui/material";
import { Canvas, Vector3 } from "@react-three/fiber";
import "animate.css";

import CustomStyle from "../../../Theme/CustomStyle";
import { Bio } from "../../../data/constants";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Loader } from "../../../components/Loader";
import Island from "../../../models/Island";
import Sky from "../../../models/Sky";
import { HomePopUp } from "../../../components/HomePopUp";

const Container = styled(Box)({
    backgroundColor: CustomStyle.colors.primary,
    height: '100vh',
    maxHeight: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
})

const AppBar = styled(Box)({
    position: 'absolute',
    top: 5,
    width: '100%',
    maxWidth: '1000px',
    display: 'flex',
    justifyContent: 'flex-end',
    zIndex: 99,
})

const LinkIcon = styled('a')({
    padding: '20px 20px',
    cursor: 'pointer',
    '&:hover': {
        color: CustomStyle.colors.mainGrey,
    },
})

const initialIslandForScreenSize = () => {
    let screenScale, screenPosition;
    
    if (window.innerWidth < 768) {
        screenScale = [2, 2, 2];
        screenPosition = [0, -6.5, -43.4];
    } else {
        screenScale = [2.5, 2.5, 2.5];
        screenPosition = [0, -10.5, -43.4];
    }
    return [screenScale as Vector3 , screenPosition as Vector3];
}


const Home = () => {

    const [currentStage, setCurrentStage] = useState<string>('front');
    const [isRotating, setIsRotating] = useState<boolean>(false);

    const [islandPosition, setIslandPosition] = useState<Vector3>(initialIslandForScreenSize()[1]);
    const [islandScale, setIslandScale] = useState<Vector3>(initialIslandForScreenSize()[0]);

    useEffect(() => {
        const adjustIslandForScreenSize = () => {
            const [screenScale, screenPosition] = initialIslandForScreenSize();
            setIslandPosition(screenPosition as Vector3);
            setIslandScale(screenScale as Vector3)
        };

        // Add event listener to listen for window resize
        window.addEventListener('resize', adjustIslandForScreenSize);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', adjustIslandForScreenSize);
        };
    }, []);

    return (
        <Container>
            <AppBar>
                <Tooltip title="LinkedIn" arrow><LinkIcon href={Bio.linkedin} target="display"><LinkedInIcon/></LinkIcon></Tooltip>
                <Tooltip title="Github" arrow><LinkIcon href={Bio.github} target="display"><GitHubIcon/></LinkIcon></Tooltip>
            </AppBar>
            <HomePopUp currentStage={currentStage}/>
            <Canvas camera={{ near: 0.1, far: 1000 }} style={{cursor: isRotating ? 'grabbing' : 'grab'}}>
                <Suspense fallback={<Loader/>}>
                    <directionalLight position={[1, 1, 1]} intensity={4} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 5, 10]} intensity={2} />
                    <hemisphereLight
                        groundColor='#000000'
                        intensity={1}
                    />
                    {/* <Sky/> */}
                    <Island
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                        position={islandPosition}
                        rotation={[0.15, -0.2, 0]}
                        scale={islandScale}
                    />
                </Suspense>
            </Canvas>
        </Container>
    )
}

export default Home;


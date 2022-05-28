import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MobileStepper from '@mui/material/MobileStepper'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import nft1 from '../../image/nft1.png'
import nft2 from '../../image/nft2.png'
import nft3 from '../../image/nft3.png'
import nft4 from '../../image/nft4.jpg'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const images = [
  {
    name: 'joe13',
    label: 'MakeYourOwnNFT',
    imgPath:nft1,
  },
  {
    name: 'Adolf',
    label: 'BoredCAt',
    imgPath: nft2,
  },
  {
    name: '#1234',
    label: 'digitalArt',
    imgPath:nft3,
  },
  {
    name: 'jHny',
    label: 'NFTMarketplace',
    imgPath:nft4,
  },
]

export const Slider = () => {
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = images.length

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleStepChange = (step) => {
    setActiveStep(step)
  }

  return (
    <div>
      <Box sx={{ maxWidth: 600, flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            marginBottom: 2,
            height: 50,
            pl: 2,
            bgcolor: 'background.default',
          }}
        >
          <Typography style={{ fontSize: 20, fontWeight: 600 }}>
            {images[activeStep].name}
          </Typography>
          <Typography style={{ fontSize: 16, fontWeight: 600, color: 'gray' }}>
            {images[activeStep].label}
          </Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 350,
                    display: 'flex',
                    maxWidth: 600,
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  src={step.imgPath}
                  alt=""
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </div>
  )
}

export default Slider

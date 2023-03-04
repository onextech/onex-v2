import * as React from 'react'
import { Box, Container, Link, Stack, Typography } from '@gravis-os/ui'
import ProTip from '@app/components/ProTip'
import Copyright from '@app/components/Copyright'
import LandingLayout from '@app/layouts/LandingLayout'
import appConfig from '@app/configs/appConfig'

export default function Home() {
  return (
    <LandingLayout seo={{ title: 'Home' }}>
      <Stack spacing={10} sx={{ mt: 5 }}>
        <Box>
          <Container>
            <Box
              sx={{
                my: 4,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Typography variant="h1" gutterBottom>
                {appConfig.title}
              </Typography>
              <Link href="/about" color="secondary">
                Go to the about page
              </Link>
              <ProTip />
              <Copyright />
            </Box>
          </Container>
        </Box>
      </Stack>
    </LandingLayout>
  )
}

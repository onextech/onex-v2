'use client'

/* eslint-disable fp/no-let, fp/no-mutation */

import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react'

import { DEFAULT_THEME_MODE_ENUM } from '@onex/types'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import { IconButton } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'

export interface UserPreferences {
  direction?: 'ltr' | 'rtl'
  isDarkSidebar?: boolean
  mode: 'dark' | 'light'
  responsiveFontSizes?: boolean
}

export interface UserPreferencesContextValue {
  handleToggleDarkMode: () => void
  handleToggleDarkSidebar: () => void
  isDarkMode: boolean
  saveUserPreferences: (update: UserPreferences) => void
  setDefaultThemeMode: Dispatch<SetStateAction<DEFAULT_THEME_MODE_ENUM>>
  toggleDarkModeIconButtonJsx: React.ReactElement
  userPreferences: UserPreferences
}

export interface UserPreferencesProviderProps {
  children?: React.ReactNode
  defaultThemeMode?: DEFAULT_THEME_MODE_ENUM
}

export interface RestoreUserPreferencesOptions {
  defaultThemeMode?: DEFAULT_THEME_MODE_ENUM
}

const initialUserPreferences: UserPreferences = {
  direction: 'ltr',
  isDarkSidebar: false,
  mode: 'dark',
  responsiveFontSizes: true,
}

// SSR-safe helper to check if we're in browser
const isBrowser = typeof window !== 'undefined'

const getComputedThemeSetting = (defaultThemeMode: DEFAULT_THEME_MODE_ENUM) => {
  switch (defaultThemeMode) {
    case DEFAULT_THEME_MODE_ENUM.DARK:
    case DEFAULT_THEME_MODE_ENUM.LIGHT: {
      return { mode: defaultThemeMode }
    }
    case DEFAULT_THEME_MODE_ENUM.SYSTEM: {
      // SSR-safe: default to dark on server, check preference on client
      const prefersDark = isBrowser && window.matchMedia?.('(prefers-color-scheme: dark)').matches
      return {
        mode: prefersDark ? 'dark' : 'dark', // Default dark on SSR for consistency
      }
    }
    case DEFAULT_THEME_MODE_ENUM.USER_LOCAL_STORAGE: {
      return {}
    }
    default: {
      return
    }
  }
}

const restoreUserPreferences = (
  options: RestoreUserPreferencesOptions = {}
): UserPreferences | null => {
  // SSR-safe: return null on server
  if (!isBrowser) return null

  let userPreferences: any = null
  const { defaultThemeMode } = options
  try {
    const storedData: null | string =
      globalThis.localStorage.getItem('userPreferences')

    const computedThemeSetting = getComputedThemeSetting(defaultThemeMode)

    userPreferences = {
      ...initialUserPreferences,
      ...JSON.parse(storedData),
      // Allow to overriding of the mode with the system preference
      ...computedThemeSetting,
    }
  } catch (error) {
    console.error(error)
    // If stored data is not a strigified JSON this will fail,
    // that's why we catch the error
  }

  return userPreferences
}

const storeUserPreferences = (userPreferences: UserPreferences): void => {
  if (!isBrowser) return
  globalThis.localStorage.setItem(
    'userPreferences',
    JSON.stringify(userPreferences)
  )
}

export const UserPreferencesContext =
  createContext<UserPreferencesContextValue>({
    handleToggleDarkMode: () => null,
    handleToggleDarkSidebar: () => null,
    isDarkMode: true, // Default to dark for SSR consistency
    saveUserPreferences: () => null,
    setDefaultThemeMode: () => null,
    toggleDarkModeIconButtonJsx: null,
    userPreferences: initialUserPreferences,
  })

export const UserPreferencesConsumer = UserPreferencesContext.Consumer

export const useUserPreferences = () => {
  return React.useContext(UserPreferencesContext)
}

/**
 * UserPreferencesProvider
 * @param props
 * @constructor
 * @example
 * <UserPreferencesProvider>
 *   <UserPreferencesConsumer>
 *     {({ userPreferences }) => (
 *       <ThemeProvider mode={getAdminTheme(userPreferences.mode)}>
 *         <CssBaseline />
 *           <Component {...pageProps} />
 *       </ThemeProvider>
 *     )}
 *   </UserPreferencesConsumer>
 * </UserPreferencesProvider>
 */
const UserPreferencesProvider: React.FC<UserPreferencesProviderProps> = (
  props
) => {
  const { children, defaultThemeMode: injectedDefaultThemeMode } = props
  const [userPreferences, setUserPreferences] = useState<UserPreferences>(
    initialUserPreferences
  )
  const [defaultThemeMode, setDefaultThemeMode] =
    useState<DEFAULT_THEME_MODE_ENUM>(
      injectedDefaultThemeMode || DEFAULT_THEME_MODE_ENUM.USER_LOCAL_STORAGE
    )
  // Track if component has mounted to prevent hydration mismatch
  const [hasMounted, setHasMounted] = useState(false)

  // @link: https://mui.com/material-ui/customization/dark-mode/#system-preference
  // Use noSsr option to prevent hydration mismatch
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)', {
    noSsr: true,
  })

  // Set mounted state after hydration
  useEffect(() => {
    setHasMounted(true)
  }, [])

  // Only restore preferences after mount to prevent hydration mismatch
  useEffect(() => {
    if (!hasMounted) return
    const restoredUserPreferences = restoreUserPreferences({
      defaultThemeMode,
    })
    if (restoredUserPreferences) {
      setUserPreferences(restoredUserPreferences)
    }
  }, [hasMounted, prefersDarkMode, defaultThemeMode])

  const saveUserPreferences = (
    updatedUserPreferences: UserPreferences
  ): void => {
    setUserPreferences(updatedUserPreferences)
    storeUserPreferences(updatedUserPreferences)
  }

  const isDarkMode = userPreferences.mode === 'dark'

  const handleToggleDarkMode = () => {
    return saveUserPreferences({
      ...userPreferences,
      mode: isDarkMode ? 'light' : 'dark',
    })
  }
  const handleToggleDarkSidebar = () => {
    return saveUserPreferences({
      ...userPreferences,
      isDarkSidebar: !userPreferences.isDarkSidebar,
    })
  }
  const toggleDarkModeIconButtonJsx = (
    <IconButton
      aria-label="toggle color mode"
      color="inherit"
      onClick={handleToggleDarkMode}
    >
      {isDarkMode ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
    </IconButton>
  )

  return (
    <UserPreferencesContext.Provider
      value={{
        handleToggleDarkMode,
        handleToggleDarkSidebar,
        isDarkMode,
        saveUserPreferences,
        setDefaultThemeMode,
        toggleDarkModeIconButtonJsx,
        userPreferences,
      }}
    >
      {children}
    </UserPreferencesContext.Provider>
  )
}

export default UserPreferencesProvider

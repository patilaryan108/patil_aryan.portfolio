import { useState, useEffect } from 'react'

/**
 * Custom hook to detect screen size and handle responsive logic
 * @param {string} query - Media query string (e.g., '(max-width: 768px)')
 * @returns {boolean} - True if screen matches the query
 */
export function useMediaQuery(query) {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const media = window.matchMedia(query)

        // Set initial value
        if (media.matches !== matches) {
            setMatches(media.matches)
        }

        // Listen for changes
        const listener = () => setMatches(media.matches)

        // Modern browsers
        if (media.addEventListener) {
            media.addEventListener('change', listener)
            return () => media.removeEventListener('change', listener)
        } else {
            // Fallback for older browsers
            media.addListener(listener)
            return () => media.removeListener(listener)
        }
    }, [matches, query])

    return matches
}

/**
 * Predefined breakpoint hooks
 */
export function useIsMobile() {
    return useMediaQuery('(max-width: 480px)')
}

export function useIsTablet() {
    return useMediaQuery('(min-width: 481px) and (max-width: 768px)')
}

export function useIsSmallDesktop() {
    return useMediaQuery('(min-width: 769px) and (max-width: 1024px)')
}

export function useIsDesktop() {
    return useMediaQuery('(min-width: 1025px)')
}

export function useIsMobileOrTablet() {
    return useMediaQuery('(max-width: 768px)')
}

const blockNumpadDigits = (): void => {
    const NUMPAD_DIGIT_CODES = [
        "Numpad0",
        "Numpad1",
        "Numpad2",
        "Numpad3",
        "Numpad4",
        "Numpad5",
        "Numpad6",
        "Numpad7",
        "Numpad8",
        "Numpad9",
    ] as const

    type NumpadDigitCode = (typeof NUMPAD_DIGIT_CODES)[number]

    const blockedCodes = new Set<NumpadDigitCode>(NUMPAD_DIGIT_CODES)

    const handleKeyDown = (e: KeyboardEvent): void => {
        if (
            e.location === KeyboardEvent.DOM_KEY_LOCATION_NUMPAD
            && blockedCodes.has(e.code as NumpadDigitCode)
        ) {
            e.stopPropagation()
        }
    }

    window.addEventListener("keydown", handleKeyDown, true)
}

blockNumpadDigits()

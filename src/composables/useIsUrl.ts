export const useIsUrl = (string: string | URL) => {
    // Checks if the string is a valid URL
    // https://stackoverflow.com/a/49283749/7625095
    try { return Boolean(new URL(string)) } catch (e) { return false }
}

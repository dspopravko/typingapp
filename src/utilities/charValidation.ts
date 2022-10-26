export const filterKey = (e: KeyboardEvent): string => {
    if (e.key !== 'Alt' && e.key !== 'Shift' && e.key !== 'Ctrl'  && e.key !== 'Control' && e.key !== 'CapsLock' && e.key !== 'Tab' && e.key !== 'Enter' && e.key !== 'Meta') {
        return e.key
    }
    return ''
}
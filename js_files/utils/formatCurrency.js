export function formatCurrency(priceCents) {
    if (priceCents === 0) {
        return 'Free';
    }
    return `&#x20BE;${(Math.round(priceCents) / 100).toFixed(2)}`;
}
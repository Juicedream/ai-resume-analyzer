/**
 *@param bytes
 * @returns
 */
export function formatSize(bytes: number): string {
    // Handle edge cases
    if (bytes === 0) return '0 Bytes';
    if (bytes < 0) return 'Invalid size';

    const units: string[] = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const k: number = 1024;

    // Calculate the appropriate unit
    const i: number = Math.floor(Math.log(bytes) / Math.log(k));

    // Convert and format to 2 decimal places
    const size: number = bytes / Math.pow(k, i);

    return `${size.toFixed(2)} ${units[i]}`;
}

export const generateUUID = () => crypto.randomUUID()
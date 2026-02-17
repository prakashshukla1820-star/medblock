import crypto from 'crypto';
import { promisify } from 'util';

const pbkdf2Async = promisify(crypto.pbkdf2);

/**
 * Simulates a heavy CPU-bound task (e.g., encryption).
 * This function is SYNCHRONOUS.
 * 
 * @returns {void}
 */
export const simulateHeavyEncryption = (): Promise<boolean> => {
    return pbkdf2Async('secret', 'salt', 500000, 64, 'sha512')
        .then(() => true)
        .catch(() => false);
};

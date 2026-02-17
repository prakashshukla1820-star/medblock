import crypto from 'crypto';
import { promisify } from 'util';

const pbkdf2Async = promisify(crypto.pbkdf2);

/**
 * Simulates a heavy CPU-bound task (e.g., encryption) in a non-blocking way.
 * Uses async PBKDF2 so the event loop is not blocked.
 *
 * @returns {Promise<boolean>} Resolves with true on success, false on failure.
 */
export const simulateHeavyEncryption = (): Promise<boolean> => {
    return pbkdf2Async('secret', 'salt', 500000, 64, 'sha512')
        .then(() => true)
        .catch(() => false);
};

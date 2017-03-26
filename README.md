# PwdHash2
PwdHash alternative, based on PwdHash and PwdHash-PoC, migrated to WebExtension and PBKDF2-SHA256 support

## Overview

This is an alteration to the [Stanford PwdHash](https://www.pwdhash.com/) tool, based on [PwdHash-PoC](https://www.cl.cam.ac.uk/~dl551/pwdhash/) 
The main changes to the original are the following.

1. Changed the hash algorithm from HMAC-MD5 to PBKDF2-SHA256.
2. Added the option to store a user-specified salt and iteration count.
3. Added the option to use legacy (Stanford PwdHash) mode by Shift-F2 or in the options

# PwdHash2
PwdHash2 is a Firefox Add-On, based on [Stanford PwdHash](https://www.pwdhash.com/) and [PwdHash-PoC](https://github.com/llewelld/pwdhash-poc), migrated to WebExtension and PBKDF2-SHA256 support.

Get the add-on at [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/addon/pwdhash2/), see source at [github.com/GWuk/PwdHash2](https://github.com/GWuk/PwdHash2/)

## Generate passwords
You can create the password without the add-on locally in the browser (no user input is sent anywhere)
* [PwdHash (Legacy)](pwdhash/)
* [PwdHash2](pwdhash2/)

---

## Changes to the original Stanford PwdHash:
1. Fixed defunct original version, caused by changes in Firefox 66.0.2 keypress event handling
2. Highlight password field, if active
3. Added option to change the hash algorithm from HMAC-MD5 to PBKDF2-SHA256 by enabling non-legacy mode.
4. Added option to store a user-specified salt and iteration count.
5. Added option to use legacy (Stanford PwdHash) mode by Shift-F2


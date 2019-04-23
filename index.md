# PwdHash2
Create secure, site based passwords based on your master password and the site's domain name.
You have to define a salt in the add-on's options and remember this as good as your master password

# GitHub project page
The GitHub project is located at [https://github.com/GWuk/PwdHash2/](https://github.com/GWuk/PwdHash2/)

## Internals
This is an alteration to the [Stanford PwdHash](https://www.pwdhash.com/) tool, based on [PwdHash-PoC](https://github.com/llewelld/pwdhash-poc) 

Changes to the original Stanford PwdHash:
1. Fixed defunct original version, caused by changes in Firefox 66 keypress event handling
2. Highlight password field, if active
3. Option to change the hash algorithm from HMAC-MD5 to PBKDF2-SHA256.
4. Added the option to store a user-specified salt and iteration count.
5. Added the option to use legacy (Stanford PwdHash) mode by Shift-F2 or in the options
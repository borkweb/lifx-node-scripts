lifx-node-scripts
=================

These are my utility scripts for my LIFX bulbs.  Nothing great here.

## Usage
I have an iMac in my living room that has _Speakable Items_ turned on.  I have set up some AppleScripts
voice commands (saved in: `~/Library/Speech/SpeakableItems/` with the file name of the voice command you
wish to use) that execute my lifx node scripts:

Example: `~/Library/Speech/SpeakableItems/Lights On`

```applescript
do shell script "/usr/local/bin/node /Users/matt/projects/lifx/home-commands.js on"
```

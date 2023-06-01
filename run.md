### Run SCARLET
___

this document will auto run required commands to launch the web portal locally.

Always change to the web_des_test directory before running these commands in the terminal.
It is easier to just press the run button here by the bash snippet.

```bash
export NODE_OPTIONS=--openssl-legacy-provider
ntl dev
```

When you are finished close the terminal to kill the local port or run:
```bash
netstat -vanp tcp | grep 3000
```
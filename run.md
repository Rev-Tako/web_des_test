### Run SCARLET


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
sudo lsof -i :3000

```
kill -9 <PID>   - immediate (unsafe)
kill -15 <PID>  - term (safer)
kill -3 <PID>   - quit (safer)

{ headers: { Accept: "application/json" } }


      <header className='App-header'>
          <p>
              SCARLET
          </p>
      </header>


      <body className="App-body">
            <SCARLET_frontend />
      </body>


/*./index.html*/
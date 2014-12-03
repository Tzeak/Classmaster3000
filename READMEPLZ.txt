Classmaster 3000 Installation Instructions

1. Select node installation package depending on operating system from within root of jump drive
    -- Only if node is not installed

2. Follow install wizard

3. If on Windows, run cmd.exe as Administrator, on Mac run Terminal

4. Navigate to the root folder of the application in the Terminal (or command prompt)

5. Execute 'npm install -g grunt' on Windows, or 'sudo npm install -g grunt' on Mac
    -- Installs the grunt command line interface (grunt is a task automator)

6. Execute 'npm install' on Windows or 'sudo npm install' on Mac
    -- Installs node dependencies

7. Execute 'grunt serve --force' 
    -- Spins up a local node server, --force override compass requirement for sass development

8. Enjoy